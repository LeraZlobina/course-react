export const REGISTER_IN = "REGISTER_IN";
export const REGISTRATION = "REGISTRATION";

export const registerIn = () => ({type: REGISTER_IN});

export const registration = (email, password, name, surname) => ({
    type: REGISTRATION,
    payload: { email, password, name, surname }
});