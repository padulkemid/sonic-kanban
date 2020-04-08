let app = new Vue({
  el: '#app',
  data: {
    username: 'Padul',
    title: 'ini',
    subtitle: 'Berhasil hore-hore!',
    jumlah: 1,
    isLoggedIn: false,
  },
  computed: {
    jumlah: function () {
      console.log(jumlah);
      return jumlah + 2;
    },
  },
  watch: {
    isLoggedIn: function (val, oldVal) {
      console.log('state sebelumnya: ', oldVal);
      if (val) {
        console.log('logged in!');
      } else {
        console.log('belum login');
      }
    },
    title: function (val, oldVal) {
      console.log(oldVal);
      console.log(val);
    },
  },
});
