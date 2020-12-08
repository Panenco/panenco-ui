import { styled } from 'linaria/react';

export const StyledSwitch = styled.label`
  display: inline-block;
  height: ${(props: any): string => props.height || '18px'};
  position: relative;
  width: ${(props: any): string => props.width || '34px'};

  & input {
    height: 0;
    opacity: 0;
    width: 0;
  }

  & .slider {
    background-color: ${(props: any): string => props.theme.colors.accent500};
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  & .slider::before {
    background-color: white;
    bottom: 1px;
    content: '';
    height: ${(props: any): string => props.height || '16px'};
    left: 1px;
    position: absolute;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    width: ${(props: any): string => props.height || '16px'};
  }

  & input:checked + .slider {
    background-color: ${(props: any): string => props.theme.colors.success};
  }

  & input:focus + .slider {
    // box-shadow: 0 0 1px $secondary;
  }

  & input:checked + .slider::before {
    transform: translateX(16px);
  }

  /* Rounded sliders */
  & .slider.round {
    border-radius: ${(props: any): string => props.height || '16px'};
  }

  & .slider.round::before {
    border-radius: 50%;
  }
`;
