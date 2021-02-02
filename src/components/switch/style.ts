import { styled } from 'linaria/react';

export const StyledSwitch = styled.label`
  display: inline-block;
  height: ${(props: any): string => props.height};
  position: relative;
  width: ${(props: any): string => props.width};

  & input {
    height: 0;
    opacity: 0;
    width: 0;
  }

  & .slider {
    background-color: ${(props: any): string => props.theme.colors.accent500};
    color: ${(props: any): string => props.theme.colors.accent500};
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    padding: 2px;
    // border: 2px solid transparent;
  }

  & .round {
    background-color: white;
    border-radius: 50%;
    content: '';
    height: calc(${(props: any): string => props.height} - 4px);
    left: 2px;
    position: absolute;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    width: calc(${(props: any): string => props.height} - 4px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & input:checked + .slider {
    background-color: ${(props: any): string => props.theme.colors.success};
    color: ${(props: any): string => props.theme.colors.success};
  }

  & input:focus + .slider {
    box-shadow: 0px 0px 0px 2px ${(props: any): string => props.theme.colors.outline};
  }

  & input:checked + .slider .round {
    left: calc(100% + 2px - ${(props: any): string => props.height || '20px'});
    right: 2px;
  }

  & .slider {
    border-radius: ${(props: any): string => props.height || '20px'};
  }
`;
