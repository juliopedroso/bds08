import { SalesByGender } from "../../types";

export const sumSalesByGender = (salesByGender: SalesByGender[] = []) => {
  return salesByGender.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.sum;
  }, 0);
};
