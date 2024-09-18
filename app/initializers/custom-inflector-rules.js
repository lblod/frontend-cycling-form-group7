import Inflector from 'ember-inflector';

export function initialize(/* application */) {
  const inflector = Inflector.inflector;

  inflector.irregular('activiteit', 'activiteiten');
  inflector.irregular('tijdsbestek', 'tijdsbestekken');
}

export default {
  name: 'custom-inflector-rules',
  initialize,
};
