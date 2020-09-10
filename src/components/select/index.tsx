import * as React from 'react';
import Select, { components, Props as SelectProps } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import AsyncSelect from 'react-select/async';
import AsyncCreatableSelect from 'react-select/async-creatable';
import { useTheme, useMode } from 'utils/hooks';
import { InputComponent } from 'utils/types';
import { Icon, Chip, Text } from 'components';
import { customStyles, StyledSelectWrapper } from './style';

const CustomOption = (props: any): JSX.Element => {
  const {
    children,
    value,
    selectProps: { activeOptions, formatCreateLabel: notFoundLabel, inputValue },
    options,
    isSelected,
    label,
  } = props;
  const showIcon = activeOptions?.some((option) => option.value === value) || isSelected;
  let showButton = false; // btn add new option

  // const checkСoincidence = options
  //   .map((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()))
  //   .some((bool) => bool === false);

  if (options && notFoundLabel && label === notFoundLabel()) {
    showButton = true;
  }

  return (
    <components.Option {...props}>
      {showIcon && <Icon icon={Icon.icons.check} />}
      {children}
      {showButton && <Text className="addNewOption">Create "{inputValue}"</Text>} {/* eslint-disable-line*/}
    </components.Option>
  );
};
export interface SelectInputProps extends SelectProps, InputComponent {
  async?: boolean;
  creatable?: boolean;
  selectWrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  chipIconSize?: number | string;
  onDeleteOption?: any;
}

export const SelectInput = React.forwardRef<HTMLDivElement, SelectInputProps>(
  (
    {
      placeholder,
      error,
      options,
      isMulti,
      onChange,
      isDisabled,
      title,
      subTitle,
      selectWrapperProps,
      style,
      className,
      async,
      creatable,
      components: propComponents,
      styles,
      chipIconSize,
      loadingMessage,
      noOptionsMessage,
      onDeleteOption,
      value,
      filterOption,
      ...props
    }: SelectInputProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();
    const [activeOptions, setOption] = React.useState([] as any);

    const handleChange = (select: { value: string; label: string }, action): void => {
      if (activeOptions.length === 0) {
        setOption([...activeOptions, select]);
      } else {
        const hasntElement = activeOptions.every((option) => option.value !== select.value);

        if (hasntElement) {
          setOption([...activeOptions, select]);
        } else {
          setOption(activeOptions.filter((option) => option.value !== select.value));
        }
      }

      if (onChange) onChange(select, action);
    };

    let SelectComponent: any = null;

    if (async) {
      SelectComponent = AsyncSelect;
    } else if (creatable) {
      SelectComponent = CreatableSelect;
    } else {
      SelectComponent = Select;
    }
    if (async && creatable) {
      SelectComponent = AsyncCreatableSelect;
    }

    const customFilterOption = (option, input): boolean => {
      if (input) {
        return option.label.includes(input);
      }
      return true;
    };
    const isOptionDisabled = (option: any): boolean => option.isdisabled;
    return (
      <StyledSelectWrapper
        theme={theme}
        mode={mode}
        ref={ref}
        style={style}
        className={className}
        error={error}
        {...selectWrapperProps}
      >
        {title && (
          <Text className="title" weight={theme.typography.weights.bold}>
            {title}
          </Text>
        )}
        {subTitle && (
          <Text className="subTitle" size={theme.typography.sizes.xs} color={theme.colors.secondary}>
            {subTitle}
          </Text>
        )}
        <div className="wrapperSelect">
          <SelectComponent
            options={options}
            activeOptions={isMulti && activeOptions}
            placeholder={placeholder}
            isDisabled={isDisabled}
            // TODO: should refactore
            onChange={(isMulti && handleChange) || onChange}
            value={value || (isMulti && null)}
            loadingMessage={
              loadingMessage || (({ inputValue }): string => (inputValue ? `Loading ${inputValue}` : 'Loading...'))
            }
            styles={{ ...customStyles(theme, mode, error, styles) }}
            components={{ Option: CustomOption, ...propComponents }}
            noOptionsMessage={noOptionsMessage || (() => `Not found`)}
            isOptionDisabled={isOptionDisabled}
            filterOption={filterOption || customFilterOption}
            error={error}
            {...props}
          />
          {error && (
            <div className="errorIconWrapper">
              <Icon className="errorIcon" icon={Icon.icons.close} />
            </div>
          )}
        </div>
        {error && (
          <Text className="errorTitle" size={theme.typography.sizes.xs} color={theme.colors.error}>
            {error}
          </Text>
        )}
        {isMulti && activeOptions?.length > 0 && (
          <div className="isMultiActiveChips">
            {activeOptions
              .sort((a, b) => (a.label > b.label ? 1 : b.label > a.label ? -1 : 0)) // eslint-disable-line
              .map((activeOption) => {
                return (
                  <Chip
                    className="multiSelectChip"
                    key={activeOption.value}
                    icon={Icon.icons.x}
                    checked
                    onIconClick={(): void => {
                      setOption(activeOptions.filter((option) => option.value !== activeOption.value));
                      if (onDeleteOption) onDeleteOption(activeOption);
                    }}
                    iconSize={chipIconSize}
                  >
                    {activeOption.label}
                  </Chip>
                );
              })}
          </div>
        )}
      </StyledSelectWrapper>
    );
  },
);
