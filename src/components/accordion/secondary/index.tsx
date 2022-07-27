import * as React from 'react';
import { Icon, Text } from 'components';
import AnimatedHeight from 'react-animate-height';
import cx from 'classnames';
import { useAccordion } from 'components/accordion/useAccordion';
import { AccordionProps } from 'utils/types';
import { useTheme } from 'utils/hooks';
import { idGenerator } from 'utils/helpers';
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
  const { combinedRef, handleClick, isOpen } = useAccordion({ ref, theme, ...otherProps });
  const handleIconClick = (e: React.UIEvent): void => {
    e.persist();
    e.stopPropagation();

    onIconClick(e);
  };

  const checkTypeIconRight = typeof iconRight === 'boolean';
  const checkTypeIconLeft = typeof iconLeft === 'boolean';

  // const formRef = React.useRef<HTMLButtonElement | null>(null);

  return (
    <StyledAccordionSecondary {...otherProps} ref={combinedRef} theme={theme} className={cx(className, 'accordion')}>
      <button type='button' className='accordionHeader' onClick={handleClick} aria-expanded={isOpen || 'false'}>
        {iconLeft && (
          <Icon
            className={cx(
              'accordionHeaderIcon',
              shouldRotateIcon && isOpen ? 'accordionHeaderIconOpen' : 'accordionHeaderIconClosed',
            )}
            icon={checkTypeIconLeft ? Icon.icons.chevronRight : iconLeft}
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
            icon={checkTypeIconRight ? (isOpen ? Icon.icons.minus : Icon.icons.plus) : iconRight} // eslint-disable-line
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
