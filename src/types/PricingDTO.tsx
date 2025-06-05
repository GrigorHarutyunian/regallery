interface Price {
  main?: string;
  currency?: string;
  cents?: string;
}

export default interface PricingDTO {
  text: string;
  id?: number;
  price: Price;
  canceledprice?: string;
  advantages: any[];
  duration?: string;
  savedmoney?: string;
  title: string;
  href: string;
}
