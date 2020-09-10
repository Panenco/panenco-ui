import * as React from 'react';
import { Icon, Text } from 'components';
import AnimatedHeight from 'react-animate-height';
import cx from 'classnames';
import { useAccordion } from 'components/accordion/useAccordion';
import { AccordinProps } from 'utils/types';
import { useTheme, useMode } from 'utils/hooks';
import { idGenerator } from 'utils/helpers';
import { StyledAccordionPrimary } from './style';

export const AccordionPrimary = React.forwardRef(
  (props: AccordinProps, ref: any): JSX.Element => {
    const {
      className,
      title = 'Title',
      children,
      onClick,
      icons: iconsProp,
      iconRight,
      iconLeft,
      onIconClick,
      ...otherProps
    } = props;
    const theme = useTheme();
    const { mode } = useMode();
    const { combinedRef, handleClick, isOpen } = useAccordion({ ref, onClick, mode, theme, ...otherProps });
    const handleIconClick = (e: React.UIEvent): void => {
      e.persist();
      e.stopPropagation();

      onIconClick(e);
    };

    const checkTypeIconRight = typeof iconRight === 'boolean';
    const checkTypeIconLeft = typeof iconLeft === 'boolean';

    return (
      <StyledAccordionPrimary
        ref={combinedRef}
        theme={theme}
        mode={mode}
        className={cx(className, 'accordion')}
        {...otherProps}
      >
        <button type="button" className="accordionHeader" onClick={handleClick} aria-expanded={isOpen || 'false'}>
          {iconLeft && (
            <Icon
              className={cx(
                'accordionHeaderIconLeft',
                isOpen ? 'accordionHeaderIconLeftOpen' : 'accordionHeaderIconLeftClosed',
              )}
              icon={checkTypeIconLeft ? Icon.icons.chevronRight : iconLeft}
            />
          )}
          <Text weight={theme.typography.weights.bold} className="accordionHeaderTitle">
            {title}
          </Text>
          {iconsProp &&
            iconsProp.map((item) => (
              <Icon
                key={idGenerator()}
                onClick={onIconClick && handleIconClick}
                className="accordionHeaderIconsIcon"
                icon={item}
              />
            ))}
          {iconRight && (
            <Icon
              key={idGenerator()}
              className="accordionHeaderIcon"
              icon={checkTypeIconRight ? (isOpen ? Icon.icons.minus : Icon.icons.add) : iconRight} // eslint-disable-line
            />
          )}
        </button>
        <AnimatedHeight duration={500} height={isOpen ? 'auto' : 0}>
          <div className="accordionContent">{children}</div>
        </AnimatedHeight>
      </StyledAccordionPrimary>
    );
  },
);

AccordionPrimary.defaultProps = {
  // eslint-disable-next-line
  onClick: (): void => {},
};
