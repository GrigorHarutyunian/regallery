export default interface PricingDTO {
  id: number;
  text: string;
  buttonText: string;
  price: number | string;
  currency?: string;
  canceledPrice?: string;
  advantages: (string | JSX.Element)[];
  duration?: string;
  savedMoney?: string;
  title: string;
  href?: string;
}
