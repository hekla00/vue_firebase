// This creates a vue app and assigns it to the app variable
const app = Vue.createApp({
  // any data, functions to react to events that we want
  // component template can be specified here
  //  creating a template property
  //template: "<h2>I am the template</h2>",
  data() {
    return {
      showBooks: true,
      books: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
        },
        {
          title: "the way of kings",
          author: "brandon sanderson",
        },
        {
          title: "the final empire",
          author: "brandon sanderson",
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      //!this.showBooks means when its the opposite of what it is
      this.showBooks = !this.showBooks;
    },
  },
});

// mounting is the process of outputting the virtual
// representation of a component into the final UI representation
app.mount("#app");
