import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EventsIndexRoute extends Route {
  @service store;

  async model() {
    // Create some mock data
    const organization = this.store.createRecord('organization', {
      id: 123,
      name: 'cycling4fun',
    });
    const eventOne = this.store.createRecord('event', {
      id: 456,
      name: 'Super fun cycling',
      date: '17-09-2024',
      organizedBy: organization,
    });
    const eventTwo = this.store.createRecord('event', {
      id: 780,
      name: 'Less fun cycling',
      date: '20-09-2024',
      organizedBy: organization,
    });

    return [eventOne, eventTwo];
  }
}
