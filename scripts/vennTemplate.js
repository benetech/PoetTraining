(function(window, document, $) {

  function VennTemplate() {
    this._firstForm = null;
    this._secondForm = null;
    this.multiStep = true;
    // this will keep track of whether the last step in this template has been
    // requested.
    this.atLastStep = false;

    // generate a unique ID to append to the IDs of the generated elements for
    // forms so that we can guarantee that new templates will not override the
    // form's elements when we try to access them later
    this.uid = Math.floor((Math.random(Date.now()) * 100000000));
  };

  VennTemplate.prototype = {
    get firstForm() {
      // see if we need to create the form
      if(!this._firstForm) {
        this._firstForm = this.generateFirstForm();
      }
      this.atLastStep = false;
      return this._firstForm;
    },

    get secondForm() {
      if(!this._secondForm) {
        this._secondForm = this.generateSecondForm();
      }
      this.atLastStep = true;
      return this._secondForm;
    },

    get description() {
      return this.generateDescription();
    },

    get title() {
      return this.getInputValById('venn-title-input-' + this.uid);
    },

    get caption() {
      return this.getInputValById('venn-caption-input-' + this.uid);
    },

    get numCircles() {
      return this.getInputValById('venn-circle-input-' + this.uid);
    },

    get numIntersections() {
      return this.getInputValById('venn-intersection-input-' + this.uid);
    },

    get unit() {
      return this.getInputValById('venn-unit-input-' + this.uid);
    }
  }


  VennTemplate.prototype.getInputValById = function(eid) {
    var elt = document.getElementById(eid);
    return elt.value;
  };

  VennTemplate.prototype.getCircleLabel = function(i) {
    return this.getInputValById('venn-circle-label-input-' + this.uid + i);
  };

  VennTemplate.prototype.getCircleValue = function(i) {
    return this.getInputValById('venn-circle-value-input-' + this.uid + i);
  };

  VennTemplate.prototype.getIntersectionLabel = function(i) {
    return this.getInputValById('venn-intersection-label-input-' + this.uid + i);
  };

  VennTemplate.prototype.getIntersectionValue = function(i) {
    return this.getInputValById('venn-intersection-value-input-' + this.uid + i);
  };

  VennTemplate.prototype.generateDescription = function() {
    var desc = 'This is a Venn diagram, titled ';
    desc += this.title;
    desc += ', showing ';
    desc += this.numCircles;
    desc += ' circles. A caption reads: "';
    desc += this.caption;
    desc += '". The circles are labeled ';

    for(var i=0; i<this.numCircles; i++) {
      desc += this.getCircleLabel(i);
      desc += ' which has ';
      desc += this.getCircleValue(i);
      desc += ' ';
      desc += this.unit;
      if(i < this.numCircles - 1) {
        desc += ', ';
      }
    }

    desc += '. The diagram contains ';
    desc += this.numIntersections;
    desc += ' intersection';

    if(this.numIntersections > 1) {
      desc += 's';
    }

    desc += '. ';

    for(var i=0; i<this.numIntersections; i++) {
      desc += 'The intersection between ';
      desc += this.getIntersectionLabel(i);
      desc += ' has ';
      desc += this.getIntersectionValue(i);
      desc += ' ';
      desc += this.unit;
      desc += '. ';
    }

    return desc;
  };

  VennTemplate.prototype.generateFirstForm = function() {
    var formElt = document.createElement('form');
    formElt.classList.add('form');
    formElt.id = 'venn-first-form-' + this.uid;

    // the title field of the form
    var formTitleGroup = document.createElement('div');
    formTitleGroup.classList.add('form-group');
    formTitleGroup.id = 'venn-title-group-' + this.uid;
    var formTitleLabel = document.createElement('div');
    formTitleLabel.id = 'venn-title-label-' + this.uid;
    formTitleLabel.innerText = 'Diagram Title';
    var formTitleInput = document.createElement('input');
    formTitleInput.type = 'text';
    formTitleInput.classList.add('form-control');
    formTitleInput.classList.add('venn-title');
    formTitleInput.placeholder = 'Origin of Immigrants';
    formTitleInput.id = 'venn-title-input-' + this.uid;
    formTitleGroup.appendChild(formTitleLabel);
    formTitleGroup.appendChild(formTitleInput);

    // the caption field of the form
    var formCaptionGroup = document.createElement('div');
    formCaptionGroup.classList.add('form-group');
    formCaptionGroup.id = 'venn-caption-group-' + this.uid;
    var formCaptionLabel = document.createElement('div');
    formCaptionLabel.id = 'venn-caption-label-' + this.uid;
    formCaptionLabel.innerText = 'Diagram Caption';
    var formCaptionInput = document.createElement('textarea');
    formCaptionInput.rows = 3;
    formCaptionInput.classList.add('form-control');
    formCaptionInput.classList.add('venn-caption');
    formCaptionInput.placeholder = 'This venn diagram shows from where immigrants originally...';
    formCaptionInput.id = 'venn-caption-input-' + this.uid;
    formCaptionGroup.appendChild(formCaptionLabel);
    formCaptionGroup.appendChild(formCaptionInput);

    // the circle number field of the form
    var formCircleGroup = document.createElement('div');
    formCircleGroup.classList.add('form-group');
    formCircleGroup.id = 'venn-circle-group-' + this.uid;
    var formCircleLabel = document.createElement('div');
    formCircleLabel.id = 'venn-circle-label-' + this.uid;
    formCircleLabel.innerText = 'Number of Circles';
    var formCircleInput = document.createElement('input');
    formCircleInput.type = 'number';
    formCircleInput.classList.add('form-control');
    formCircleInput.classList.add('venn-circle');
    formCircleInput.placeholder = 3;
    formCircleInput.id = 'venn-circle-input-' + this.uid;
    formCircleGroup.appendChild(formCircleLabel);
    formCircleGroup.appendChild(formCircleInput);

    // the intersection number field of the form
    var formIntersectionGroup = document.createElement('div');
    formIntersectionGroup.classList.add('form-group');
    formIntersectionGroup.id = 'venn-intersection-group-' + this.uid;
    var formIntersectionLabel = document.createElement('div');
    formIntersectionLabel.id = 'venn-intersection-label-' + this.uid;
    formIntersectionLabel.innerText = 'Number of Intersections';
    var formIntersectionInput = document.createElement('input');
    formIntersectionInput.type = 'number';
    formIntersectionInput.classList.add('form-control');
    formIntersectionInput.classList.add('venn-intersection');
    formIntersectionInput.placeholder = 3;
    formIntersectionInput.id = 'venn-intersection-input-' + this.uid;
    formIntersectionGroup.appendChild(formIntersectionLabel);
    formIntersectionGroup.appendChild(formIntersectionInput);

    // the unit field of the form
    var formUnitGroup = document.createElement('div');
    formUnitGroup.classList.add('form-group');
    formUnitGroup.id = 'venn-unit-group-' + this.uid;
    var formUnitLabel = document.createElement('div');
    formUnitLabel.id = 'venn-unit-label-' + this.uid;
    formUnitLabel.innerText = 'Diagram Unit';
    var formUnitInput = document.createElement('input');
    formUnitInput.type = 'text';
    formUnitInput.classList.add('form-control');
    formUnitInput.classList.add('venn-unit');
    formUnitInput.placeholder = 'Something plural e.g. turkeys, Europeans, etc.';
    formUnitInput.id = 'venn-unit-input-' + this.uid;
    formUnitGroup.appendChild(formUnitLabel);
    formUnitGroup.appendChild(formUnitInput);

    formElt.appendChild(formTitleGroup);
    formElt.appendChild(formCaptionGroup);
    formElt.appendChild(formCircleGroup);
    formElt.appendChild(formIntersectionGroup);
    formElt.appendChild(formUnitGroup);

    return formElt;
  };


  VennTemplate.prototype.generateSecondForm = function() {
    var formElt = document.createElement('form');
    formElt.classList.add('form');
    formElt.id = 'venn-first-form-' + this.uid;

    for(var i=0; i < this.numCircles; i++) {
      var formCircleLabelGroup = document.createElement('div');
      formCircleLabelGroup .classList.add('form-group');
      formCircleLabelGroup .id = 'venn-circle-label-group-' + this.uid + i;
      var formCircleLabelLabel = document.createElement('div');
      formCircleLabelLabel.id = 'venn-circle-label-label-' + this.uid + i;
      formCircleLabelLabel.innerText = 'Diagram Circle ' + i + ' Label';
      var formCircleLabelInput = document.createElement('input');
      formCircleLabelInput.type = 'text';
      formCircleLabelInput.classList.add('form-control');
      formCircleLabelInput.classList.add('venn-circle-label');
      formCircleLabelInput.placeholder = 'Something plural e.g. turkeys, Europeans, etc.';
      formCircleLabelInput.id = 'venn-circle-label-input-' + this.uid + i;

      var formCircleValueLabel = document.createElement('div');
      formCircleValueLabel.id = 'venn-circle-value-label-' + this.uid + i;
      formCircleValueLabel.innerText = 'Diagram Circle ' + i + ' Value';
      var formCircleValueInput = document.createElement('input');
      formCircleValueInput.type = 'number';
      formCircleValueInput.classList.add('form-control');
      formCircleValueInput.classList.add('venn-circle-value');
      formCircleValueInput.placeholder = '42';
      formCircleValueInput.id = 'venn-circle-value-input-' + this.uid + i;

      formCircleLabelGroup.appendChild(formCircleLabelLabel);
      formCircleLabelGroup.appendChild(formCircleLabelInput);
      formCircleLabelGroup.appendChild(formCircleValueLabel);
      formCircleLabelGroup.appendChild(formCircleValueInput);
      formElt.appendChild(formCircleLabelGroup)
    }

    for(var i=0; i < this.numIntersections; i++) {
      // create the intersection label's form group
      var formIntersectionLabelGroup = document.createElement('div');
      formIntersectionLabelGroup .classList.add('form-group');
      formIntersectionLabelGroup .id = 'venn-intersection-label-group-' + this.uid + i;
      // create the intersection label's label
      var formIntersectionLabelLabel = document.createElement('div');
      formIntersectionLabelLabel.id = 'venn-intersection-label-label-' + this.uid + i;
      formIntersectionLabelLabel.innerText = 'Diagram Intersection ' + (i + 1) + ' Label';
      // create the intersection label's input
      var formIntersectionLabelInput = document.createElement('input');
      formIntersectionLabelInput.type = 'text';
      formIntersectionLabelInput.classList.add('form-control');
      formIntersectionLabelInput.classList.add('venn-intersection-label');
      formIntersectionLabelInput.placeholder = 'Use the names of the circles e.g. "Spinach and Broccoli" or "Mexican, Canadian, and Puerto Rican"';
      formIntersectionLabelInput.id = 'venn-intersection-label-input-' + this.uid + i;

      // create the intersection value's label
      var formIntersectionValueLabel = document.createElement('div');
      formIntersectionValueLabel.id = 'venn-intersection-value-label-' + this.uid + i;
      formIntersectionValueLabel.innerText = 'Diagram Intersection ' + (i + 1) + ' Value';
      // create the intersection label's input
      var formIntersectionValueInput = document.createElement('input');
      formIntersectionValueInput.type = 'number';
      formIntersectionValueInput.classList.add('form-control');
      formIntersectionValueInput.classList.add('venn-intersection-value');
      formIntersectionValueInput.placeholder = '12';
      formIntersectionValueInput.id = 'venn-intersection-value-input-' + this.uid + i;

      formIntersectionLabelGroup.appendChild(formIntersectionLabelLabel);
      formIntersectionLabelGroup.appendChild(formIntersectionLabelInput);
      formIntersectionLabelGroup.appendChild(formIntersectionValueLabel);
      formIntersectionLabelGroup.appendChild(formIntersectionValueInput);
      formElt.appendChild(formIntersectionLabelGroup)
    }

    return formElt;
  };


  window.VennTemplate = VennTemplate;

})(window, document, jQuery);
