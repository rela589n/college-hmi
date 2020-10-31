import {ExternalApiConnection} from "@/services/ExternalApi/ExternalApiConnection";
import {SomeExternalApiConnectionImpl} from "@/services/ExternalApi/SomeExternalApiConnectionImpl";

export class SomeExternalApiConnectionProxy implements ExternalApiConnection {

    private proxiedConnection: SomeExternalApiConnectionImpl | null = null;

    async fetchSomeData(): Promise<object> {
        return this.connection().fetchSomeData();
    }

    private connection(): SomeExternalApiConnectionImpl {
        if (this.proxiedConnection == null) {
            this.proxiedConnection = new SomeExternalApiConnectionImpl();
        }

        return this.proxiedConnection;
    }
}
