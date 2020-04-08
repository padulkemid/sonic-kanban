// base url
const url = `https://kanbanpadul.herokuapp.com`;

let app = new Vue({
  el: '#app',
  data: {
    taskLists: null,
    isLoggedIn: false,
  },
  created() {
    this.login();
    this.retrieveData();
  },
  methods: {
    login() {
      const data = {
        email: 'padul@kem.id',
        password: 'jancok123',
      };

      postLogin(data)
        .then((res) => {
          console.log('Successfully logged in!');
          this.isLoggedIn = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    retrieveData() {
      getData()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    logout() {
      if (this.isLoggedIn) {
        localStorage.removeItem('token');
      } else {
        console.log('anda belum login!');
      }
    },
  },
});
