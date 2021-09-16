import { APILogger } from '../logger/api.logger';
import { TaskRepository } from '../repository/task.repository';

export class TaskService {
    
    private logger: APILogger;

    private taskRepository: TaskRepository;

    constructor() {
        this.taskRepository = new TaskRepository();
        this.logger = new APILogger()
    }

    async getTasks() {
        return await this.taskRepository.getTasks();
    }

    async createTask(task) {
        this.logger.error('Task service::' + task);
        return await this.taskRepository.createTask(task);
    }

    async updateTask(task) {
        return await this.taskRepository.updateTask(task);
    }

    async deleteTask(taskId) {
        return await this.taskRepository.deleteTask(taskId);
    }

}