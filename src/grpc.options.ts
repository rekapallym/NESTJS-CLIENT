import { Transport, ClientOptions } from "@nestjs/microservices";
import { join } from "path";

// same object used by microservice server
export const microservicesOptions: ClientOptions = {
    transport: Transport.GRPC,
    options:{
      package: 'app',
      protoPath: join(__dirname, '../src/app.proto'),
    }
  }