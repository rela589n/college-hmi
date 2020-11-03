import {Middleware} from "@/middleware/Middleware";
import {CommandRequest} from "@/requests/CommandRequest";

export class LoggingMiddleware implements Middleware<CommandRequest> {
    handle(request: CommandRequest, next: (request: CommandRequest) => void): void {
        console.log('Log: ', request)

        return next(request);
    }
}
