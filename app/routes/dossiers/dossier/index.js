import Route from '@ember/routing/route';

export default class DossiersDossierIndexRoute extends Route {
  async model() {
    return this.modelFor('dossiers.dossier');
  }
}
