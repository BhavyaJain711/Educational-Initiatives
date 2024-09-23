import { Task } from './Task.js';

export class TaskFactory {
    static createTask(description: string, startTime: string, endTime: string, priority: string): Task {
        return new Task(description, startTime, endTime, priority);
    }
}
