export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type SalesByGender = {
  gender: Gender;
  sum: number;
}

export type PieChartConfig = {
  labels: string[];
  series: number[];
};
