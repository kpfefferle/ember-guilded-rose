import Ember from 'ember';

const passName = 'Backstage passes to a TAFKAL80ETC concert';

export default Ember.Component.extend({
    tagName: 'button',
    attributeBindings: ['cantBuy:disabled'],

    buyMessage: 'Buy Now!',

    cantBuy: Ember.computed.not('canBuy'),

    canBuy: Ember.computed('item.name', 'cartItems.@each.name', function () {
      if (this.get('item.name') === passName) {
          return this.get('cartItems').isAny('name', 'Sulfuras, Hand of Ragnaros');
      } else {
          return true;
      }
    }),
    cantBuyMessage: Ember.computed('item.name', function () {
      if (this.get('item.name') === passName) {
          return 'Buy the Hand of Ragnaros first';
      } else {
          return 'Not for sale';
      }
    }),

    click() {
        this.sendAction('action', this.get('item'));
    }
});
