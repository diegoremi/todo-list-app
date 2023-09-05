import { Injectable } from "@angular/core";
import { Todo } from "../interfaces/todo.interface";

@Injectable({ providedIn: 'root' })
export class TodosService {
    async getTodos(): Promise<Todo[]> {
        return await [{id: '1', title: 'Test Title', description: 'Test Description', completed: false}]
    }
}
