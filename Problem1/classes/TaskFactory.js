import { Task } from './Task.js';
export class TaskFactory {
    static createTask(description, startTime, endTime, priority) {
        return new Task(description, startTime, endTime, priority);
    }
}
