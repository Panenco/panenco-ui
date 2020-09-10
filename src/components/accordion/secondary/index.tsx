import * as React from 'react';
import { Icon, Text } from 'components';
import AnimatedHeight from 'react-animate-height';
import cx from 'classnames';
import { useAccordion } from 'components/accordion/useAccordion';
import { AccordinProps } from 'utils/types';
import { useTheme, useMode } from 'utils/hooks';
import { idGenerator } from 'utils/helpers';
import { StyledAccordionSecondary } from './style';

export const AccordionSecondary = React.forwardRef(
  (props: AccordinProps, ref: any): JSX.Element => {
    const {
      className,
      title = 'Title',
      children,
      icons: iconsProp,
      iconRight,
      iconLeft = true,
      onIconClick,
      ...otherProps
    } = props;
    const theme = useTheme();
    const { mode } = useMode();
    const { combinedRef, handleClick, isOpen } = useAccordion({ ref, theme, mode, ...otherProps });
    const handleIconClick = (e: React.UIEvent): void => {
      e.persist();
      e.stopPropagation();

      onIconClick(e);
    };

    return (
      <StyledAccordionSecondary
        {...otherProps}
        ref={combinedRef}
        theme={theme}
        mode={mode}
        className={cx(className, 'accordion')}
      >
        <button type="button" className="accordionHeader" onClick={handleClick} aria-expanded={isOpen || 'false'}>
          {iconLeft && (
            <Icon
              className={cx('accordionHeaderIcon', isOpen ? 'accordionHeaderIconOpen' : 'accordionHeaderIconClosed')}
              icon={Icon.icons.chevronRight}
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
              icon={isOpen ? Icon.icons.minus : Icon.icons.add}
            />
          )}
        </button>
        <AnimatedHeight duration={500} height={isOpen ? 'auto' : 0}>
          <div className="accordionContent">{children}</div>
        </AnimatedHeight>
      </StyledAccordionSecondary>
    );
  },
);

AccordionSecondary.defaultProps = {
  // eslint-disable-next-line
  onClick: (): void => {},
};
