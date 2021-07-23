import React, { useState } from 'react';
import { PrimaryButton, SecondaryButton, TextInput, Icon, TextArea, TrapFocus, SelectInput } from 'components';
import TrapFocusDocs from 'components/trap-focus/DOCS.md';
import README from 'components/trap-focus/README.md';
import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

const options = [
  { label: 'Chip', value: '1' },
  { label: 'Chip', value: '2' },
  {
    label: 'Group 1',
    options: [
      { label: 'G1-Option 1', value: 'value_1' },
      { label: 'G1-option 2', value: 'value_2' },
    ],
  },
  {
    label: 'Group 2',
    options: [
      { label: 'G2-Option 1 ', value: 'value_3' },
      { label: 'G2-Option 2', value: 'value_4' },
      { label: 'G2-Option 3', value: 'value_5' },
    ],
  },
];

export default decorator('Trap focus', TrapFocusDocs, README).add('TrapFocus component', () => {

  const [trapFocusActive, setTrapFocusActive] = useState(false);

  return (
    <WrappedComponent>
      <div style={{marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <PrimaryButton onClick={() => setTrapFocusActive(true)}>Activate trap</PrimaryButton>
        <span>Trap focus active: {trapFocusActive.toString()}</span>
      </div>
      <TrapFocus active={trapFocusActive}>
        <div style={{marginBottom: '16px'}}>
          <TextInput placeholder="Icon before" iconBefore={Icon.icons.mapPin} />
        </div>
        <div style={{marginBottom: '16px'}}>
          <SelectInput
            options={options}
            title="Multi Select"
            subTitle="Sub title"
            isMulti
            placeholder="Choose many options ..."
          />
        </div>
        <div style={{marginBottom: '16px'}}>
          <TextArea subTitle="Subtitle" placeholder="Placeholder" />
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-end', paddingBottom: '0'}}>
          <SecondaryButton onClick={() => setTrapFocusActive(false)} style={{marginRight: '16px'}}>Deactivate trap</SecondaryButton>
        </div>
      </TrapFocus>
    </WrappedComponent>
  );
});
