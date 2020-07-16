type CreditCard = {
  number: number;
  cardholder: string;
  expirationDate: Date;
  secutiryCode: number;
};

type DebitCard = {
  number: number;
  cardholder: string;
  expirationDate: Date;
  secutiryCode: number;
};

type PaymentMethod = CreditCard | DebitCard;

const purchase = (paymentMethod: PaymentMethod) => {
  if (paymentMethod instanceof CreditCard) { // 'CreditCard' only refers to a type, but is being used as a value here.
    // purchase with credit card
  } else {
    // purchase with debit card
  }
}

const creditCard: CreditCard = {
  number: 2093,
  cardholder: 'TK',
  expirationDate: new Date(),
  secutiryCode: 101
};
