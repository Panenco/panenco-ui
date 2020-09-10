import * as React from 'react';
import * as cx_ from 'classnames';

const cx = cx_;
import s from './styles.scss';

interface Props {
  className?: string,
  email?: string,
  size?: string,
  src?: string,
  firstName?: string,
  lastName?: string,
}

export const Avatar: React.FunctionComponent<Props> & { sizes: any } = (props: Props): any => {
  const { src, email, firstName, lastName, size, className } = props;
  const contentHandler = () => {
    if (email) {
      return email.charAt(0).toUpperCase();
    }
    if (size !== Avatar.sizes.small) {
      return `${firstName!.charAt(0).toUpperCase()}${lastName!.charAt(0).toUpperCase()}`;
    }
    return `${firstName!.charAt(0).toUpperCase()}`;
  };

  return (
    <div
      {...props}
      className={cx(s.avatar, size, className)}
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      {!src && <div className={s.avatarFallback}>{contentHandler()}</div>}
    </div>
  );
};

Avatar.sizes = {
  huge: s.avatarHuge,
  medium: s.avatarMedium,
  small: s.avatarSmall,
};

Avatar.defaultProps = {
  email: '',
  className: '',
  src: '',
  firstName: 'Valcori',
  lastName: 'User',
  size: '',
};
