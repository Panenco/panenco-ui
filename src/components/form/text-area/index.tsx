import * as React from 'react';
import cx from 'classnames';

import { Text } from 'components';
import { useTheme } from 'utils/hooks';
import { useCombinedRefs } from 'utils/hooks/combinedrefs';
import { InputComponent, WrapperProps } from '../../../utils/types';
import { StyledTextArea } from './style';

interface InputPropsType extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  [key: string]: any;
}

export interface TextAreaProps extends InputComponent, React.InputHTMLAttributes<HTMLTextAreaElement> {
  inputProps?: InputPropsType;
  // will be removed in next versions
  inputRef?: React.Ref<any>;
  wrapperProps?: WrapperProps;
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
      inputRef,
      placeholder = '',
      ...props
    }: TextAreaProps,
    ref,
  ): JSX.Element => {
    const [counter, setCounter] = React.useState(0);
    const textareaRef = React.createRef() as any;
    const useCombinedrefs = useCombinedRefs(textareaRef, inputRef);

    React.useEffect(() => {
      useCombinedrefs.current = textareaRef.current;
    });

    const recalculateHeight = (newValue?: string): void => {
      const textareaElement = useCombinedrefs?.current;
      if (textareaElement) {
        textareaElement.style.height = 'inherit';
        const computed = window.getComputedStyle(textareaElement);
        const height = textareaElement.scrollHeight + parseInt(computed.getPropertyValue('border-width'), 10) * 2;

        textareaElement.style.height = `${height}px`;

        if (newValue?.length) {
          setCounter(newValue.length);
        }
      }
    };

    React.useEffect(() => {
      recalculateHeight();
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
      recalculateHeight(event.target.value);

      if (onChange) onChange(event);
    };

    const theme = useTheme();

    const createAriaLabel = () => {
      let label = '';
      if (title) label += title;
      if (subTitle) label += subTitle;
      return label;
    };

    return (
      <StyledTextArea className={cx('textArea', className)} error={error} theme={theme} ref={ref} {...wrapperProps}>
        {title && (
          <Text weight={theme.typography.weights.bold} size={theme.typography.sizes.m} className='title'>
            {title}
          </Text>
        )}
        {subTitle && (
          <Text size={theme.typography.sizes.xs} className='subtitle'>
            {subTitle}
          </Text>
        )}

        <div className='withErrorWrapper'>
          <div className='withErrorWrapperContent'>
            <textarea
              aria-label={createAriaLabel()}
              className={cx('input', error && 'inputError', disabled && 'inputDisabled')}
              ref={useCombinedrefs}
              onChange={handleChange}
              maxLength={maxLength}
              placeholder={placeholder}
              disabled={disabled}
              {...inputProps}
              {...props}
            />

            {error || maxLength ? (
              <div className='counterWrapper'>
                <Text
                  component='span'
                  size={theme.typography.sizes.xs}
                  color={theme.colors.error}
                  className={error ? 'errorLabel' : 'hidden'}
                >
                  {error}
                </Text>
                {maxLength && (
                  <Text
                    component='span'
                    size={theme.typography.sizes.xs}
                    color={theme.colors.base700}
                    className='counter'
                  >
                    {counter}/{maxLength}
                  </Text>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </StyledTextArea>
    );
  },
);
