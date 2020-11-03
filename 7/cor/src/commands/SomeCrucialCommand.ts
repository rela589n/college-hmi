import {CommandRequest} from "@/requests/CommandRequest";

export class SomeCrucialCommand {
    execute(request: CommandRequest) {
        console.log('execute some crucial command');
        console.log('request ip: ' + request.ip)
        console.log('request user: ' + request.username)
    }
}
