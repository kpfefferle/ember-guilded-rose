import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['shelf-item'],

  hasSizeOption: Ember.computed('item.options', function() {
    let item = this.get('item');
    return item.options.size !== undefined;
  }),
  hasColorOption: Ember.computed('item.options', function() {
    let item = this.get('item');
    return item.options.color !== undefined;
  }),
  hasStrengthOption: Ember.computed('item.options', function() {
    let item = this.get('item');
    return item.options.strength !== undefined;
  }),
  hasFlavorOption: Ember.computed('item.options', function() {
    let item = this.get('item');
    return item.options.flavor !== undefined;
  })
});
