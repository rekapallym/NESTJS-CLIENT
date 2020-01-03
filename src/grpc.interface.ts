import {Observable} from 'rxjs';

export interface IGrpcService {
    getTransactionByRowId(transactionRequest: TransactionRequest): Observable<any>;
}
interface TransactionRequest {
    transLogRowId: string;
  }