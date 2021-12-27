// This creates a vue app and assigns it to the app variable
const app = Vue.createApp({
  // any data, functions to react to events that we want
  // component template can be specified here
  //  creating a template property
  //template: "<h2>I am the template</h2>",
  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
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
