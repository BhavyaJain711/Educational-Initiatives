import { Task } from './Task.js';

export class ScheduleManager {
    private static instance: ScheduleManager;
    private tasks: Task[] = [];

    private constructor() {}

    static getInstance(): ScheduleManager {
        if (!ScheduleManager.instance) {
            ScheduleManager.instance = new ScheduleManager();
        }
        return ScheduleManager.instance;
    }

    addTask(task: Task): string {
        if (this.validateTask(task)) {
            this.tasks.push(task);
            return `Task added successfully. No conflicts.`;
        }
        return `Error: Task conflicts with existing task.`;
    }

    removeTask(description: string): string {
        const index = this.tasks.findIndex(t => t.description === description);
        if (index >= 0) {
            this.tasks.splice(index, 1);
            return `Task removed successfully.`;
        }
        return `Error: Task not found.`;
    }

    viewTasks(): string {
        if (this.tasks.length === 0) return `No tasks scheduled for the day.`;
        return this.tasks
            .sort((a, b) => a.startTime.localeCompare(b.startTime))
            .map(t => `${t.startTime} - ${t.endTime}: ${t.description} [${t.priority}]`)
            .join('\n');
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    private validateTask(newTask: Task): boolean {
        for (let task of this.tasks) {
            if (this.isOverlapping(task, newTask)) {
                return false;
            }
        }
        return true;
    }

    private isOverlapping(task: Task, newTask: Task): boolean {
        return (
            newTask.startTime < task.endTime &&
            newTask.endTime > task.startTime
        );
    }
}
