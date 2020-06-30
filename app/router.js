import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('impressions');
  this.route('members', { path: 'leden' }, function () {
    this.route('member', { path: '/:slug' });
  });
  this.route('map');
  this.route('contact');
});
