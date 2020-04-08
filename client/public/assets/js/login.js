async function postLogin(data = {}) {
  const loginUrl = `${url}/login`;

  const response = await fetch(loginUrl, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

async function getData() {
  const getUrl = `${url}/tasks`;

  const response = await fetch(getUrl, {
    headers: {
      token: localStorage.getItem('token'),
    },
  });

  return response.json();
}
