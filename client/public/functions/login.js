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
    localStorage.removeItem('email');
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

function googleLogin(authCode) {
  const googleUrl = 'https://kanbanpadul.herokuapp.com/google';
  const data = {
    id_token: authCode,
  };
  return fetch(googleUrl, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export { loginUser, logoutUser, checkLoggedInPayload, loginRenderCheck, googleLogin };
