import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DossiersIndexRoute extends Route {
  @service store;

  async model() {
    return await this.store.findAll('dossier', {
      include: [
        'is-neerslag-van',
        'is-neerslag-van.procedurestap',
        // 'is-neerslag-van.procedurestap.name',
      ].join(),
    });
  }
}
