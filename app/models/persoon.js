import Model, { attr, hasMany } from '@ember-data/model';

export default class PersoonModel extends Model {
  @attr('string') voornaam;
  @attr('string') achternaam;
  @attr('string') adres;
  @attr('string') telefoon;
  @attr('string') mobiel;
  @attr('string') organisatie;

  @hasMany('activiteit', {
    inverse: 'organisator',
    async: true,
  })
  activiteiten;
}
