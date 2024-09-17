import EmberRouter from '@ember/routing/router';
import config from 'frontend-cycling-form-group7/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');

  this.route('dossiers', function () {
    this.route('dossier', { path: '/:id/' }, function () {});
  });
});
