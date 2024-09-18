import Model, { attr, belongsTo } from '@ember-data/model';

export default class ActiviteitModel extends Model {
  @attr('string') name;

  @belongsTo('persoon', {
    inverse: 'activiteiten',
    async: true,
  })
  organisator;

  @belongsTo('interval', {
    inverse: 'activity',
    async: true,
  })
  interval;
}
