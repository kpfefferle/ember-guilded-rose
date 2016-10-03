import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        name: "+5 Dexterity Vest",
        cost: 15,
        options: { size: 'M', color: 'Blue' }
      },
      {
        name: "Aged Brie",
        cost: 20,
        options: { aged: false, age: null }
      },
      {
        name: "Elixir of the Mongoose",
        cost: 10,
        options: { strength: 1}
      },
      {
        name: "Sulfuras, Hand of Ragnaros",
        cost: 10,
        options: { size: 'M' }
      },
      {
        name: "Backstage passes to a TAFKAL80ETC concert",
        cost: 10,
        options: {}
      },
      {
        name: "Conjured Mana Cake",
        cost: 10,
        options: { flavor: 'chocolate' }
      }
    ];
  }
});
