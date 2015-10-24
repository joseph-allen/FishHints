Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  this.route('Test');
  this.route('Map');
  this.route('Home', {
    path: '/',  //overrides the default '/home'
  });
});