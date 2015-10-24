Template.LandingBanner.events({
  "click .btn-go-fishing": function(event) {
    event.preventDefault();
    console.log("1");
    Meteor.call("search");
  }
});