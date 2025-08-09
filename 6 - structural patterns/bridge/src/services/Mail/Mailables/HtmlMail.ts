export class HtmlMail implements Mail {
    private readonly _from: string;
    private readonly _to: string;
    private readonly _content: string;

    constructor(from: string, to: string, content: string) {
        this._from = from;
        this._to = to;
        this._content = content;

        console.log('Html mail created')
    }

    content(): string {
        return `<p>${this._content}</p>`;
    }

    from(): string {
        return `<h2>${this._from}</h2>`;
    }

    to(): string {
        return `<h2>${this._to}</h2>`;
    }
}
