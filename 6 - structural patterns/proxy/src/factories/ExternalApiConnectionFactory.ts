import {ExternalApiConnection} from "@/services/ExternalApi/ExternalApiConnection";
import {SomeExternalApiConnectionProxy} from "@/services/ExternalApi/SomeExternalApiConnectionProxy";

export class ExternalApiConnectionFactory {
    getConnection(): ExternalApiConnection {
        return new SomeExternalApiConnectionProxy();
    }
}
