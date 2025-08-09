import {Middleware} from "@/middleware/Middleware";

export class MiddlewareAssembler<R> {
    private middlewareObjects: Middleware<R>[];

    constructor(middleware: Middleware<R>[]) {
        this.middlewareObjects = middleware;
    }

    assemble(finite: (request: R) => void) {
        for (let i = this.middlewareObjects.length - 1; i >= 0; --i) {
            const next = finite;

            finite = (request: R) =>
                this.middlewareObjects[i].handle(
                    request,
                    (request: R) => next(request)
                );
        }

        return finite;
    }
}
