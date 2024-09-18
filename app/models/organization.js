import Model, { attr, hasMany } from '@ember-data/model';

export default class OrganizationModel extends Model {
  @attr('name') name;

  @hasMany('activity', {
    inverse: 'involvedOrganization',
    async: true,
  })
  activities;
}
