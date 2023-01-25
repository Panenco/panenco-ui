import styled from 'styled-components';

export const StyledSwitch = styled.label<{
  height?: string;
  size: number;
  width?: string;
}>`
  display: inline-block;
  height: ${({ size, height }) => height || `${size / 2}px`};
  position: relative;
  width: ${({ size, width }) => width || `${size}px`};

  & input {
    height: 0;
    opacity: 0;
    width: 0;
  }

  & .slider {
    background-color: ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.error};
    border-radius: ${({ size, height }) => height || `${size / 2}px`};
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    padding: 2px;
  }

  & .round {
    background-color: white;
    border-radius: 50%;
    content: '';
    height: calc(${({ height, size }) => height || `${size / 2}px`} - 4px);
    left: 2px;
    position: absolute;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    width: calc(${({ height, size }) => height || `${size / 2}px`} - 4px);
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      height: calc((${({ height, size }) => height || `${size / 2}px`} - 4px) / 2);
      width: auto;
    }
  }

  & input:checked + .slider {
    background-color: ${({ theme }) => theme.colors.success};
    color: ${({ theme }) => theme.colors.success};

    .round {
      left: calc(100% + 2px - ${({ size, height }) => height || `${size / 2}px`});
      right: 2px;
    }
  }

  & input:focus + .slider {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.colors.base900};
  }

  & input:disabled + .slider {
    opacity: 0.4;
    pointer-events: none;
  }
`;
