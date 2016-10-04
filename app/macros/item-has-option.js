import Ember from 'ember';

export default function(property) {
  return Ember.computed('items.options', function() {
    let item = this.get('item');
    return Ember.get(item.options, property) !== undefined;
  });
}
