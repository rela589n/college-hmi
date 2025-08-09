import {Middleware} from "@/middleware/Middleware";
import {CommandRequest} from "@/requests/CommandRequest";

export class AuthorizationMiddleware implements Middleware<CommandRequest>
{
    handle(request: CommandRequest, next: (request: CommandRequest) => void): void {
        if (request.username !== 'admin') {
            alert('you don\'t have admin username to do this action')
            return;
        }

        console.log('successful authorization')
        return next(request);
    }
}
