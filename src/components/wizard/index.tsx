import * as React from 'react';
import { useMode, useTheme } from 'utils/hooks';
import { Text } from 'components';
import cx from 'classnames';
import { Icon } from 'components/icon';
import { StyledWizard } from './style';

export interface WizardTrackProps extends React.HTMLAttributes<HTMLDivElement> {
  currentStepIndex?: number | string;
  stepsMeta?: any;
}
const steps = [
  {
    title: 'General info',
    stepIndex: 0,
  },
  {
    title: 'Data sources',
    stepIndex: 1,
  },
  {
    title: 'Loooooooong Title',
    stepIndex: 2,
  },
];

export const WizardTrack = ({ stepsMeta = steps, currentStepIndex = 0, ...props }: WizardTrackProps): JSX.Element => {
  const theme = useTheme();
  const { mode } = useMode();

  // const passed = Number(currentStep) > Number(step);
  const disabled = Number(stepsMeta?.length - 1) > Number(currentStepIndex);

  return (
    <StyledWizard theme={theme} mode={mode} disabled={disabled} {...props}>
      {stepsMeta?.map((step, idx) => {
        return (
          <div
            key={step.stepIndex}
            className={cx(
              'wizzardStep',
              idx === 0 && 'wizzardStepFirst',
              idx < currentStepIndex && 'wizzardStepPassed',
              idx === currentStepIndex && 'wizzardStepActive',
            )}
          >
            <div className="wizzardStepBox">
              <div className="wizzardStepBoxOne">
                {idx > 0 && <div className="wizzardStepBoxOneLine" />}
                <Text size={theme.typography.sizes.xs} className="wizzardStepBoxOneCurrStep">
                  {idx < currentStepIndex ? <Icon icon={Icon.icons.check} width={10} height={10} /> : idx + 1}
                </Text>
              </div>
              <div className="wizzardStepBoxTwo">
                <Text
                  className="wizzardStepBoxCurrTitle"
                  size={theme.typography.sizes.xs}
                  weight={theme.typography.weights.bold}
                >
                  {step.title}
                </Text>
              </div>
            </div>
          </div>
        );
      })}
    </StyledWizard>
  );
};
