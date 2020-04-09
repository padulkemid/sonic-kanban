function registerUser(email, password) {
  const registerUrl = 'https://kanbanpadul.herokuapp.com/register';
  const data = {
    email,
    password,
  };

  return fetch(registerUrl, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export { registerUser };
