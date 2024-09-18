import Model, { attr, belongsTo } from '@ember-data/model';

export default class AanvraagModel extends Model {
  @attr('string') name;

  @belongsTo('dossier', {
    inverse: 'aanvraag',
    async: true,
  })
  dossier;
}
