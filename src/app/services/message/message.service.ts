import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    massages: string[] = [];

    add(massage: string) {
        this.massages.push(massage);
    }

    clear() {
        this.massages = [];
    }
}