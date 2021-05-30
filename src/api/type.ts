/** Api */
export type Api = {
  queries: Queries;
};

/** queries */
export type Queries = {
  entries: Entries;
};

export type Entries = (options: EntriesParams) => Promise<EntriesResponse>;

export type EntriesParams = {
  content_type: string;
  skip?: number;
  limit?: number;
};

export type EntriesResponse = {
  page: number;
  total: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
} & Required<EntriesParams>;
