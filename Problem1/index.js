// index.ts
import { ScheduleManager } from './classes/ScheduleManager.js';
import { TaskFactory } from './classes/TaskFactory.js';
import { ConflictObserver } from './classes/ConflictObserver.js';
import * as readline from 'readline';
// Create a readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const scheduleManager = ScheduleManager.getInstance();
const observer = new ConflictObserver();
// Function to display the menu
const showMenu = () => {
    console.log(`
    ==== Astronaut Scheduler ====
    1. Add a new task
    2. Remove a task
    3. View all tasks
    4. Exit
    `);
};
// Function to handle menu selection
const handleMenuSelection = () => {
    rl.question('Select an option (1-4): ', (choice) => {
        switch (choice) {
            case '1':
                promptForNewTask();
                break;
            case '2':
                promptForTaskRemoval();
                break;
            case '3':
                viewTasks();
                showMenu();
                handleMenuSelection();
                break;
            case '4':
                console.log('Exiting the application...');
                rl.close();
                break;
            default:
                console.log('Invalid option. Please select a valid choice.');
                showMenu();
                handleMenuSelection();
        }
    });
};
// Function to validate time in HH:MM format
const isValidTime = (time) => {
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/; // Regex for 24-hour format HH:MM
    return timeRegex.test(time);
};
// Function to prompt user for adding a new task with numeric input for priority and time validation
const promptForNewTask = () => {
    rl.question('Enter task description: ', (description) => {
        rl.question('Enter start time (HH:MM): ', (startTime) => {
            if (!isValidTime(startTime)) {
                console.log('Invalid start time format. Please enter time in HH:MM (24-hour) format.');
                showMenu();
                handleMenuSelection();
                return;
            }
            rl.question('Enter end time (HH:MM): ', (endTime) => {
                if (!isValidTime(endTime)) {
                    console.log('Invalid end time format. Please enter time in HH:MM (24-hour) format.');
                    showMenu();
                    handleMenuSelection();
                    return;
                }
                rl.question('Enter priority (1=Low, 2=Medium, 3=High): ', (priorityInput) => {
                    let priority = '';
                    switch (priorityInput) {
                        case '1':
                            priority = 'Low';
                            break;
                        case '2':
                            priority = 'Medium';
                            break;
                        case '3':
                            priority = 'High';
                            break;
                        default:
                            console.log('Invalid priority selected. Please enter 1, 2, or 3.');
                            showMenu();
                            handleMenuSelection();
                            return;
                    }
                    // Add the task once all inputs are validated and gathered
                    addTask(description, startTime, endTime, priority);
                    showMenu();
                    handleMenuSelection();
                });
            });
        });
    });
};
// Function to prompt user for removing a task
// Function to prompt user for removing a task by task number
const promptForTaskRemoval = () => {
    const tasks = ScheduleManager.getInstance().getTasks();
    if (tasks.length === 0) {
        console.log('No tasks available to remove.');
        showMenu();
        handleMenuSelection();
        return;
    }
    // Display tasks with corresponding numbers
    console.log('Tasks:');
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task.startTime} - ${task.endTime}: ${task.description} [${task.priority}]`);
    });
    rl.question('Enter the task number to remove: ', (taskNumberInput) => {
        const taskNumber = parseInt(taskNumberInput);
        if (isNaN(taskNumber) || taskNumber < 1 || taskNumber > tasks.length) {
            console.log('Invalid task number.');
        }
        else {
            const taskToRemove = tasks[taskNumber - 1];
            removeTask(taskToRemove.description);
            console.log(`Task "${taskToRemove.description}" removed successfully.`);
        }
        showMenu();
        handleMenuSelection();
    });
};
// Function to add a task
const addTask = (description, startTime, endTime, priority) => {
    const task = TaskFactory.createTask(description, startTime, endTime, priority);
    const result = scheduleManager.addTask(task);
    if (result.includes('Error')) {
        observer.notify(result);
    }
    else {
        console.log(result);
    }
};
// Function to remove a task
const removeTask = (description) => {
    console.log(scheduleManager.removeTask(description));
};
// Function to view all tasks
const viewTasks = () => {
    console.log(scheduleManager.viewTasks());
};
// Start the menu-driven console application
showMenu();
handleMenuSelection();
