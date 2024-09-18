import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { PROCEDURE_STEPS } from '../../../models/procedurestap';

export default class DossiersDossierIndexController extends Controller {
  @service store;

  @action
  async startProcessing() {
    const approvedStatus = await this.store.findRecord(
      'procedurestap',
      PROCEDURE_STEPS.PROCESSING
    );
    this.model.zaak.procedurestap = approvedStatus;

    this.model.zaak.save();
  }

  @action
  async approve() {
    this.model.zaak.closingDate = new Date();

    const approvedStatus = await this.store.findRecord(
      'procedurestap',
      PROCEDURE_STEPS.APPROVED
    );
    this.model.zaak.procedurestap = approvedStatus;

    this.model.zaak.save();
  }
}
