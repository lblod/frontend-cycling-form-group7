import Model, { attr, belongsTo } from '@ember-data/model';

export default class ZaakModel extends Model {
  @attr('string') name;
  @attr('date') openingDate;
  @attr('date') closingDate;

  @belongsTo('dossier', {
    inverse: 'isNeerslagVan',
    async: true,
  })
  dossier;

  @belongsTo('procedurestap', {
    inverse: null,
    async: true,
  })
  procedurestap;

  // TODO: link to project, municipality, organizer, ...
  // @belongsTo('organization', {
  //   inverse: 'organizedEvents',
  //   async: true,
  // })
  // organizedBy;
}
