interface PatientDtoDateFormat {
    year: number;
    month: number;
    day: number;
}

export default class CreatePatientDto {
    public surname: string | undefined;
    public name: string | undefined;
    public patronymic: string | undefined;
    public birthday: PatientDtoDateFormat | undefined;
    public diagnosis: string | undefined;
    public roomNumber: string | undefined;
    public dateOut: PatientDtoDateFormat | undefined;

    clear() {
        // @ts-ignore
        Object.getOwnPropertyNames(this).forEach((prop: string) => delete this[prop]);
    }
}
