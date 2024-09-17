import Model, { attr, hasMany } from '@ember-data/model';

export default class OrganizationModel extends Model {
  @attr('name') name;

  @hasMany('event', {
    inverse: 'organizedBy',
    async: true,
  })
  organizedEvents;
}
