import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    massages: string[] = [];

    add(massage: string): void {
        this.massages.push(massage);
    }

    clear() {
        this.massages = [];
    }
}