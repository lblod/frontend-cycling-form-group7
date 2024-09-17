import Route from '@ember/routing/route';

export default class EventsEventIndexRoute extends Route {
  async model() {
    return this.modelFor('events.event');
  }
}
