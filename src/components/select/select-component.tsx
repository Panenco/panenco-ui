import * as React from 'react';
import Select, { components, Props as SelectProps } from 'react-select';
import { useTheme, useMode } from 'utils/hooks';
import CreatableSelect from 'react-select/creatable';
import AsyncSelect from 'react-select/async';
import AsyncCreatableSelect from 'react-select/async-creatable';
import { Icon, Text } from 'components';
import { InputComponent } from '../../utils/types';
import { customStyles } from './style';

const CustomOption = (props: any): JSX.Element => {
  const { children, isSelected } = props;

  return (
    <components.Option {...props}>
      {isSelected && <Icon icon={Icon.icons.check} className='icon' />}
      {children}
    </components.Option>
  );
};

const CustomCreatableOption = ({ creatableDeleteIcon, onDeleteCreatable, ...props }: any): JSX.Element => {
  const { children, isSelected, data } = props;

  return (
    <components.Option {...props}>
      {isSelected && <Icon icon={Icon.icons.check} className='icon' />}
      {children}
      <Icon
        icon={creatableDeleteIcon || Icon.icons.trash}
        className='deleteItemIcon'
        onClick={(e) => {
          e.stopPropagation();
          onDeleteCreatable(data);
        }}
      />
    </components.Option>
  );
};

const MultiValue = () => null;

export interface ComponentProps extends SelectProps, InputComponent {
  async?: boolean;
  creatable?: boolean;
  value?: any;
  selectWrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  wrapperSelectSizes?: {
    lg?: number | string;
    md?: number | string;
    sm?: number | string;
  };
  creatableDeleteIcon?: any;
  onDeleteCreatable?: (data: any) => void;
}

const Component = ({
  error,
  options,
  title,
  subTitle,
  async,
  creatable,
  components: propComponents,
  styles,
  loadingMessage,
  noOptionsMessage,
  placeholder = '',
  onDeleteCreatable,
  ...props
}: ComponentProps): JSX.Element => {
  let SelectComponent: any = Select;
  const theme = useTheme();
  const { mode } = useMode();

  if (async) {
    SelectComponent = AsyncSelect;
  } else if (creatable) {
    SelectComponent = CreatableSelect;
  }
  if (async && creatable) {
    SelectComponent = AsyncCreatableSelect;
  }

  const SelectOption = onDeleteCreatable
    ? (optionProps) => <CustomCreatableOption onDeleteCreatable={onDeleteCreatable} {...optionProps} />
    : CustomOption;

  return (
    <>
      {title && (
        <Text className='title' weight={theme.typography.weights.bold} size={theme.typography.sizes.m}>
          {title}
        </Text>
      )}
      {subTitle && (
        <Text className='subTitle' size={theme.typography.sizes.xs} color={theme.colors.base700}>
          {subTitle}
        </Text>
      )}
      <>
        <div className='wrapperSelect'>
          <SelectComponent
            options={options}
            loadingMessage={
              loadingMessage || (({ inputValue }): string => (inputValue ? `Loading ${inputValue}` : 'Loading...'))
            }
            styles={{ ...customStyles(theme, mode, error, styles) }}
            components={{
              Option: SelectOption,
              MultiValue,
              ...propComponents,
            }}
            noOptionsMessage={noOptionsMessage || (() => 'Not found')}
            error={error}
            isClearable={false}
            placeholder={placeholder}
            {...props}
          />
        </div>
        <Text className='errorTitle' size={theme.typography.sizes.xs} color={theme.colors.error}>
          {error}
        </Text>
      </>
    </>
  );
};

export default Component;
