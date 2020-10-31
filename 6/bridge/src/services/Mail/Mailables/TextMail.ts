export class TextMail implements Mail {
    private readonly _from: string;
    private readonly _to: string;
    private readonly _content: string;

    constructor(from: string, to: string, content: string) {
        this._from = from;
        this._to = to;
        this._content = content;

        console.log('Text mail created')
    }

    content(): string {
        return this._from;
    }

    from(): string {
        return this._to;
    }

    to(): string {
        return this._content;
    }
}
