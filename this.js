const user = {
  firstName: "alex",
  lastName: "govea",
  listName: function () {
    console.log(this.firstName);
    var self = this;

    (function () {
      console.log(self.lastName);
    })();

    (() => console.log(this.firstName))();
  },
};

user.listName();
