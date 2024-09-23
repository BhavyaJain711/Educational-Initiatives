import { ScheduleManager } from './classes/ScheduleManager.js';
import { TaskFactory } from './classes/TaskFactory.js';
import { ConflictObserver } from './classes/ConflictObserver.js';

const scheduleManager = ScheduleManager.getInstance();
const observer = new ConflictObserver();

const addTask = (description: string, startTime: string, endTime: string, priority: string) => {
    const task = TaskFactory.createTask(description, startTime, endTime, priority);
    const result = scheduleManager.addTask(task);
    if (result.includes("Error")) {
        observer.notify(result);
    } else {
        console.log(result);
    }
};

const removeTask = (description: string) => {
    console.log(scheduleManager.removeTask(description));
};

const viewTasks = () => {
    console.log(scheduleManager.viewTasks());
};

addTask("Morning Exercise", "07:00", "08:00", "High");
addTask("Team Meeting", "09:00", "10:00", "Medium");
viewTasks();

addTask("Training Session", "09:30", "10:30", "High");  // This will conflict
addTask("Lunch Break", "12:00", "13:00", "Low");
viewTasks();

removeTask("Morning Exercise");
viewTasks();
