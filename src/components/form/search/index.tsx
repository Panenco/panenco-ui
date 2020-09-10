import * as React from 'react';
import * as cx_ from 'classnames';
import { Icon } from 'components/icon';

const cx = cx_;
import s from './styles.scss';

interface Props {
  className?: string,
  placeholder?: string,
  onChange: (value: any) => any,
  disabled?: boolean,
}

class Search extends React.Component<Props, {}> {
  state = {
    isOpen: false
  }

  handleSearchOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { className, placeholder, onChange, disabled } = this.props;
    const { isOpen } = this.state;
    return (
      <div className={cx(s.searchWrapper, disabled && s.searchWrapperDisabled)}>
        {isOpen ? (
          <div className={cx(s.search, className)}>
            <button type="button" onClick={this.handleSearchOpen}>
              <Icon className={cx(s.searchIcon, s.searchIconActive)} icon={Icon.icons.search} />
            </button>
            <div className={s.searchContainer}>
              <input
                type="search"
                className={s.searchContainerInput}
                placeholder={placeholder}
                onChange={e => onChange(e.target.value)}
              />
              <button
                type="button"
                onClick={() => {
                  this.handleSearchOpen();
                  return onChange(null);
                }}
              >
                <Icon className={s.searchContainerIcon} icon={Icon.icons.close} />
              </button>
            </div>
          </div>
        ) : (
          <button type="button" onClick={this.handleSearchOpen}>
            <Icon className={s.searchIcon} icon={Icon.icons.search} />
          </button>
        )}
      </div>
    );
  }
}

export { Search };
