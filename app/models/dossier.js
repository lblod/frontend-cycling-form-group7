import Model, { attr } from '@ember-data/model';

export default class DossierModel extends Model {
  @attr('string') name;
  // TODO: add start and end date
  // @attr('date') date;
  // TODO: add status

  // TODO: link to project, municipality, organizer, ...
  // @belongsTo('organization', {
  //   inverse: 'organizedEvents',
  //   async: true,
  // })
  // organizedBy;
}
