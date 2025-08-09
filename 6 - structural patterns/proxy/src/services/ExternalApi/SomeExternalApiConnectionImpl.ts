import {ExternalApiConnection} from "@/services/ExternalApi/ExternalApiConnection";

export class SomeExternalApiConnectionImpl implements ExternalApiConnection{
    constructor() {
        console.log('Establishing connection to an external api')
    }

    async fetchSomeData(): Promise<object> {
        return {
            name: 'Vasya',
            surname: 'Petya',
        };
    }
}
