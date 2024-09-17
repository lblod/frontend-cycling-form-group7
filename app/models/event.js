import Model, { attr, belongsTo } from '@ember-data/model';

export default class EventModel extends Model {
  @attr('string') name;
  @attr('date') date;

  // TODO: add status

  @belongsTo('organization', {
    inverse: 'organizedEvents',
    async: true,
  })
  organizedBy;
}
