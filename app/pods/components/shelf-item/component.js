import Ember from 'ember';
import itemHasOption from 'ember-guilded-rose/macros/item-has-option';

export default Ember.Component.extend({
  classNames: ['shelf-item'],

  hasAgedOption: itemHasOption('aged'),
  hasColorOption: itemHasOption('color'),
  hasFlavorOption: itemHasOption('flavor'),
  hasSizeOption: itemHasOption('size'),
  hasStrengthOption: itemHasOption('strength')
});
