import {MailSender} from "@/services/Mail/MailSender";

export class SimpleMailSender implements MailSender {
    private readonly mail: Mail;

    constructor(mail: Mail) {
        this.mail = mail;
    }

    send(): boolean {
        console.log('sending mail using simple mailer');

        let message = `
From: ${this.mail.from()}
To: ${this.mail.to()}

${this.mail.content()}
        `;

        console.log("Sent: ", message);

        return true;
    }
}
