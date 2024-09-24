export class ScheduleManager {
    static instance;
    tasks = [];
    constructor() { }
    static getInstance() {
        if (!ScheduleManager.instance) {
            ScheduleManager.instance = new ScheduleManager();
        }
        return ScheduleManager.instance;
    }
    addTask(task) {
        if (this.validateTask(task)) {
            this.tasks.push(task);
            return `Task added successfully. No conflicts.`;
        }
        return `Error: Task conflicts with existing task.`;
    }
    removeTask(description) {
        const index = this.tasks.findIndex(t => t.description === description);
        if (index >= 0) {
            this.tasks.splice(index, 1);
            return `Task removed successfully.`;
        }
        return `Error: Task not found.`;
    }
    viewTasks() {
        if (this.tasks.length === 0)
            return `No tasks scheduled for the day.`;
        return this.tasks
            .sort((a, b) => a.startTime.localeCompare(b.startTime))
            .map(t => `${t.startTime} - ${t.endTime}: ${t.description} [${t.priority}]`)
            .join('\n');
    }
    getTasks() {
        return this.tasks;
    }
    validateTask(newTask) {
        for (let task of this.tasks) {
            if (this.isOverlapping(task, newTask)) {
                return false;
            }
        }
        return true;
    }
    isOverlapping(task, newTask) {
        return (newTask.startTime < task.endTime &&
            newTask.endTime > task.startTime);
    }
}
