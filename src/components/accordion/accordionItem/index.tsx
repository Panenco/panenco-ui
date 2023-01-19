import * as React from 'react';
import { Icon, icons, Text } from 'components';
import AnimatedHeight from 'react-animate-height';
import cx from 'classnames';

import { useAccordion } from 'components/accordion/useAccordion';
import { useTheme } from 'utils/hooks';
import { idGenerator } from 'utils/helpers';
import { StyledAccordion } from './style';

type IconType = keyof typeof icons.sm | boolean;
export interface AccordionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  iconLeft?: IconType;
  iconRight?: IconType;
  onClick?: (e?: MouseEvent) => void;
  shouldRotateIcon?: boolean;
  title: string;
  variant?: 'outlined' | 'text';
}

export const Accordion = React.forwardRef(
  (props: AccordionProps, ref: React.RefObject<HTMLDivElement>): JSX.Element => {
    const {
      className,
      title,
      children,
      onClick,
      iconRight,
      iconLeft,
      shouldRotateIcon = true,
      variant = 'outlined',
      ...otherProps
    } = props;
    const theme = useTheme();
    const { combinedRef, handleClick, isOpen } = useAccordion({ ref, onClick, theme, ...otherProps });

    const checkTypeIconRight = typeof iconRight === 'boolean';
    const checkTypeIconLeft = typeof iconLeft === 'boolean';

    return (
      <StyledAccordion
        ref={combinedRef}
        theme={theme}
        className={cx(className, 'accordion')}
        variant={variant}
        {...otherProps}
      >
        <button type='button' className='accordionHeader' onClick={handleClick} aria-expanded={isOpen || 'false'}>
          {iconLeft && (
            <Icon
              className={cx(
                'accordionHeaderIconLeft',
                shouldRotateIcon && isOpen ? 'accordionHeaderIconLeftOpen' : 'accordionHeaderIconLeftClosed',
              )}
              size='sm'
              icon={checkTypeIconLeft ? 'chevronRight' : iconLeft}
            />
          )}

          <Text weight={theme.typography.weights.bold} className='accordionHeaderTitle'>
            {title}
          </Text>

          {iconRight && (
            <Icon
              key={idGenerator()}
              className='accordionHeaderIcon'
              icon={checkTypeIconRight ? (isOpen ? 'minus' : 'plus') : iconRight} // eslint-disable-line
            />
          )}
        </button>
        <AnimatedHeight duration={500} height={isOpen ? 'auto' : 0}>
          <div className='accordionContent'>{children}</div>
        </AnimatedHeight>
      </StyledAccordion>
    );
  },
);

Accordion.defaultProps = {
  onClick: (): void => {},
};
