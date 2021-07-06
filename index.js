// Base url - https://jsonplaceholder.typicode.com/
// /posts	100 posts
// /comments	500 comments
// /albums	100 albums
// /photos	5000 photos
// /todos	200 todos
// /users	10 users

$('#tablebutton').click( () => {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users', //API URL
        type: 'GET', // GET OR POST,
        beforeSend: function () {
          // This function calls before ajax API Hits
          // Here we have to show our loader
        },
        success: function (response, status) {
          // Once our API call send success
          // this function gets called.
          let rows = '';
          for (let i = 0; i < response.length; i++){
              const {id, name, username, email, phone, website} = response[i];
              const city = response[i].address.city;
              const company = response[i].company.name;
              rows += `
              <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${username}</td>
                <td>${email}</td>
                <td>${city}</td>
                <td>${phone}</td>
                <td>${website}</td>
                <td>${company}</td>
            </tr>
              `;
          }
          $('.user-data').find('tbody').append(rows);
        },
        error: function (error, status) {
          // IF our API get any error
          // this function gets called.
        },
      })
      
});
