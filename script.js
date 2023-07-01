var taskInput = document.getElementById("task-input");
        var addButton = document.getElementById("add-button");
        var taskList = document.getElementById("task-list");

        function addTask() {
            var taskText = taskInput.value.trim();

            if (taskText === "") {
                alert("Please enter a task.");
                return;
            }

            var taskItem = document.createElement("li");
            taskItem.classList.add("task");

            var taskSpan = document.createElement("span");
            taskSpan.textContent = taskText;
            taskItem.appendChild(taskSpan);

            var deleteButton = document.createElement("button");
            deleteButton.classList.add("delete-button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function () {
                taskItem.remove();
            });
            taskItem.appendChild(deleteButton);

            taskList.appendChild(taskItem);

            taskInput.value = "";
        }

        addButton.addEventListener("click", addTask);