function editData(title, category, id) {
  const editUrl = `https://kanbanpadul.herokuapp.com/tasks/${id}`;
  const data = {
    title,
    category,
  };

  return fetch(editUrl, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export { editData };
