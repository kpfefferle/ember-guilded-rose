import Ember from 'ember';

export default Ember.Controller.extend({
  items: Ember.computed.alias('model'),

  cartItems: [
  ],

  totalCost: Ember.computed('cartItems.@each.cost', function() {
    return this.get('cartItems').reduce((sum, item) => {
      return sum + item.cost;
    }, 0);
  }),

  actions: {
    buy(item) {
      this.get('cartItems').pushObject(Ember.copy(item, true));
    }
  }
});
