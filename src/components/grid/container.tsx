import * as React from 'react';

import { Container } from './style';

type Props = React.HTMLAttributes<HTMLDivElement>;

export const GridContainer: React.FC<Props> = ({ className, children, ...props }: Props): JSX.Element => {
  return (
    <Container {...props} className={className}>
      {children}
    </Container>
  );
};
