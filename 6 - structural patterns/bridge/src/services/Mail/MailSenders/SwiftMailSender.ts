import {MailSender} from "@/services/Mail/MailSender";

export class SwiftMailSender implements MailSender {
    private readonly mail: Mail;

    constructor(mail: Mail) {
        this.mail = mail;
    }

    send(): boolean {
        console.log('sending mail using swift mailer');

        let message = `
You have an new message!

From: ${this.mail.from()}
To: ${this.mail.to()}

Content:
${this.mail.content()}
        `;

        console.log('Sent: ', message);

        return true;
    }
}
