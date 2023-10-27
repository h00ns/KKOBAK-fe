export interface GetRecordPayload {
  year: number;
  month: number;
}

export interface GetRecordResponse {
  income: number;
  outcome: number;
  balance: number;
}

export interface CreateRecordPayload {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  year: number;
  month: number;
  day: number;
}

export interface GetRecordDetailPayload {
  year: number;
  month: number;
  day: number;
}

export interface GetRecordDetailResponse {
  list: {
    id: number;
    title: string;
    value: number;
    type: 'income' | 'outcome';
    year: number;
    month: number;
    day: number;
  }[];
}
