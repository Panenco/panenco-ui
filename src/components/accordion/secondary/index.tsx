import * as React from 'react';
import { Icon, Text } from 'components';
import AnimatedHeight from 'react-animate-height';
import cx from 'classnames';

import { useAccordion } from 'components/accordion/useAccordion';
import { useTheme } from 'styled-components';
import { idGenerator } from 'utils/helpers';
import { AccordionProps } from '../types';
import { StyledAccordionSecondary } from './style';

export const AccordionSecondary = React.forwardRef((props: AccordionProps, ref: any): JSX.Element => {
  const {
    className,
    title = 'Title',
    children,
    icons: iconsProp,
    iconRight,
    iconLeft = true,
    onIconClick,
    shouldRotateIcon = true,
    ...otherProps
  } = props;
  const theme = useTheme();
  const { combinedRef, handleClick, isOpen } = useAccordion({ ref, ...otherProps });
  const handleIconClick = (e: React.UIEvent): void => {
    e.persist();
    e.stopPropagation();

    onIconClick(e);
  };

  const checkTypeIconRight = typeof iconRight === 'boolean';
  const checkTypeIconLeft = typeof iconLeft === 'boolean';
  return (
    <StyledAccordionSecondary {...otherProps} ref={combinedRef} className={cx(className, 'accordion')}>
      <button type='button' className='accordionHeader' onClick={handleClick} aria-expanded={isOpen || 'false'}>
        {iconLeft && (
          <Icon
            className={cx(
              'accordionHeaderIcon',
              shouldRotateIcon && isOpen ? 'accordionHeaderIconOpen' : 'accordionHeaderIconClosed',
            )}
            size='sm'
            icon={checkTypeIconLeft ? 'chevronRight' : iconLeft}
          />
        )}
        {typeof title === 'string' ? (
          <Text weight={theme.typography.weights.bold} className='accordionHeaderTitle'>
            {title}
          </Text>
        ) : (
          title
        )}

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
    </StyledAccordionSecondary>
  );
});

AccordionSecondary.defaultProps = {
  // eslint-disable-next-line
  onClick: (): void => {},
};
