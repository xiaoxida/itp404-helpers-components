import Component from '@ember/component';

export default Component.extend({
  tagName: 'button',
  //buttonText: 'Save',
  attributeBindings: ['isPending:disable'],
  isPending: false,

  init(){
    this._super(...arguments);
    this.set('buttonText', this.defaultText);
  },
  click(){
    this.set('isPending', true);
    this.set('buttonText', this.pendingText);
    this.onclick().then(() => {
      this.set('buttonText', this.defaultText);
      this.set('isPending', false);
    });
  }
});
