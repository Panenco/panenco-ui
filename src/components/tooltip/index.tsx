import * as React from 'react';
import { Manager, Popper, Reference } from 'react-popper';
import * as PopperJS from '@popperjs/core';
import { useMode, useTheme } from 'utils/hooks';
import cx from 'classnames';
import { PopperBox, ReferenceBox, Arrow, PopperWrapper } from './styles';


export interface TooltipProps {
  content: React.ReactNode | string;
  children: React.ReactNode;
  arrow?: boolean;
  arrowPadding?: number;
  arrowProps?: React.HTMLAttributes<HTMLDivElement>;
  className?: string;
  enterNextDelay?: number;
  offset?: [number, number];
  position?: PopperJS.Placement;
  popperProps?: React.HTMLAttributes<HTMLDivElement>;
  backgroundColor?: string;
  height?: string | number;
  width?: string | number;
  textColor?: string;
  linkColor?: string;

  onOpen?(event): void;

  onClose?(event): void;

  [key: string]: any;
}

export const Tooltip: React.FC<TooltipProps> = (props): JSX.Element => {
  const {
    enterNextDelay = 500,
    children,
    position = 'top',
    content,
    arrow = false,
    onOpen,
    onClose,
    arrowProps = {},
    popperProps = {},
    arrowPadding,
    className,
    offset,
    backgroundColor,
    height,
    width,
    textColor,
    linkColor,
    ...other
  } = props;
  const modifiers = [
    {
      name: 'flip',
      enabled: false,
    },
    {
      name: 'arrow',
      enabled: arrow,
      options: {
        padding: arrowPadding || 6,
      },
    },
    {
      name: 'offset',
      options: {
        offset: offset || [0, 13],
      },
    },
  ];

  const theme = useTheme();
  const { mode } = useMode();

  const [isOpen, setOpen] = React.useState<boolean>(false);

  const handleMouseEnter = (event): void => {
    setOpen(true);
    if (typeof onOpen === 'function') {
      onOpen(event);
    }
  };

  const handleMouseLeave = (event): void => {
    setTimeout(() => {
      setOpen(false);
      if (typeof onClose === 'function') {
        onClose(event);
      }
    }, enterNextDelay);
  };

  return (
    <Manager>
      <PopperWrapper
        className={cx('tooltipWrapper', className)}
        theme={theme}
        mode={mode}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Reference>
          {({ ref }): JSX.Element => (
            <ReferenceBox className='referenceBox' theme={theme} mode={mode} ref={ref}>
              {children}
            </ReferenceBox>
          )}
        </Reference>
        <Popper placement={position} modifiers={modifiers}>
          {({ ref, style, placement, arrowProps: popperArrowProps }): JSX.Element => (
            <PopperBox
              ref={ref}
              show={isOpen}
              theme={theme}
              mode={mode}
              textColor={textColor}
              backgroundColor={backgroundColor}
              linkColor={linkColor}
              style={{ height, width, ...style }}
              {...popperProps}
              {...other}
              className={cx('popperBox', popperProps.className)}
            >
              {content}
              {
                arrow && (
                  <Arrow
                    theme={theme}
                    mode={mode}
                    backgroundColor={backgroundColor}
                    ref={popperArrowProps.ref}
                    data-placement={placement}
                    style={popperArrowProps.style}
                    {...arrowProps}
                    className={cx('tooltipArrow', arrowProps.className)}
                  />
                )
              }
            </PopperBox>
          )}
        </Popper>
      </PopperWrapper>
    </Manager>
  );
};
