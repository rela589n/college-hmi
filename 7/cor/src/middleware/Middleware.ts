export interface Middleware<R> {
    handle(request: R, next: (request: R) => void): void;
}
