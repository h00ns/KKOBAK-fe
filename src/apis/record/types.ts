export interface GetRecordPayload {
  year: string;
  month: string;
}

export interface GetRecordResponse {
  income: number;
  outcome: number;
  balance: number;
}
