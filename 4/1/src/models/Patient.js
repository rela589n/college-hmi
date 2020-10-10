export class Patient {
    constructor(surname,
                name,
                patronymic,
                birthday,
                diagnosis,
                roomNumber,
                dateOut) {
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.diagnosis = diagnosis;
        this.roomNumber = roomNumber;
        this._birthday = birthday;
        this._dateOut = dateOut;
    }

    get birthday() {
        return this._birthday.getFullYear() + "-" + (this._birthday.getMonth() + 1) + "-" + this._birthday.getDate();
    }

    get dateOut() {
        return this._dateOut.getFullYear() + "-" + (this._dateOut.getMonth() + 1) + "-" + this._dateOut.getDate();
    }
}