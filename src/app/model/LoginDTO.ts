export class LoginDTO {
    public Username?: string;
    public Password?: string;
    constructor(obj:Partial<LoginDTO>={}){
        Object.assign(this,obj);
    }
}