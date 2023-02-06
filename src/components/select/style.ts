import { PUITheme } from 'utils/types';
import styled from 'styled-components';
import { weights } from 'styles';

export const additionalStyles = (element: string, styles, ...arg): any =>
  styles?.[element] ? styles[element](...arg) : {};

export const customStyles = (
  theme: PUITheme,
  getPlacement: (placement: string) => void,
  placementState: string,
  error?: any,
  styles?: any,
): any => ({
  indicatorSeparator: (provided, state): any => ({
    ...provided,
    display: 'none',
    ...additionalStyles('indicatorSeparator', styles, provided, state),
  }),
  menuPortal: (provided, state): any => ({
    ...provided,
    ...additionalStyles('menuPortal', styles, provided, state),
  }),
  placeholder: (provided, state): any => {
    return {
      ...provided,
      color: theme.colors.base700,
      fontWeight: weights.regular,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingRight: '5px',
      width: '100%',
      ...additionalStyles('placeholder', styles, provided, state),
    };
  },
  container: (provided, state): any => ({
    ...provided,
    pointerEvents: state.isDisabled ? 'none' : 'auto',
    width: '100%',
    opacity: state.isDisabled ? '0.4' : '1',
    // width: `${((): string => {
    //   if (error) return '100%';
    //   return `calc(100% - 24px)`;
    // })()}`,
    // [`@media (max-width: ${breakpoints.l})`]: {
    //   width: '100%',
    // },
    ...additionalStyles('container', styles, provided, state),
  }),
  control: (provided, state): any => {
    const {
      isFocused,
      selectProps: { menuIsOpen },
    } = state;

    const isBorderColor = (): string => {
      if (error) {
        return theme.colors.error;
      }
      return menuIsOpen ? theme.colors.primary500 : theme.colors.base700;
    };
    const isHoverBorderColor = (): string => {
      if (error) {
        return theme.colors.error;
      }
      return theme.colors.primary500;
    };
    const createPlacementStyles = (placement: string) => {
      if (placement === 'top')
        return {
          borderTopColor: menuIsOpen && 'transparent',
          borderTopLeftRadius: menuIsOpen && 0,
          borderTopRightRadius: menuIsOpen && 0,
          '&:hover': {
            borderColor: `${isHoverBorderColor()}`,
            borderTopColor: menuIsOpen && 'transparent',
            cursor: 'pointer',
          },
        };
      return {
        borderBottomColor: menuIsOpen && 'transparent',
        borderBottomLeftRadius: menuIsOpen && 0,
        borderBottomRightRadius: menuIsOpen && 0,
        '&:hover': {
          borderColor: `${isHoverBorderColor()}`,
          borderBottomColor: menuIsOpen && 'transparent',
          cursor: 'pointer',
        },
      };
    };

    return {
      ...provided,
      backgroundColor: `${((): string => {
        if (state.isDisabled) {
          return theme.colors.base400;
        }
        return theme.colors.base100;
      })()}`,
      boxShadow: !menuIsOpen && isFocused && `0px 0px 0px 2px ${theme.colors.base900}`,
      border: `1px solid ${isBorderColor()}`,
      padding: '5px',
      ...createPlacementStyles(placementState),
      ...additionalStyles('control', styles, provided, state),
    };
  },
  menu: (provided, state): any => {
    const {
      selectProps: { menuIsOpen },
    } = state;
    const isBorder = (): string => {
      if (error) {
        return `1px solid ${theme.colors.error}`;
      }
      return `1px solid ${theme.colors.primary500}`;
    };

    getPlacement(state.placement);

    const createPlacementStyles = (placement: string) => {
      if (placement === 'top')
        return {
          borderBottom: menuIsOpen && 'none',
          borderBottomLeftRadius: menuIsOpen && 0,
          borderBottomRightRadius: menuIsOpen && 0,
        };
      return {
        borderTop: menuIsOpen && 'none',
        borderTopLeftRadius: menuIsOpen && 0,
        borderTopRightRadius: menuIsOpen && 0,
      };
    };

    return {
      ...provided,
      backgroundColor: theme.colors.base100,
      paddingTop: '5px',
      paddingBottom: '5px',
      margin: 0,
      boxShadow: menuIsOpen && 'none',
      border: `${isBorder()}`,
      ...createPlacementStyles(placementState),
      ...additionalStyles('menu', styles, provided, state),
    };
  },
  menuList: (provided, state): any => ({
    ...provided,
    ...additionalStyles('menuList', styles, provided, state),
  }),
  option: (provided, state): any => {
    const {
      value,
      selectProps: { activeOptions, getOptionValue },
      isSelected,
      isFocused,
    } = state;
    const isChoosedOption =
      !!activeOptions?.some((option) => {
        if (getOptionValue) {
          return getOptionValue(option) === value;
        }
        return option.value === value;
      }) || isSelected;
    // const notFoundLabel = 'No results found. Add new object';

    const isOptionColor = (): string => {
      if (state.isDisabled) {
        return theme.colors.base700;
      }

      if (isChoosedOption) {
        return theme.colors.primary500;
      }

      return theme.colors.base900;
    };
    const isHoverColor = (): string => {
      return isChoosedOption ? theme.colors.primary700 : theme.colors.base900;
    };

    const isBackgroundColor = (): string => {
      if (state.isDisabled) {
        return theme.colors.base400;
      }
      if (isFocused) {
        return theme.colors.primary200;
      }
      return 'inherit';
    };

    return {
      ...provided,
      backgroundColor: `${isBackgroundColor()}`,
      color: `${isOptionColor()}`,
      paddingLeft: '25px',
      paddingBottom: '18px',
      paddingTop: '18px',
      position: 'relative',
      pointerEvents: state.isDisabled ? 'none' : 'auto',
      '&:hover': {
        backgroundColor: theme.colors.primary200,
        color: `${isHoverColor()}`,
        cursor: 'pointer',
        '& .addNewOption': {
          color: theme.colors.primary500,
        },
      },
      '& .icon': {
        position: 'absolute',
        left: '8px',
        top: 'calc(50% - 6px)',
        width: '12px',
        height: '12px',
      },
      '& .deleteItemIcon': {
        position: 'absolute',
        right: '25px',
        top: 'calc(50% - 12px)',
        padding: '6px',
        width: '24px',
        height: '24px',
        borderRadius: '4px',
        '&:hover': {
          backgroundColor: theme.colors.primary500,
        },
      },
      '& .addNewOption': {
        paddingLeft: '5px',
        color: theme.colors.primary500,
      },
      ...additionalStyles('option', styles, provided, state),
    };
  },
  dropdownIndicator: (provided, state): any => {
    const { selectProps } = state;
    return {
      ...provided,
      color: theme.colors.base700,
      transform: selectProps.menuIsOpen && 'rotate(180deg)',
      '&:hover': {
        color: theme.colors.base700,
        cursor: 'pointer',
      },
      ...additionalStyles('dropdownIndicator', styles, provided, state),
    };
  },
  group: (provided, state): any => ({
    ...provided,
    ...additionalStyles('group', styles, provided, state),
  }),
  groupHeading: (provided, state): any => ({
    ...provided,
    textTransform: 'none',
    fontSize: '100%',
    marginBottom: '10px',
    ...additionalStyles('groupHeading', styles, provided, state),
  }),
  singleValue: (provided: any, state: any): any => ({
    ...provided,
    color: theme.colors.base900,
    ...additionalStyles('singleValue', styles, provided, state),
  }),
  input: (provided: any, state): any => ({
    ...provided,
    color: theme.colors.base900,
    ...additionalStyles('input', styles, provided, state),
  }),
  valueContainer: (provided: any, state: any) => {
    return {
      ...provided,
      ...additionalStyles('valueContainer', styles, provided, state),
    };
  },
});

export const StyledSelectWrapper = styled.div<{
  error;
  wrapperSelectSizes;
}>`
  position: relative;

  .wrapperSelect {
    display: flex;
    width: 100%;
  }

  .isMultiActiveChips {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .multiSelectChip {
    margin: 0 4px 4px 0;
  }

  .col {
    position: relative;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .title {
    color: ${({ theme }) => theme.colors.base900};

    display: block;
  }

  .subTitle {
    display: block;
    margin-bottom: 5px;
  }

  .errorTitle {
    bottom: -16px;
    color: ${({ theme }) => theme.colors.error};
    display: block;
    height: 16px;
    position: absolute;
  }
`;
