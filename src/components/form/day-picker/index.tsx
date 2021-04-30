import cx from 'classnames';
import { Icon, PrimaryButton, TextInput } from 'components';
import * as React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DayPickerInputProps } from 'react-day-picker/types/Props';
import { useMode, useTheme } from 'utils/hooks';

import { WrapperProps } from '../../../utils/types';
import { StyledDayPicker } from './style';

const WEEKDAYS_SHORT = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

// import { DayPicker as DayPickerComponent } from 'react-day-picker';

// const cx = cx_;

// import DayPicker from "../../../../node_modules/react-day-picker/types"

export interface PickerProps extends DayPickerInputProps {
  iconBefore?: HTMLObjectElement | JSX.Element;
  iconAfter?: HTMLObjectElement | JSX.Element;
  inputRef?: React.Ref<any>;
  wrapperProps?: WrapperProps;
  // inputProps?: InputPropsType; // will be removed in next versions
}

function OverlayComponent({ children, ...props }) {
  return (
    <div className="overlay" {...props}>
      {children}
      <div className="footer">
        <TextInput title="Time" iconAfter={Icon.icons.clock} />
        <PrimaryButton className="submitTime">Save</PrimaryButton>
      </div>
    </div>
  );
}

export const DayPicker = React.forwardRef<HTMLDivElement, PickerProps>(
  (
    {
      // className,
      // type = 'text',
      // title,
      // subTitle,
      // iconBefore,
      // iconAfter,
      // disabled,
      // error,
      // wrapperProps,
      inputProps,
      placeholder = '',
      // inputRef,
      ...props
    }: DayPickerInputProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();

    return (
      <StyledDayPicker
        className={cx('dayPickerInput')}
        // error={error}
        theme={theme}
        mode={mode}
        ref={ref}
        // {...wrapperProps}
      >
        <DayPickerInput
          className="wrapper"
          showOverlay
          hideOnDayClick={false}
          // showOutsideDays
          // keepFocus
          overlayComponent={OverlayComponent}
          dayPickerProps={{
            weekdaysShort: WEEKDAYS_SHORT,

            firstDayOfWeek: 0,
          }}
          // selectedDay={new Date()}
          component={(props) => <TextInput {...props} />}
          // overlayComponent={this.overlayComponent}
          // disabledDays={disabledDaysFrom}
          // onDayClick={this.handleFromDayClick}
          // navbarElement={(month) => <Navbar currentMonth={month} />}
          // selectedDays={selectedDays}
          // modifiers={modifiers}
          // month={from}
        />
      </StyledDayPicker>
    );
  },
);

// class DayPicker extends React.Component<Props, {}> {
//   constructor(props) {
//     super(props);
//     this.handleFromDayClick = this.handleFromDayClick.bind(this);
//     // // this.handleToDayClick = this.handleToDayClick.bind(this);
//     this.state = {
//       fromIsOpen: false,
//       toIsOpen: false,
//       // from: props.value[props.fromName] ? parseISO(props.value[props.fromName]) : null,
//       // to: props.value[props.toName] ? parseISO(props.value[props.toName]) : null,
//       time: { from: this.transformTime(), to: this.transformTime() },
//       tempFrom: null,
//       tempTo: null,
//     };
//   }

//   // componentDidUpdate(prevProps, prevState) {
//   //   const { setFieldValue } = this.props;
//   //   const { from, to } = this.state;
//   //   if (prevState.from !== from) {
//   //     setFieldValue('startDate', from);
//   //   }
//   //   if (prevState.to !== to) {
//   //     setFieldValue('endDate', to);
//   //   }
//   // }

//   transformTime = () => {
//     const date = new Date();
//     const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
//     const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
//     return `${hours}:${minutes}`;
//   };

//   // handleOpenFromPicker = () => {
//   //   this.setState((prevState) => ({
//   //     fromIsOpen: !prevState.fromIsOpen,
//   //   }));
//   // };

//   // handleOpenToPicker = () => {
//   //   this.setState((prevState) => ({
//   //     toIsOpen: !prevState.toIsOpen,
//   //     fromIsOpen: false,
//   //   }));
//   // };

//   // handleSetTime = (e) => {
//   //   const { value, name } = e.target;
//   //   if (!value.includes('_')) {
//   //     this.setState((prevState) => ({ ...prevState, time: { ...prevState.time, [name]: value } }));
//   //   }
//   // };

//   // handleSubmitFrom = () => {
//   //   const { tempFrom, time, to, tempTo } = this.state;
//   //   const newTempFrom = setHours(setMinutes(tempFrom, time.from.slice(-2)), time.from.slice(0, 2));
//   //   if (time.from && tempFrom && (!isPast(newTempFrom) || isSameMinute(newTempFrom, new Date()))) {
//   //     if (to && isAfter(newTempFrom, to)) {
//   //       this.setState({ to: null, tempTo: null });
//   //     }

//   //     this.setState({ from: newTempFrom });
//   //     this.handleOpenFromPicker();
//   //     this.handleOpenToPicker();
//   //   }
//   // };

//   // handleSubmitTo = () => {
//   //   const { tempTo, time } = this.state;
//   //   const newTempTo = setHours(setMinutes(tempTo, time.to.slice(-2)), time.to.slice(0, 2));

//   //   if (time.to && tempTo) {
//   //     this.setState({ to: newTempTo });
//   //     this.handleOpenToPicker();
//   //   }
//   // };

//   handleFromDayClick(day) {
//     if (isAfter(day, endOfYesterday())) {
//       this.setState({
//         tempFrom: day,
//       });
//     }
//   }

//   // handleToDayClick(day) {
//   //   const { from } = this.state;
//   //   if (isSameDay(day, from) || isAfter(day, from)) {
//   //     this.setState({
//   //       tempTo: day,
//   //     });
//   //   }
//   // }

//   overlayComponent = ({ children, ...props }) => {
//     return (
//       <StyledDayPicker {...props}>
//         <p>My custom things</p>
//         /* include the calendar */
//         {children}
//         <p>Some content below the calendar</p>
//       </StyledDayPicker>
//     );
//   };
//   render() {
//     return (
//       <div className={s.dayPicker}>
//         <div className={s.dayPickerContent}>
//           <Text className={s.dayPickerContentLabel}>Start date</Text>
//           {true && (
//             <div className={s.dayPickerContentBlock}>
//               <DayPickerInput
//                 showOverlay
//                 component={(props) => <TextInput {...props} />}
//                 overlayComponent={this.overlayComponent}
//                 // disabledDays={disabledDaysFrom}
//                 // onDayClick={this.handleFromDayClick}
//                 // navbarElement={(month) => <Navbar currentMonth={month} />}
//                 // selectedDays={selectedDays}
//                 // modifiers={modifiers}
//                 // month={from}
//               />
//               <div className={s.dayPickerContentFooter}>
//                 <div>
//                   <Text className={s.dayPickerContentFooterLabel}>Start time:</Text>
//                   {/* <ReactMaskInput
//                     className={s.dayPickerContentFooterInput}
//                     mask={[/[0-2]/, /[0-9]/, ':', /[0-5]/, /[0-9]/]}
//                     placeholder="--:--"
//                     pipe={createAutoCorrectedDatePipe('HH:MM')}
//                     onChange={this.handleSetTime}
//                     value={time.from}
//                     name="from"
//                   /> */}
//                   <Icon icon={Icon.icons.clock} className={s.dayPickerContentFooterIcon} />
//                 </div>
//                 <Button className={s.dayPickerContentFooterButton} onClick={() => {}}>
//                   Save
//                 </Button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// export { DayPicker };
