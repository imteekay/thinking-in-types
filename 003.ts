type CreditCard = {
  number: number;
  cardholder: string;
  expirationDate: Date;
  secutiryCode: number;
}

type DebitCard = {
  number: number;
  cardholder: string;
  expirationDate: Date;
  secutiryCode: number;
}

type PaymentMethod = CreditCard | DebitCard;

const purchase = (paymentMethod: PaymentMethod) => {
  if (paymentMethod instanceof CreditCard) {
    // purchase with credit card
  } else {
    // purchase with debit card
  }
}
