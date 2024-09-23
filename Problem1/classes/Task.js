// Task.ts
export class Task {
    description;
    startTime;
    endTime;
    priority;
    constructor(description, startTime, endTime, priority) {
        this.description = description;
        this.startTime = startTime;
        this.endTime = endTime;
        this.priority = priority;
    }
}
