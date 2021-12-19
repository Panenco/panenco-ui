import * as React from 'react';
import { Manager, Popper, Reference } from 'react-popper';
import * as PopperJS from '@popperjs/core';
import { useMode, useTheme } from 'utils/hooks';
import { PopperBox, ReferenceBox, Arrow } from './styles-new';


interface Props {
  arrow?: boolean;
  content: React.ReactNode | string;
  className?: string;
  children: React.ReactNode;
  position?: PopperJS.Placement;
  enterNextDelay?: number;
  arrowPadding?: number;
  arrowProps?: React.HTMLAttributes<HTMLDivElement>;
  popperProps?: React.HTMLAttributes<HTMLDivElement>;
  offset?: [number, number];

  onOpen?(event): void;

  onClose?(event): void;

  [key: string]: any;
}

const Tooltip: React.FC<Props> = (props): JSX.Element => {
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
    offset,
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
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const [isPopperHovered, setIsPopperHovered] = React.useState(false);

  const handleMouseEnter = (event): void => {
    setOpen(true);
    if (typeof onOpen === 'function') {
      onOpen(event);
    }
  };

  const handleMouseLeave = (event): void => {
    setTimeout(() => {
      setOpen(isPopperHovered);
      if (typeof onClose === 'function') {
        onClose(event);
      }
    }, enterNextDelay);
  };

  const handlePopperMouseEnter = (): void => {
    setIsPopperHovered(true);
  };
  const handlePopperMouseLeave = (): void => {
    setIsPopperHovered(false);
    setOpen(false);
  };
  return (
    <Manager>
        <Reference>
          {({ ref }): JSX.Element => (
            <ReferenceBox theme={theme} mode={mode} ref={ref} onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}>
              {children}
            </ReferenceBox>
          )}
        </Reference>
        <Popper placement={position} modifiers={modifiers}>
          {({ ref, style, placement, arrowProps: popperArrowProps }): JSX.Element | null => {
            // return isOpen ? (
            return <PopperBox show={isOpen} {...popperProps}{...other} theme={theme} mode={mode} ref={ref}
                              style={style}
                              onMouseEnter={handlePopperMouseEnter}
                              onMouseLeave={handlePopperMouseLeave}>
              {content}
              {arrow && <Arrow theme={theme} mode={mode}  {...arrowProps} ref={popperArrowProps.ref}
                               data-placement={placement}
                               style={popperArrowProps.style} />}
            </PopperBox>;
            // ) : null;
          }}
        </Popper>
    </Manager>
  );
};

export default Tooltip;
