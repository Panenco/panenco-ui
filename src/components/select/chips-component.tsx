import * as React from 'react';
import { idGenerator } from 'utils/helpers';
import { Chip } from 'components';
import { Props as SelectProps } from 'react-select';
import { InputComponent } from '../../utils/types';

export interface ChipsProps extends SelectProps, InputComponent {
  value?: any;
  chipIconSize?: number | string;
  chipIcon?: any;
  onDeleteOption?: any;
}

const ChipsComponent = ({ value, onDeleteOption, chipIcon, getOptionLabel }: ChipsProps): JSX.Element => (
  <div className='isMultiActiveChips'>
    {value?.map((option) => {
      if (!option) return null;
      let chipLabel = option.label;
      if (getOptionLabel) {
        chipLabel = getOptionLabel(option);
      }

      return (
        <Chip
          className='multiSelectChip'
          key={idGenerator()}
          icon={chipIcon || 'x'}
          checked
          onIconClick={(): void => {
            if (onDeleteOption) {
              onDeleteOption(option);
            }
          }}
        >
          {chipLabel}
        </Chip>
      );
    })}
  </div>
);

export default ChipsComponent;
