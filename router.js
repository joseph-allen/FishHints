Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  this.route('Test');
  this.route('Home', {
    path: '/',  //overrides the default '/home'
  });
});