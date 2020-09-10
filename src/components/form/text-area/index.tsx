import * as React from 'react';
import cx from 'classnames';
import { Icon, Text } from 'components';
import { useTheme, useMode } from 'utils/hooks';
import { InputComponent, WrapperProps } from 'utils/types';
import { useCombinedRefs } from 'utils/hooks/combinedrefs';
import { StyledTextArea } from './style';

interface InputPropsType extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  [key: string]: any;
  ref?: React.Ref<HTMLTextAreaElement>;
}

export interface TextAreaProps extends InputComponent, React.InputHTMLAttributes<HTMLTextAreaElement> {
  wrapperProps?: WrapperProps;
  inputProps?: InputPropsType; // will be removed in next versions
}

export const TextArea = React.forwardRef<HTMLDivElement, TextAreaProps>(
  (
    {
      className,
      maxLength,
      title,
      subTitle,
      disabled,
      error,
      onChange,
      wrapperProps,
      inputProps,
      placeholder = 'Placeholder',
      ...props
    },
    ref,
  ): JSX.Element => {
    const [counter, setCounter] = React.useState(0);
    const textareaRef = React.createRef() as any;
    const useCombinedrefs = useCombinedRefs(textareaRef, inputProps?.ref);

    React.useEffect(() => {
      useCombinedrefs.current = textareaRef.current;
    });

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
      const textareaElement = useCombinedrefs?.current;
      if (textareaElement) {
        textareaElement.style.height = 'inherit';
        const computed = window.getComputedStyle(textareaElement);
        const height = textareaElement.scrollHeight + parseInt(computed.getPropertyValue('border-width'), 10) * 2;

        textareaElement.style.height = `${height}px`;
        setCounter(event.target.value.length);
      }

      if (onChange) onChange(event);
    };

    const theme = useTheme();
    const { mode } = useMode();

    const createAriaLabel = () => {
      let label = '';
      if (title) label += title;
      if (subTitle) label += subTitle;
      return label;
    };

    return (
      <StyledTextArea
        className={cx('textArea', wrapperProps?.className)}
        error={error}
        theme={theme}
        mode={mode}
        ref={ref}
        {...wrapperProps}
      >
        {title && (
          <Text weight={theme.typography.weights.bold} size={theme.typography.sizes.s} className="title">
            {title}
          </Text>
        )}
        {subTitle && (
          <Text size={theme.typography.sizes.xs} className="subtitle">
            {subTitle}
          </Text>
        )}

        <div className="withErrorWrapper">
          <div className="withErrorWrapperContent">
            <textarea
              aria-label={createAriaLabel()}
              className={cx('input', error && 'inputError', disabled && 'inputDisabled', className)}
              ref={useCombinedrefs}
              onChange={handleChange}
              maxLength={maxLength}
              placeholder={placeholder}
              disabled={disabled}
              {...inputProps}
              {...props}
            />

            <div className="counterWrapper">
              <span className={error ? 'errorLabel' : 'hidden'}>{error}</span>
              {maxLength && (
                <span className="counter">
                  {counter}/{maxLength}
                </span>
              )}
            </div>
          </div>

          {error && <Icon className="withErrorWrapperIcon" icon={Icon.icons.close} />}
        </div>
      </StyledTextArea>
    );
  },
);
