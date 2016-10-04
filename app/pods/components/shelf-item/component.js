import Ember from 'ember';
import itemHasOption from 'ember-guilded-rose/macros/item-has-option';

export default Ember.Component.extend({
  classNames: ['shelf-item'],

  hasSizeOption: itemHasOption('size'),
  hasColorOption: itemHasOption('color'),
  hasStrengthOption: itemHasOption('strength'),
  hasFlavorOption: itemHasOption('flavor')
});
