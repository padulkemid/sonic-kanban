$(document).ready(() => {
  const baseUrl = 'https://kanbanpadul.herokuapp.com';

  $.ajax({
    type: 'GET',
    url: baseUrl,
  })
    .done((result) => {
      $('#get-list').empty();

      const format = `
          <tr>
            <td>${result[0].id}</td>
            <td>${result[0].email}</td>
            <td>${result[0].createdAt.slice(0, 10)}</td>
            <td>${result[0].updatedAt.slice(0, 10)}</td>
          </tr>
      `;

      $('#get-list').append(format);
    })
    .fail((err) => {
      console.log(err);
    });
});
