import Component from '@ember/component';
import { computed } from '@ember/object';
export default Component.extend({
  classNameBindings: ['isTooLong:error'],
  //remaining = max - text.length
  remaining: computed('text', function(){
    let textLength = this.text ? this.text.length : 0;
    return this.max - textLength;
  }),

  isTooLong: computed('remaining', function(){
    return this.remaining < 0
  }),
});
