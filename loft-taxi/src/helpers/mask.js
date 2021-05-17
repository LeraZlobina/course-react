export const masks = {
  cardNumber(value) {
    const match =
      value
        .replace(/\D/g, '')
        .substring(0, 16)
        .match(/.{1,4}/g) || [];
    return match.join(' ');
  },
  expiryDate(value) {
    const match =
      value
        .replace(/\D/g, '')
        .substring(0, 4)
        .match(/.{1,2}/g) || [];
    return match.join('/');
  },
  cvc(value) {
    return value.replace(/\D/g, '').substring(0, 3);
  },
  cardName(value) {
    return value.toUpperCase();
  },
  id: (v) => v,
};
