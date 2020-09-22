import * as React from 'react';
import { useTheme, useMode } from 'utils/hooks';
import { SelectInput, SelectInputProps } from 'components';
import { v4 as uuidv4 } from 'uuid';
// import { idGenerator } from 'utils/helpers';
// import CreatableSelect, { CreatableProps } from 'react-select/creatable';
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
  // placeholder?: string;
}

export const AutoComplete = React.forwardRef<HTMLDivElement, AutoCompleteProps>(
  (
    {
      options,
      placeholder,
      searchPlaceholder,
      components: propComponents,
      isMulti,
      onChange,
      onCreateOption,
      value,
      ...props
    }: AutoCompleteProps,
    ref,
  ) => {
    const theme = useTheme();
    const { mode } = useMode();
    const [newOptions, setOptions] = React.useState((options && [...options]) || []);
    const [inputValue, setValue] = React.useState('' as any);
    // searchPlaceholder = 'Keep typing your search term';
    // placeholder = 'Start typing your search term',
    const handleCreate = (input: string): void => {
      setOptions(newOptions?.concat({ label: input, value: uuidv4() }));
      setValue('');

      if (onCreateOption) onCreateOption(input);
    };

    const handleChange = (select: { value: string; label: string }, action): void => {
      setValue(select);

      if (onChange) onChange(select, action);
    };
    
    return (
      <SelectInput
        ref={ref}
        placeholder={placeholder}
        onCreateOption={handleCreate}
        options={newOptions}
        theme={theme}
        mode={mode}
        creatable
        searchPlaceholder={searchPlaceholder}
        components={searchPlaceholder ? { MenuList: CustomMenuList, ...propComponents } : { ...propComponents }}
        value={(!isMulti && inputValue) || value}
        isMulti={isMulti}
        isClearable={false}
        onChange={handleChange}
        {...props}
      />
    );
  },
);
