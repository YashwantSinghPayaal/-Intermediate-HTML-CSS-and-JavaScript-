// Form Validation
document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  
    if (!name || !email) {
      alert("Please fill in all fields.");
      return;
    }
  
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email.");
      return;
    }
  
    alert("Form submitted successfully!");
    this.reset();
  });
  
  // To-Do List
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  
  taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      addTask(taskInput.value.trim());
      taskInput.value = "";
    }
  });
  
  function addTask(taskText) {
    if (!taskText) return;
  
    const taskEl = document.createElement("div");
    taskEl.className = "task";
    taskEl.innerHTML = `
      <span>${taskText}</span>
      <button onclick="this.parentElement.remove()">Remove</button>
    `;
  
    taskList.appendChild(taskEl);
  }
  