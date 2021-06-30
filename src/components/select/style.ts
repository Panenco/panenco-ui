import { PUITheme, ThemeMode } from 'utils/types';
import { styled } from 'linaria/react';
import { transparentize } from 'polished';
import { weights } from 'styles';

const additionalStyles = (element: string, styles, ...arg): any => (styles?.[element] ? styles[element](...arg) : {});

export const customStyles = (theme: PUITheme, mode?: string, error?: any, styles?: any): any => ({
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
      color: mode === ThemeMode.dark ? theme.colors.light : theme.colors.secondary,
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
      if (mode === ThemeMode.dark) {
        return menuIsOpen ? theme.colors.light : theme.colors.secondary;
      }
      return menuIsOpen ? theme.colors.accent : theme.colors.secondary;
    };
    const isHoverBorderColor = (): string => {
      if (error) {
        return theme.colors.error;
      }
      return mode === ThemeMode.dark ? theme.colors.light : theme.colors.accent;
    };

    return {
      ...provided,
      backgroundColor: `${((): string => {
        if (state.isDisabled) {
          return mode === ThemeMode.dark ? transparentize(0.4, theme.colors.secondary) : theme.colors.border;
        }
        return mode === ThemeMode.dark ? theme.colors.dark : theme.colors.light;
      })()}`,
      boxShadow: !menuIsOpen && isFocused && `0px 0px 0px 2px ${theme.colors.outline}`,
      border: `${error ? '2px' : '1px'} solid ${isBorderColor()}`,
      borderBottomColor: menuIsOpen && 'transparent',
      // borderBottomColor: menuIsOpen && 'transparent',
      borderBottomLeftRadius: menuIsOpen && 0,
      borderBottomRightRadius: menuIsOpen && 0,
      padding: '5px',
      '&:hover': {
        borderColor: `${isHoverBorderColor()}`,
        borderBottomColor: menuIsOpen && 'transparent',
        cursor: 'pointer',
      },
      ...additionalStyles('control', styles, provided, state),
    };
  },
  menu: (provided, state): any => {
    const {
      selectProps: { menuIsOpen },
    } = state;
    const isBorder = (): string => {
      if (error) {
        return `2px solid ${theme.colors.error}`;
      }
      return `1px solid ${mode === ThemeMode.dark ? theme.colors.light : theme.colors.accent}`;
    };

    return {
      ...provided,
      backgroundColor: mode === ThemeMode.dark ? theme.colors.dark : theme.colors.light,
      paddingTop: '5px',
      paddingBottom: '5px',
      marginTop: '-2px !important', // TODO
      margin: 0,
      boxShadow: menuIsOpen && 'none',
      border: `${isBorder()}`,
      borderTop: menuIsOpen && 'none',
      borderTopLeftRadius: menuIsOpen && 0,
      borderTopRightRadius: menuIsOpen && 0,
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
        return theme.colors.secondary;
      }
      if (mode === ThemeMode.light) {
        return isChoosedOption ? theme.colors.accent : theme.colors.primary;
      }
      return isFocused ? theme.colors.primary : theme.colors.light;
    };
    const isHoverColor = (): string => {
      if (mode === ThemeMode.light) {
        return isChoosedOption ? theme.colors.hover : theme.colors.primary;
      }
      return theme.colors.primary;
    };

    const isBackgroundColor = (): string => {
      if (state.isDisabled) {
        return theme.colors.border;
      }
      if (isFocused) {
        return mode === ThemeMode.dark ? theme.colors.border : theme.colors.highlight;
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
        backgroundColor: mode === ThemeMode.dark ? theme.colors.border : theme.colors.highlight,
        color: `${isHoverColor()}`,
        cursor: 'pointer',
        '& .addNewOption': {
          color: mode === ThemeMode.dark ? theme.colors.primary : theme.colors.accent,
        },
      },
      '& .icon': {
        position: 'absolute',
        left: '8px',
        top: 'calc(50% - 6px)',
        width: '12px',
        height: '12px',
      },
      '& .addNewOption': {
        paddingLeft: '5px',
        color: mode === ThemeMode.dark ? theme.colors.light : theme.colors.accent,
      },
      ...additionalStyles('option', styles, provided, state),
    };
  },
  dropdownIndicator: (provided, state): any => {
    const { selectProps } = state;
    return {
      ...provided,
      color: theme.colors.secondary,
      transform: selectProps.menuIsOpen && 'rotate(180deg)',
      '&:hover': {
        color: theme.colors.secondary,
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
    color: mode === ThemeMode.dark ? theme.colors.light : theme.colors.primary,
    ...additionalStyles('singleValue', styles, provided, state),
  }),
  input: (provided: any, state): any => ({
    ...provided,
    color: mode === ThemeMode.dark ? theme.colors.light : theme.colors.primary,
    ...additionalStyles('input', styles, provided, state),
  }),
  valueContainer: (provided: any, state: any) => {
    return {
      ...provided,
      ...additionalStyles('valueContainer', styles, provided, state),
    };
  },
  // noOptionsMessage: (base: any, state: any) => {
  //   return {
  //     ...base,
  //     color: 'red',
  //   };
  // },
});

export const StyledSelectWrapper = styled.div`
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
    margin: 10px 4px 0 0;
  }

  .col {
    position: relative;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .title {
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary};

    display: block;
    margin-bottom: 5px;
  }

  .subTitle {
    display: block;
    margin-bottom: 5px;
  }

  .errorTitle {
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.error};
    display: block;
    position: absolute;
    margin-top: 5px;
  }
`;
