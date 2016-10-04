import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['shelf-item'],

  hasSizeOption: Ember.computed('item.options', function() {
    let item = this.get('item');
    return item.options.size !== undefined;
  })
});
