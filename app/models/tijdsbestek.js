import Model from '@ember-data/model';

export default class TijdsbestekModel extends Model {
  @attr('string') name;
  @attr('date') startTime;
  @attr('date') endTime;

  @belongsTo('activiteit', {
    inverse: 'tijdsbestek',
    async: true,
  })
  activiteit;
}
