export enum Status {
  NEW = "NEW",
  CURRENT = "CURRENT",
  FINISH = "FINISH",
  WISH = "WISH",
  FAVOURITE = "FAVOURITE"
}

export interface IBookDto {
  id: string;
  title: string;
  author: string;
  status: Status;
  cover: string;
  date?: Date;
  rate: number;
}
