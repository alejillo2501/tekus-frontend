export interface basic {
  data: bitcoint;
  status: number;
  message: String;
  date: String;
}

export interface avance {
  data: info[];
  status: number;
  message: String;
  date: String;
}

export interface info {
  info:bitcoint;
  item:String;
  date: String;
}

export interface bitcoint {
  base: String;
  currency:String;
  amount:String;
}

export interface byDate {
  data: currency;
  status: number;
  message: String;
  date: String;
}

export interface currency {
  COP: bitcoint;
  EUR: bitcoint;
  USD: bitcoint;
  item:String
}