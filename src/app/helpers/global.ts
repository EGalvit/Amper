export class GlobalApp {

    constructor() {}
    
    public getUserid(): string {
        return localStorage.getItem('UserID');
    }
}