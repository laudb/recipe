FlowRouter.route('/', {
  name:'home',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/recipe-book', {
  name:'recipe-book',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Recipes'});
  }
});