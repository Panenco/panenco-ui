import * as React from 'react';
import * as cx_ from 'classnames';
// import { colors } from 'styles';
import { Text } from '../../text';
import s from './styles.scss';

const cx = cx_;

interface Props {
  className?: string;
  isTable?: boolean;
}

const EmptyContent: React.FunctionComponent<Props> = (props: Props) => {
  const { className, isTable } = props;
  return (
    <div {...props} className={cx(s.tableEmptyContent, isTable && s.tableEmptyTable, className)}>
      <div className={s.tableEmptyContentTitle}>
        <Text>There are nothing found on this search request.</Text>
      </div>
      <div className={s.tableEmptyContentSubtitle}>
        <Text>- Try entering another request;</Text>
        <Text>- Make sure there are no grammatical errors in the titles.</Text>
      </div>
    </div>
  );
};

export { EmptyContent };
