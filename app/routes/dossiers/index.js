import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DossiersIndexRoute extends Route {
  @service store;

  async model() {
    const model = await this.store.findAll('dossier', {
      include: [
        'is-neerslag-van',
        'is-neerslag-van.procedurestap',
        'aanvraag',
        'aanvraag.recht',
      ].join(),
    });

    return model;
  }
}
