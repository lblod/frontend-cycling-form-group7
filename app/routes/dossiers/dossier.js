import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DossiersDossierRoute extends Route {
  @service store;

  async model(params) {
    return await this.store.findRecord('dossier', params.id);
  }
}
