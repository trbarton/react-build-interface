// @flow
import React, { PureComponent } from 'react';
import Select from '@atlaskit/select';
import FieldText from '@atlaskit/field-text';
import Button from '@atlaskit/button';
import { Checkbox } from '@atlaskit/checkbox';
import FieldTextArea from '@atlaskit/field-text-area';
import UploadIcon from '@atlaskit/icon/glyph/upload';

import Form, { Field, FormHeader, FormSection, FormFooter } from '@atlaskit/form';
import { Grid, GridColumn } from '@atlaskit/page';
import SystemSelect from './ASVSystemSelect';

type State = {
  eventResult: string,
};

const Icon = <UploadIcon label="Upload icon" size="small" />;

export default class LayoutExample extends PureComponent<void, State> {
  state = {
    eventResult:
      'Click into and out of the input above to trigger onBlur & onFocus in the Fieldbase',
  };

  formRef: any;

  // Form Event Handlers
  onSubmitHandler = () => {
    console.log('onSubmitHandler');
  };

  onValidateHandler = () => {
    console.log('onValidateHandler');
  };

  onResetHandler = () => {
    console.log('onResetHandler');
  };

  onChangeHandler = () => {
    console.log('onChangeHandler');
  };
  onBlurHandler = () => {
    console.log('onBlurHandler');
  };
  onFocusHandler = () => {
    console.log('onFocusHandler');
  };

  // Footer Button Handlers
  submitClickHandler = () => {
    this.formRef.submit();
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          margin: '0 auto',
          minHeight: '60vh',
          flexDirection: 'column',
        }}
      >
        <Form
          name="create-repo"
          onSubmit={this.onSubmitHandler}
          onReset={this.onResetHandler}
          ref={form => {
            this.formRef = form;
          }}
          action="//httpbin.org/get"
          method="GET"
          target="submitFrame"
        >
          <Grid>
            <GridColumn medium={6}>

              <FormSection>
                <Field label="Vehicle name" isRequired>
                  <FieldText name="vehicle_name" isRequired shouldFitContainer placeholder="e.g. MMCM" />
                </Field>

                <Field label="Description" className="description">
                  <FieldTextArea
                    name="description"
                    shouldFitContainer
                    isLabelHidden
                    placeholder="(Optional)"
                  />
                </Field>

                <Field label="Extra Packages">
                  <FieldText placeholder="Comma separated list of packages" shouldFitContainer />
                </Field>

              </FormSection>
            </GridColumn>
            <GridColumn medium={6}>
              <FormSection>

                <Field label="Base distro image">
                  <SystemSelect></SystemSelect>
                </Field>

                <Field label="ASV System version">
                  <SystemSelect></SystemSelect>
                </Field>

                <Field label="ASV SCM version">
                  <SystemSelect></SystemSelect>
                </Field>

                <Field label="Device Type">
                  <SystemSelect></SystemSelect>
                </Field>

                <Field label="Ansible Directory">
                  <Button iconBefore={Icon} shouldFitContainer className="upload-button">
                    Upload Ansible Directory
                  </Button>
                </Field>

              </FormSection>
            </GridColumn>
          </Grid>
          <FormFooter
            actionsContent={[
              {
                id: 'submit-button',
              },
              {},
            ]}
          >
            <div style={{
              display: 'flex',
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              justifyItems: 'flex-end'
            }}>
              <Button appearance="primary" type="submit" spacing="default">
                Queue Build
            </Button>
              <Button appearance="subtle">Cancel</Button>
            </div>
          </FormFooter>
        </Form>
      </div>
    );
  }
}