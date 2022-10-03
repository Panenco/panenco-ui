import * as React from 'react';
import Select, { components, Props as SelectProps } from 'react-select';
import { useTheme } from 'utils/hooks';
import CreatableSelect from 'react-select/creatable';
import AsyncSelect from 'react-select/async';
import AsyncCreatableSelect from 'react-select/async-creatable';
import { Icon, icons, Text } from 'components';
import { InputComponent } from '../../utils/types';
import { customStyles } from './style';

const CustomOption = ({ deleteItemIcon = 'trash', onDeleteItem, ...props }: any): JSX.Element => {
  const { children, isSelected, data } = props;

  const handleDelete = (e) => {
    e.stopPropagation();
    onDeleteItem(data);
  };

  /* eslint-disable-next-line no-underscore-dangle */
  const deleteButtonIsShown = onDeleteItem && !data.__isNew__ && !isSelected;

  return (
    <components.Option {...props}>
      {isSelected && <Icon icon='check' className='icon' />}
      {children}
      {deleteButtonIsShown && <Icon icon={deleteItemIcon} className='deleteItemIcon' onClick={handleDelete} />}
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
  deleteItemIcon?: keyof typeof icons.sm;
  onDeleteItem?: (data: any) => any;
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
  deleteItemIcon,
  onDeleteItem,
  ...props
}: ComponentProps): JSX.Element => {
  let SelectComponent: any = Select;
  const theme = useTheme();

  if (async) {
    SelectComponent = AsyncSelect;
  } else if (creatable) {
    SelectComponent = CreatableSelect;
  }
  if (async && creatable) {
    SelectComponent = AsyncCreatableSelect;
  }

  const SelectOption = (optionProps) => (
    <CustomOption deleteItemIcon={deleteItemIcon} onDeleteItem={onDeleteItem} {...optionProps} />
  );

  const [placementState, setPlacementState] = React.useState<string>('');

  const getPlacement = (placement: string): void => {
    setPlacementState(placement);
  };

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
            styles={{ ...customStyles(theme, getPlacement, placementState, error, styles) }}
            components={{
              Option: SelectOption,
              MultiValue,
              ...propComponents,
            }}
            noOptionsMessage={noOptionsMessage || (() => 'Not found')}
            error={error}
            isClearable={false}
            placeholder={placeholder}
            menuPlacement='auto'
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
