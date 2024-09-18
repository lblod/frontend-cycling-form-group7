import Route from '@ember/routing/route';

export default class DossiersDossierIndexRoute extends Route {
  async model() {
    const dossier = this.modelFor('dossiers.dossier');
    const zaak = await dossier.isNeerslagVan;

    return { dossier, zaak };
  }
}
