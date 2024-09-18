import Model, { attr } from '@ember-data/model';

export const PROCEDURE_STEPS = {
  OPEN: 'b0f9eb90-8ef9-427a-a22e-3b0168e85912',
  PROCESSING: 'ef053f0c-221a-4764-b7ac-57947ecf8585',
  APPROVED: 'd9274bcd-9dbd-4ece-8642-9400499d5f69',
};

export default class ProcedurestapModel extends Model {
  @attr('string') name;

  get isOpen() {
    return this.id === PROCEDURE_STEPS.OPEN;
  }

  get isBeingProcessed() {
    return this.id === PROCEDURE_STEPS.PROCESSING;
  }

  get isApproved() {
    return this.id === PROCEDURE_STEPS.APPROVED;
  }
}
