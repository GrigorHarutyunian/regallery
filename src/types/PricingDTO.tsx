export default interface PricingDTO {
  id: number;
  text: string;
  buttonText: string;
  price: number;
  discount?: number;
  currency?: string;
  planType?: "yearly" | "monthly" | "free";
  advantages: (string | JSX.Element)[];
  duration?: string;
  title: string;
  href?: string;
  mostPopular?: boolean;
}
