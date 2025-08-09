export class CommandRequest {
    private readonly _ip: string;
    private readonly _username: string;

    constructor(ip: string, username: string) {
        this._ip = ip;
        this._username = username;
    }

    get ip(): string {
        return this._ip;
    }

    get username(): string {
        return this._username;
    }
}
