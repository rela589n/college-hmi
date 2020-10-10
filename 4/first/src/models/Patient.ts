export default class Patient {
    public surname: string;
    public name: string;
    public patronymic: string;
    public diagnosis: string;
    public roomNumber: string;

    private _birthday: Date;
    private _dateOut: Date;
    constructor(surname: string,
                name: string,
                patronymic: string,
                birthday: Date,
                diagnosis: string,
                roomNumber: any,
                dateOut: Date) {
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.diagnosis = diagnosis;
        this.roomNumber = roomNumber;
        this._birthday = birthday;
        this._dateOut = dateOut;
    }

    get birthday(): string {
        return this._birthday.getDate() + "/" + (this._birthday.getMonth() + 1) + "/" + this._birthday.getFullYear();
    }

    get dateOut(): string {
        return  this._dateOut.getDate() + "/" + (this._dateOut.getMonth() + 1) + "/" + this._dateOut.getFullYear();
    }

    get rawDateOut(): Date {
        return new Date(this._dateOut.getTime());
    }
}
