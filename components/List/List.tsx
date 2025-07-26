import React from 'react';

export interface ListItem {
  id: string;
  title: string;
  subtitle?: string;
  value?: string;
  bankCode?: string;
  accountNumber?: string;
  isFavorite?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export interface ListProps {
  items: ListItem[];
  variant?: 'account' | 'basic' | 'finance' | 'general' | 'graybox';
  type?: 'card-lg' | 'card-sm' | 'default';
  lines?: 1 | 2 | 3 | 4 | 5;
  selectable?: boolean;
  onItemClick?: (item: ListItem) => void;
  onFavoriteToggle?: (itemId: string, isFavorite: boolean) => void;
  className?: string;
}

export const List: React.FC<ListProps> = ({
  items,
  variant = 'basic',
  type = 'default',
  lines = 1,
  selectable = false,
  onItemClick,
  onFavoriteToggle,
  className = '',
}) => {
  const containerClasses = ['selection'];
  if (variant === 'account') containerClasses.push('remittance');
  
  const finalClassName = [containerClasses.join(' '), className].filter(Boolean).join(' ');

  const handleItemClick = (item: ListItem) => {
    if (!item.disabled) {
      item.onClick?.();
      onItemClick?.(item);
    }
  };

  const handleFavoriteToggle = (itemId: string, currentFavorite: boolean) => {
    onFavoriteToggle?.(itemId, !currentFavorite);
  };

  const renderAccountItem = (item: ListItem) => (
    <>
      <button
        type="button"
        data-bankcode={item.bankCode}
        className="info"
        onClick={() => handleItemClick(item)}
        disabled={item.disabled}
      >
        <span className="name">
          <span>{item.title}</span>
        </span>
        <span className="account-number">
          <span className="number">{item.accountNumber}</span>
        </span>
      </button>
      {onFavoriteToggle && (
        <div className="list-settings">
          <div className="setting -favorite">
            <input
              type="checkbox"
              id={`favorite-${item.id}`}
              className="favorite-input"
              checked={item.isFavorite || false}
              onChange={() => handleFavoriteToggle(item.id, item.isFavorite || false)}
            />
            <label htmlFor={`favorite-${item.id}`} className="favorite-label">
              <span className="hide">즐겨찾기</span>
            </label>
          </div>
        </div>
      )}
    </>
  );

  const renderBasicItem = (item: ListItem) => (
    <button
      type="button"
      className="info"
      onClick={() => handleItemClick(item)}
      disabled={item.disabled}
    >
      <span className="name">
        <span>{item.title}</span>
      </span>
      {item.subtitle && (
        <span className="sub-info">
          <span>{item.subtitle}</span>
        </span>
      )}
      {item.value && (
        <span className="value">
          <span>{item.value}</span>
        </span>
      )}
    </button>
  );

  return (
    <div className={finalClassName}>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {variant === 'account' ? renderAccountItem(item) : renderBasicItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;