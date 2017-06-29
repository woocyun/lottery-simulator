import template from './toggleable-line-form.html';

const ToggleableLineFormComponent = {
  bindings: {
    activeLottery: '<',
    onLineAdd: '&'
  },
  templateUrl: template,
  controller: class ToggleableLineFormController {
    constructor() {

    }

    $onInit() {
      this.formIsOpen = false;
    }

    closeForm() {
      this.formIsOpen = false;
    }

    openForm() {
      this.formIsOpen = true;
    }
  }
};

export default ToggleableLineFormComponent;
