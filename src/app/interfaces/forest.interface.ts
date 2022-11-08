export type TSex = 'man' | 'woman';

export interface IPerson{
  id: number;
  name: string;
  sex: TSex;
  mother?: number;
  father?: number;
  children?: number[];
  family?: string;
  secondName?: string;
  birthday?: number;
  death?: number;
  comment?: string;
  success?: boolean;
}

export interface IPersonDrawParams {
  person: IPerson;
  coordX: number;
  coordY: number;
}
