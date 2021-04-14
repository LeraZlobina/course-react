export const PROFILE_SUBMIT = "PROFILE_SUBMIT";
export const CARD_DETAILS = "CARD_DETAILS";

export const profileSubmit = () => ({type: PROFILE_SUBMIT});
export const cardDetails = (cardNumber, expiryDate, cardName, cvc) => ({
    type: CARD_DETAILS,
    payload: { cardNumber, expiryDate, cardName, cvc }
});