import * as React from 'react';
import { useTheme, useMode } from 'utils/hooks';
import { SelectInput, SelectInputProps } from 'components/select';
import { components } from 'react-select';
import { StyledFirstDisableOption } from './style';

const CustomMenuList = (props: any): JSX.Element => {
  const {
    children,
    selectProps: { searchPlaceholder, theme },
  } = props;

  return (
    <components.MenuList {...props}>
      <StyledFirstDisableOption theme={theme}>{searchPlaceholder}</StyledFirstDisableOption>
      {children}
    </components.MenuList>
  );
};

export interface AutoCompleteProps extends SelectInputProps {
  searchPlaceholder?: string;
  chipIconSize?: number | string;
}

export const AutoComplete = React.forwardRef<HTMLDivElement, AutoCompleteProps>(
  (
    {
      options,
      placeholder = 'Start typing your search term',
      onChange,
      searchPlaceholder = 'Keep typing your search term',
      formatCreateLabel: formatCreateLabelProps,
      chipIconSize,
      ...props
    }: AutoCompleteProps,
    ref,
  ) => {
    const theme = useTheme();
    const { mode } = useMode();
    const [newOptions, setOptions] = React.useState(options && [...options]);

    const handleChange = (select: { value: string; label: string }, action): void => {
      if (!newOptions?.includes(select)) {
        setOptions(newOptions?.concat(select));
      }

      if (onChange) onChange(select, action);
    };
    const formatCreateLabel = (input?: any): string => {
      if (formatCreateLabelProps) {
        return input ? formatCreateLabelProps(input) : formatCreateLabelProps();
      }
      return ``;
    };

    return (
      <SelectInput
        ref={ref}
        placeholder={placeholder}
        options={newOptions}
        onChange={handleChange}
        theme={theme}
        mode={mode}
        creatable
        formatCreateLabel={formatCreateLabel}
        openMenuOnClick={false}
        searchPlaceholder={searchPlaceholder}
        components={{ MenuList: CustomMenuList }}
        chipIconSize={chipIconSize}
        {...props}
      />
    );
  },
);
