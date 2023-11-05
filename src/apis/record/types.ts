export interface GetRecordPayload {
  year: number;
  month: number;
}

export interface GetRecordResponse {
  income: number;
  outcome: number;
  balance: number;
  list: RecordItem[];
}

export interface CreateRecordPayload {
  title: string;
  value: number;
  type: 'income' | 'outcome' | null;
  year: number;
  month: number;
  day: number;
  code: number;
}

export interface GetRecordDetailPayload {
  year: number;
  month: number;
  day: number;
}

export interface GetRecordDetailResponse {
  list: RecordItem[];
}

export interface RecordItem {
  id: number;
  title: string;
  value: number;
  type: 'income' | 'outcome';
  year: number;
  month: number;
  day: number;
  filter: {
    id: number;
    code: number;
    name: string;
  };
}
