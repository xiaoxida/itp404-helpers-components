import Component from '@ember/component';

export default Component.extend({
  actions: {
    toggle() {
      //this.toggleProperty('on');
      this.onClick(!this.on);
    }
  }
});
