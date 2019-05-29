export const uuid = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};

export const filterLinksBySecurity = (isLoggedIn, links) => {
  if (isLoggedIn) {
    return links.filter(
      link => link.authRequired || !link.hasOwnProperty('unauthRequired')
    );
  }

  return links.filter(
    link => link.unauthRequired || !link.hasOwnProperty('authRequired')
  );
};

export const currencyFormat = num => {
  num = +num;

  let value = num.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  if (value.substr(value.length - 3) === '.00')
    return value.substr(0, value.length - 3);

  return value;
};
