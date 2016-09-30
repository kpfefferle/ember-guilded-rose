import Ember from 'ember';

let passName = 'Backstage passes to a TAFKAL80ETC concert';

export default Ember.Component.extend({
    tagName: 'button',
    buyMessage: 'Buy Now!',
    attributeBindings: ['cantBuy:disabled'],
    cantBuy: Ember.computed.not('canBuy'),
    cantBuyMessage: Ember.computed('item.name', function () {
        if (this.get('item.name') === passName) {
            return 'Buy the Hand of Ragnaros first';
        } else {
            return 'Not for sale'
        }
    }),

    canBuy: Ember.computed('item.name', 'cartItems.@each.name', function () {
        if (this.get('item.name') === passName) {
            return this.get('cartItems').isAny('name', 'Sulfuras, Hand of Ragnaros');
        } else {
            return true;
        }
    }),

    click() {
        this.sendAction('action', this.get('item'));
    }
});
