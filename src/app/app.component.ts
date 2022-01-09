import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'input',
      type: 'input',
      templateOptions: {
        label: 'Input',
        placeholder: 'Input placeholder',
        required: true,
      },
      validation: {
        show: false
      }
    },
    {
      key: 'textarea',
      type: 'textarea',
      templateOptions: {
        label: 'Textarea',
        placeholder: 'Textarea placeholder',
        required: true,
      }
    },
    {
      key: 'checkbox',
      type: 'checkbox',
      templateOptions: {
        label: 'Checkbox',
      }
    },
    {
      key: 'select',
      type: 'select',
      templateOptions: {
        label: 'Select',
        placeholder: 'Select placeholder',
        required: true,
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
        ]
      }
    },
    {
      key: 'radio',
      type: 'radio',
      templateOptions: {
        label: 'Radio',
        required: true,
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
        ]
      }
    }
  ];

  setErrors(field: string, errorMessage: string) {

    console.log(this.form);
    this.fields[0].validation.show = true;
    this.form
      .get(field)!
      .setErrors({ serverError: { message: errorMessage } });

    // this.fields[0].validation.show = true;
    console.log(this.form);
  }

  reset() {
    this.fields[0].validation.show = false;
  }

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model, null, 2));
      
    }
  }
}