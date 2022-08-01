import { v4 as uuidv4 } from 'uuid';
import ITransaction from '../model/transaction_model';
import TransactionTable from '../repositories/db/transaction';
import ValidateDraft from '../validator/draft_validate';
import AccountTable from '../repositories/db/account';
import DraftRequest from '../model/draft_request_model';
import { BadRequest } from '../error/errors';
import { Result } from '../utils/result';
import DraftResponse from '../model/draft_response_model';
import ValidateDeposit from '../validator/deposit_validate';
export default class CreateDraft {
  private tax = 4;

  public async execute(params: DraftRequest): Promise<Result<DraftResponse>> {

    const validate = await new ValidateDraft().execute(params);
    if(validate.isFailure){
      return Result.fail(validate.error)
    }
    const {account, value} = params
    const accountId = await new AccountTable().find(account);
    if(accountId.isFailure){
      return Result.fail(accountId.error)
    }
    const totalValue = value - this.tax;
    const draft: ITransaction = this.buildDraft(accountId.getValue(), totalValue, value);

    const accountResult = await new AccountTable().draft(accountId.getValue(), value + this.tax);
    if(accountResult.isFailure){
      return Result.fail(accountResult.error)
    }
    const transactionResult = await new TransactionTable().insert(draft);
    if(transactionResult.isFailure){
      return Result.fail(transactionResult.error)
    }
    return Result.ok({
      account: accountResult.getValue(),
      draft: transactionResult.getValue()
    });
  }


  private buildDraft(accountId: string, totalValue: number, value: number): ITransaction {
    return {
      account: accountId,
      id: uuidv4(),
      type: 'draft',
      destiny_account: null,
      value: parseFloat(value.toFixed(2)),
      total_value: parseFloat(totalValue.toFixed(2)),
      tax: parseFloat(this.tax.toFixed(2)),
    };
  }
}
