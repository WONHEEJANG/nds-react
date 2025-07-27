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
export declare const List: React.FC<ListProps>;
export default List;
//# sourceMappingURL=List.d.ts.map