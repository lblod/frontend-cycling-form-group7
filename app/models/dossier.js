import Model, { attr, belongsTo } from '@ember-data/model';

export default class DossierModel extends Model {
  @attr('string') name;

  @belongsTo('zaak', {
    inverse: 'dossier',
    async: true,
  })
  isNeerslagVan;
}
