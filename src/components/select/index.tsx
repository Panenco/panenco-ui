import * as React from 'react';
import Select, { components, Props as SelectProps } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import AsyncSelect from 'react-select/async';
import { AsyncPaginate } from 'react-select-async-paginate';
import AsyncCreatableSelect from 'react-select/async-creatable';
import { useTheme, useMode } from 'utils/hooks';
import { InputComponent } from 'utils/types';
import { idGenerator } from 'utils/helpers';
import { Icon, Chip, Text, Row, Col } from 'components';
import { customStyles, StyledSelectWrapper } from './style';

const CustomOption = (props: any): JSX.Element => {
  const {
    children,
    value,
    selectProps: { activeOptions, formatCreateLabel: notFoundLabel, inputValue, getOptionValue },
    options,
    isSelected,
    label,
  } = props;

  const showIcon =
    activeOptions?.some((option) => {
      if (getOptionValue) {
        return getOptionValue(option) === value;
      }
      return option.value === value;
    }) || isSelected;
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
  asyncPaginate?: boolean;
  selectWrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  activeOptions?: any;
  chipIconSize?: number | string;
  chipIcon?: any;
  clearChips?: boolean;
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
  wrapperSelectSizes?: {
    l?: number | string;
    m?: number | string;
    s?: number | string;
  };
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
      asyncPaginate,
      components: propComponents,
      styles,
      loadingMessage,
      activeOptions: activeOptionsProp,
      noOptionsMessage,
      onDeleteOption,
      chipIconSize,
      chipIcon,
      chipTextSize,
      chipTextWeight,
      chipTextTypography,
      value,
      wrapperSelectSizes = {
        l: 12,
        m: 8,
        s: 4,
      },
      clearChips,
      filterOption,

      ...props
    }: SelectInputProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();
    const [activeOptions, setOption] = React.useState(activeOptionsProp || ([] as any));

    if ((activeOptions.length !== 0 || activeOptions?.size !== 0) && clearChips) {
      setOption(activeOptionsProp || []);
    }

    const handleChange = (select: { value: string; label: string }, action): void => {
      let selectValue = select.value;
      if (props.getOptionValue) {
        selectValue = props.getOptionValue(select);
      }
      if (activeOptions.length === 0 || activeOptions?.size === 0) {
        setOption([...activeOptions, select]);
      } else {
        const hasntElement = activeOptions.every((option) => {
          if (props.getOptionValue) {
            return props.getOptionValue(option) !== selectValue;
          }
          return option.value !== selectValue;
        });

        if (hasntElement) {
          setOption([...activeOptions, select]);
        } else {
          setOption(
            activeOptions.filter((option) => {
              if (props.getOptionValue) {
                return props.getOptionValue(option) !== selectValue;
              }
              return option.value !== selectValue;
            }),
          );
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
    if (asyncPaginate) {
      SelectComponent = AsyncPaginate;
    }

    const customFilterOption = (option, input): boolean => {
      if (input) {
        return option.label.toLowerCase().includes(input.toLowerCase());
      }
      return true;
    };
    const isOptionDisabled = (option: any): boolean => option.isdisabled;

    const Component = () => (
      <>
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
      </>
    );

    const ChipsComponent = () => (
      <div className="isMultiActiveChips">
        {activeOptions.map((activeOption, index) => {
          let chipLabel = activeOption.label;
          if (props.getOptionLabel) {
            chipLabel = props.getOptionLabel(activeOption);
          }

          return (
            <Chip
              className="multiSelectChip"
              key={idGenerator()} // eslint-disable-line
              icon={chipIcon || Icon.icons.x}
              checked
              onIconClick={(): void => {
                setOption(
                  activeOptions.filter((option) => {
                    if (props.getOptionValue) {
                      return props.getOptionValue(option) !== props.getOptionValue(activeOption);
                    }
                    return option.value !== activeOption.value;
                  }),
                );
                if (onDeleteOption) onDeleteOption(activeOption);
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

    return (
      <StyledSelectWrapper
        theme={theme}
        mode={mode}
        ref={ref}
        style={style}
        className={className}
        error={error}
        wrapperSelectSizes={wrapperSelectSizes}
        {...selectWrapperProps}
      >
        {wrapperSelectSizes ? (
          <>
            <Row className="row">
              <Col l={wrapperSelectSizes.l} m={wrapperSelectSizes.m} s={wrapperSelectSizes.s} className="col">
                <Component />
              </Col>
            </Row>
            {isMulti && (activeOptions?.length > 0 || activeOptions?.size > 0) && <ChipsComponent />}
          </>
        ) : (
          <>
            <Component />
            {isMulti && (activeOptions?.length > 0 || activeOptions?.size > 0) && <ChipsComponent />}
          </>
        )}
      </StyledSelectWrapper>
    );
  },
);
