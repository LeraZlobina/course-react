export const serverLogIn = async (email, password) => {
  return fetch(
    `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
  ).then(res => res.json()).then(data => data.success);
};

const options = (body) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  body
});

export const serverRegisterIn = (form) => {
  const {email, password, name, surname} = form;
  const body = JSON.stringify({email, password, name, surname});
  return fetch(
    `https://loft-taxi.glitch.me/register`,
    options(body)
  ).then(res => res.json()).then(data => data.success);
}

export const serverProfileSubmit = (form) => {
  const {cardNumber, expiryDate, cardName, cvc, token} = form;
  const body = JSON.stringify({cardNumber, expiryDate, cardName, cvc, token});
  return fetch(
    `https://loft-taxi.glitch.me/card`,
    options(body)
  ).then(res => res.json()).then(data => data.success);
}

/*export const serverGetAddresses = async () => {
  const response = await fetch(
    `https://loft-taxi.glitch.me/addressList`
  );
  const data = await response.json();
  return data.addresses;
}*/

export const serverGetAddresses = () => {
  return fetch(
    `https://loft-taxi.glitch.me/addressList`
  ).then(res => res.json());
}

export const serverGetRoute = (address1, address2) => {
  return fetch(
    `https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`
  ).then(res => res.json());
}

export const serverGetCard = (token) => {
  return fetch(
    `https://loft-taxi.glitch.me/card?token=${token}`
  ).then(res => res.json());
}