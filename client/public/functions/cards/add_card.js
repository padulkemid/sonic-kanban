function addNewTask(title, category) {
  const addUrl = 'https://kanbanpadul.herokuapp.com/tasks';
  const data = {
    title,
    category,
  };

  return fetch(addUrl, {
    method: 'post',
    headers: {
      token: localStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export { addNewTask };
