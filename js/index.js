'use strict';
console.log("boom")
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM Ready');

    const todoForm = document.querySelector('#todo')

    todoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const taskInput = this.querySelector('input[name="taskEntry"]');
        generateList(taskInput);
    });

    function generateList(taskInput) {
        // Get List Items
        const taskList = document.querySelector('#taskList');
        // Generate a new LI element
        const taskElement = document.createElement('li');
        // Put the form value in the li element
        taskElement.textContent = taskInput.value;
        taskList.appendChild(taskElement);
        clearInput(taskInput);
    }

    function clearInput (input) {
        input.value = '';
        return;
    }
});