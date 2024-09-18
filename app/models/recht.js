import Model, { attr, belongsTo } from '@ember-data/model';

export default class RechtModel extends Model {
  @attr('string') name;

  @belongsTo('aanvraag', {
    inverse: 'recht',
    async: true,
  })
  aanvraag;

  @belongsTo('activiteit', {
    inverse: 'recht',
    async: true,
  })
  activiteit;
}
