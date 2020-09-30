import * as React from 'react';
import { idGenerator } from 'utils/helpers';
import { Icon, Chip } from 'components';
import { Props as SelectProps } from 'react-select';
import { InputComponent } from 'utils/types';

export interface ChipsProps extends SelectProps, InputComponent {
  value?: any;
  chipIconSize?: number | string;
  chipIcon?: any;
  chipTextWeight?: string;
  chipTextSize?: {
    textSize: string;
    lineHeight: string;
  };
  chipTextTypography?: {
    size: {
      textSize: string;
      lineHeight: string;
    };
    weight: string;
  };
  onDeleteOption?: any;
}

const ChipsComponent = ({
  value,
  onDeleteOption,
  chipIconSize,
  chipTextSize,
  chipTextWeight,
  chipTextTypography,
  chipIcon,
  getOptionLabel,
}: ChipsProps): JSX.Element => (
  <div className="isMultiActiveChips">
    {value?.map((option) => {
      if(!option) return null;
      let chipLabel = option.label;
      if (getOptionLabel) {
        chipLabel = getOptionLabel(option);
      }

      return (
        <Chip
          className="multiSelectChip"
          key={idGenerator()}
          icon={chipIcon || Icon.icons.x}
          checked
          onIconClick={(): void => {
            if (onDeleteOption) {
              onDeleteOption(option);
            }
          }}
          iconSize={chipIconSize}
          textSize={chipTextSize}
          textWeight={chipTextWeight}
          textTypography={chipTextTypography}
        >
          {chipLabel}
        </Chip>
      );
    })}
  </div>
);

export default ChipsComponent;
