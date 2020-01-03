import { Controller, Logger, Post, Body, OnModuleInit, Get, Param } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { microservicesOptions } from './grpc.options';
import { IGrpcService } from './grpc.interface';

@Controller()
export class AppController implements OnModuleInit {

  // Create a logger instance
  private logger = new Logger('AppController');

  // // Inject the math service
  // constructor(private mathService: MathService) {}

  @Client(microservicesOptions)
  private client: ClientGrpc;

  private grpcService: IGrpcService;

  onModuleInit() {
    this.grpcService = this.client.getService<IGrpcService>('AppController')
  }

  @Get(':rowId')
  // Define the logic to be executed
  async getTransactionByRowId(@Param() params)  {
    this.logger.log('Param Value of Row ' + params.rowId); // Log something on every call
    return this.grpcService.getTransactionByRowId({transLogRowId: params.rowId.toString()});
  }

}
