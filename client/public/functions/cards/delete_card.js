function deleteData(id) {
  const deleteUrl = `https://kanbanpadul.herokuapp.com/tasks/${id}`;

  return fetch(deleteUrl, {
    method: 'delete',
    headers: {
      token: localStorage.getItem('token'),
    },
  }).then((res) => res.json());
}

export { deleteData };
