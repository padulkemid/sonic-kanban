function loginUser(email, password) {
  const loginUrl = 'https://kanbanpadul.herokuapp.com/login';
  const data = {
    email,
    password,
  };

  return fetch(loginUrl, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

function logoutUser(payload) {
  if (payload) {
    localStorage.removeItem('token');
    console.log({ status: 200, message: 'Successfully logged out!' });
    return true;
  }
}

function checkLoggedInPayload(payload) {
  if (payload) {
    localStorage.setItem('token', payload);
    return true;
  }
}

function loginRenderCheck() {
  const token = localStorage.getItem('token');

  if (token) {
    return true;
  } else {
    return false;
  }
}

export { loginUser, logoutUser, checkLoggedInPayload, loginRenderCheck };
