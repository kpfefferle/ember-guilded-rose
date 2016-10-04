import Ember from 'ember';

const passName = 'Backstage passes to a TAFKAL80ETC concert';

export default Ember.Component.extend({
    tagName: 'button',
    attributeBindings: ['cantBuy:disabled'],

    buyMessage: 'Buy Now!',

    cantBuy: Ember.computed.not('canBuy'),
    isPass: Ember.computed.equal('item.name', passName),

    canBuy: Ember.computed('isPass', 'cartItems.@each.name', function () {
      if (this.get('isPass')) {
          return this.get('cartItems').isAny('name', 'Sulfuras, Hand of Ragnaros');
      } else {
          return true;
      }
    }),
    cantBuyMessage: Ember.computed('isPass', function () {
      return this.get('isPass') ? 'Buy the Hand of Ragnaros first' : 'Not for sale';
    }),

    click() {
      this.attrs.buyAction(this.get('item'));
    }
});
