function getAllCards() {
  const getUrl = 'https://kanbanpadul.herokuapp.com/tasks';

  return fetch(getUrl, {
    method: 'get',
    headers: {
      token: localStorage.getItem('token'),
    },
  }).then((res) => res.json());
}

export { getAllCards };
