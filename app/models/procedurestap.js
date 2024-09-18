import Model, { attr } from '@ember-data/model';

export default class ProcedurestapModel extends Model {
  @attr('string') name;

  get isOpen() {
    return this.id === 'b0f9eb90-8ef9-427a-a22e-3b0168e85912'; // Open
  }

  get isBeingProcessed() {
    return this.id === 'ef053f0c-221a-4764-b7ac-57947ecf8585'; // In behandeling
  }

  get isApproved() {
    return this.id === 'd9274bcd-9dbd-4ece-8642-9400499d5f69'; // Goedgekeurd
  }
}
