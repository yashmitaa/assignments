const inputTask = document.getElementById("inputTask");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

inputTask.addEventListener("keypress", (e) => {
  if (e.which == 13) {
    const task = inputTask.value;

    if (task === "") alert("Please Enter something!!");
    else {
      const listItem = document.createElement("li");
      const inputElement = document.createElement("textarea");
      const doneTask = document.createElement("button");
      const removeBtn = document.createElement("button");
      const upBtn = document.createElement("button");
      const downBtn = document.createElement("button");

      inputElement.value = task;
      listItem.append(inputElement);
      inputElement.disabled = true;

      removeBtn.innerHTML = `<i class="fas fa-times"></i>`;
      upBtn.innerHTML = `<i class="fas fa-sort-up"></i>`;
      downBtn.innerHTML = `<i class="fas fa-sort-down"></i>`;
      doneTask.innerHTML = `<i class="far fa-edit"></i>`;

      listItem.append(inputElement);
      listItem.append(doneTask);
      listItem.append(upBtn);
      listItem.append(downBtn);
      listItem.append(removeBtn);

      taskList.appendChild(listItem);
      inputTask.value = "";

      removeBtn.onclick = () => {
        listItem.remove();
      };

      upBtn.onclick = function () {
        taskList.insertBefore(listItem, listItem.previousElementSibling);
      };

      downBtn.onclick = function () {
        taskList.insertBefore(
          listItem,
          listItem.nextElementSibling.nextSibling
        );
      };

      doneTask.onclick = function () {
        inputElement.disabled = false;
        inputElement.focus();

        inputElement.addEventListener("keyup", (event) => {
          if (event.keyCode === 13) {
            inputElement.disabled = true;
          }
        });
      };
    }
  }
});

addTask.onclick = function () {
  const task = inputTask.value;

  if (task === "") alert("Please Enter something!!");
  else {
    const listItem = document.createElement("li");
    const inputElement = document.createElement("textarea");
    const doneTask = document.createElement("button");
    const removeBtn = document.createElement("button");
    const upBtn = document.createElement("button");
    const downBtn = document.createElement("button");

    inputElement.value = task;
    listItem.append(inputElement);
    inputElement.disabled = true;

    removeBtn.innerHTML = `<i class="fas fa-times"></i>`;
    upBtn.innerHTML = `<i class="fas fa-sort-up"></i>`;
    downBtn.innerHTML = `<i class="fas fa-sort-down"></i>`;
    doneTask.innerHTML = `<i class="far fa-edit"></i>`;

    listItem.append(inputElement);
    listItem.append(doneTask);
    listItem.append(upBtn);
    listItem.append(downBtn);
    listItem.append(removeBtn);

    taskList.appendChild(listItem);
    inputTask.value = "";

    removeBtn.onclick = () => {
      listItem.remove();
    };

    upBtn.onclick = function () {
      taskList.insertBefore(listItem, listItem.previousElementSibling);
    };

    downBtn.onclick = function () {
      taskList.insertBefore(listItem, listItem.nextElementSibling.nextSibling);
    };

    doneTask.onclick = function () {
      inputElement.disabled = false;
      inputElement.focus();

      inputElement.addEventListener("keyup", (event) => {
        if (event.keyCode === 13) {
          inputElement.disabled = true;
        }
      });
    };
  }
};
