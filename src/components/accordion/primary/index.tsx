import * as React from 'react';
import { Icon, Text } from 'components';
import AnimatedHeight from 'react-animate-height';
import cx from 'classnames';
import { useAccordion } from 'components/accordion/useAccordion';
import { useTheme } from 'utils/hooks';
import { idGenerator } from 'utils/helpers';
import { AccordionProps } from '../types';
import { StyledAccordionPrimary } from './style';

export const AccordionPrimary = React.forwardRef((props: AccordionProps, ref: any): JSX.Element => {
  const {
    className,
    title = 'Title',
    children,
    onClick,
    icons: iconsProp,
    iconRight,
    iconLeft,
    onIconClick,
    shouldRotateIcon = true,
    ...otherProps
  } = props;
  const theme = useTheme();
  const { combinedRef, handleClick, isOpen } = useAccordion({ ref, onClick, theme, ...otherProps });

  const handleIconClick = (e: React.UIEvent): void => {
    e.persist();
    e.stopPropagation();

    onIconClick(e);
  };

  const checkTypeIconRight = typeof iconRight === 'boolean';
  const checkTypeIconLeft = typeof iconLeft === 'boolean';

  return (
    <StyledAccordionPrimary ref={combinedRef} theme={theme} className={cx(className, 'accordion')} {...otherProps}>
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
        {iconsProp &&
          iconsProp.map((item) => (
            <Icon
              key={idGenerator()}
              onClick={onIconClick && handleIconClick}
              className='accordionHeaderIconsIcon'
              icon={item}
            />
          ))}
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
    </StyledAccordionPrimary>
  );
});

AccordionPrimary.defaultProps = {
  // eslint-disable-next-line
  onClick: (): void => {},
};
