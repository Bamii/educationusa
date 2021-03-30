(function() {
  // this utility helps with collating and the functionality of a "FormStaircase"
  // a "FormStaircase" is a form that has many "steps".

  // requirements:
  // - a form... with data attributes "data-form-staircase"
  // - sections that represent each form step... with data attributes "data-form-step" 
  // - an element that holds the page information... with id of "form-page" ::might change to data attr::
  // - form inputs with data attributes "data-form-input"

  // form.css is needed also.
  class FormStaircase {
    constructor(index){
      this.fields = new FormData();
      this._form = null;
      this._steps = null;
      this._currentStep = 1;
  
      this._init(index);
    }
  
    _init(index) {
      this._form = document.querySelector(`[data-form-staircase="${index}"]`)
      this._steps = Array.from(this._form.querySelectorAll('[data-form-step]'));
  
      this.updatePaging()
      this.activateStep(this._currentStep)
    }
  
    getCurrentStep() {
      return this._currentStep;
    }
  
    gotoStep(idx) {
      this.collateStepData(this._currentStep)
      this._currentStep = idx;
      return this._currentStep;
    }

    step(dir) {
      let tmp;
      if (dir == 'next') {
        tmp = this._currentStep + 1;
        if (tmp > this._steps.length) return;
      } else if (dir == 'prev') {
        tmp = this._currentStep - 1;
        if (tmp < 1) return;
      }

      this.collateStepData(this._currentStep)
      this.deactivateStep(this._currentStep)

      this._currentStep = tmp;
      this.activateStep(this._currentStep);
      this.updatePaging()
      return this._currentStep;
    }

    nextStep() {
      this.step('next')
    }

    previousStep() {
      this.step('prev')
    }

    updatePaging() {
      const page = this._form.querySelector('#form-page');
      page.innerHTML = `(page ${this._currentStep}/${this._steps.length})`;
      return;
    }

    activateStep(step) {
      this._form.querySelector(`[data-form-step="${step}"]`)
        .classList.add('active');
    }

    deactivateStep(step) {
      this._form.querySelector(`[data-form-step="${step}"]`)
        .classList.remove('active');
    }
  
    collateStepData(index) {
      const stepFields = this._steps[index-1].querySelectorAll('[data-form-input]');

      Array.from(stepFields).forEach(({ name,  value }) => {
        this.fields.append(name, value)
      })
    }
  
    getFormData() {
      return this.fields;
    }

    getFields() {

    }

    getValues() {

    }

    getKVPairs() {

    }
  }

  const prev = document.getElementById('form-prev')
  const next = document.getElementById('form-next')
  const appForm = document.querySelector('#graduate-form')


  // setup the formstaircase.
  const a = new FormStaircase(appForm.dataset.formStaircase);
  
  next.onclick = () => {
    a.nextStep();
  }

  prev.onclick = () => {
    a.previousStep();
  }

  // a.nextStep();
  // a.getFormData();
  // a.getFields();
  // a.getValues();
  // a.getKVPairs();
})();
