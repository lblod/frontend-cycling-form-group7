import Model, { attr, belongsTo } from '@ember-data/model';

export default class ActiviteitModel extends Model {
  @attr('string') name;

  @belongsTo('persoon', {
    inverse: 'activiteiten',
    async: true,
  })
  organisator;

  @belongsTo('tijdsbestek', {
    inverse: 'activiteit',
    async: true,
  })
  interval;

  @belongsTo('recht', {
    inverse: 'activiteit',
    async: true,
  })
  recht;
}
