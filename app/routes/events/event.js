import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EventsEventRoute extends Route {
  @service store;

  async model(params) {
    // TODO: change to `findRecord` when backend is added
    return await this.store.peekRecord('event', params.id);
  }
}
