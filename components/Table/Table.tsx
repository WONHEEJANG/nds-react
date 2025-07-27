import React from 'react';

export type TableAlign = 'left' | 'center' | 'right';
export type TableSize = 'sm' | 'md' | 'lg';
export type TableVariant = 'default' | 'striped' | 'bordered';

export interface TableColumn {
  key: string;
  title: string;
  align?: TableAlign;
  width?: string | number;
  render?: (value: any, record: any, index: number) => React.ReactNode;
}

export interface TableProps {
  /** 테이블 제목 */
  caption?: string;
  /** 숨김 제목 (접근성용) */
  hiddenCaption?: boolean;
  /** 컬럼 정의 */
  columns: TableColumn[];
  /** 데이터 */
  data: any[];
  /** 테이블 변형 */
  variant?: TableVariant;
  /** 크기 */
  size?: TableSize;
  /** 행 선택 가능 여부 */
  selectable?: boolean;
  /** 선택된 행 키들 */
  selectedRowKeys?: string[];
  /** 행 선택 변경 이벤트 */
  onRowSelectionChange?: (selectedRowKeys: string[], selectedRows: any[]) => void;
  /** 행 클릭 이벤트 */
  onRowClick?: (record: any, index: number) => void;
  /** 빈 데이터 표시 내용 */
  emptyContent?: React.ReactNode;
  /** 로딩 상태 */
  loading?: boolean;
  /** CSS 클래스명 */
  className?: string;
}

export const Table: React.FC<TableProps> = ({
  caption,
  hiddenCaption = false,
  columns,
  data = [],
  variant = 'default',
  size = 'md',
  selectable = false,
  selectedRowKeys = [],
  onRowSelectionChange,
  onRowClick,
  emptyContent = '데이터가 없습니다.',
  loading = false,
  className = '',
}) => {
  const getTableClasses = () => {
    const classes = ['table'];
    
    if (variant === 'striped') {
      classes.push('table-striped');
    } else if (variant === 'bordered') {
      classes.push('table-bordered');
    }
    
    if (size !== 'md') {
      classes.push(`table-${size}`);
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  const getRowKey = (record: any, index: number): string => {
    return record.id || record.key || index.toString();
  };

  const isRowSelected = (record: any, index: number): boolean => {
    const rowKey = getRowKey(record, index);
    return selectedRowKeys.includes(rowKey);
  };

  const handleRowSelection = (record: any, index: number, checked: boolean) => {
    if (!onRowSelectionChange) return;
    
    const rowKey = getRowKey(record, index);
    let newSelectedRowKeys: string[];
    let newSelectedRows: any[];
    
    if (checked) {
      newSelectedRowKeys = [...selectedRowKeys, rowKey];
      newSelectedRows = data.filter((item, idx) => 
        newSelectedRowKeys.includes(getRowKey(item, idx))
      );
    } else {
      newSelectedRowKeys = selectedRowKeys.filter(key => key !== rowKey);
      newSelectedRows = data.filter((item, idx) => 
        newSelectedRowKeys.includes(getRowKey(item, idx))
      );
    }
    
    onRowSelectionChange(newSelectedRowKeys, newSelectedRows);
  };

  const handleSelectAll = (checked: boolean) => {
    if (!onRowSelectionChange) return;
    
    if (checked) {
      const allRowKeys = data.map((record, index) => getRowKey(record, index));
      onRowSelectionChange(allRowKeys, [...data]);
    } else {
      onRowSelectionChange([], []);
    }
  };

  const isAllSelected = () => {
    return data.length > 0 && selectedRowKeys.length === data.length;
  };

  const isIndeterminate = () => {
    return selectedRowKeys.length > 0 && selectedRowKeys.length < data.length;
  };

  const handleRowClick = (record: any, index: number) => {
    if (onRowClick) {
      onRowClick(record, index);
    }
  };

  const getCellContent = (column: TableColumn, record: any, index: number) => {
    const value = record[column.key];
    
    if (column.render) {
      return column.render(value, record, index);
    }
    
    return value ?? '';
  };

  const getCellAlign = (column: TableColumn): TableAlign => {
    return column.align || 'left';
  };

  const getCellStyle = (column: TableColumn): React.CSSProperties => {
    const style: React.CSSProperties = {
      textAlign: getCellAlign(column),
    };
    
    if (column.width) {
      style.width = typeof column.width === 'number' ? `${column.width}px` : column.width;
    }
    
    return style;
  };

  if (loading) {
    return (
      <div className="table-loading" style={{ 
        padding: '40px', 
        textAlign: 'center',
        color: '#666'
      }}>
        로딩 중...
      </div>
    );
  }

  return (
    <div className="table-container">
      <table className={getTableClasses()}>
        {caption && (
          <caption>
            {hiddenCaption ? (
              <span className="hide">{caption}</span>
            ) : (
              caption
            )}
          </caption>
        )}
        
        <thead>
          <tr>
            {selectable && (
              <th scope="col" style={{ width: '40px', textAlign: 'center' }}>
                <input
                  type="checkbox"
                  checked={isAllSelected()}
                  ref={(input) => {
                    if (input) {
                      input.indeterminate = isIndeterminate();
                    }
                  }}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                style={getCellStyle(column)}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td 
                colSpan={columns.length + (selectable ? 1 : 0)}
                style={{ 
                  textAlign: 'center', 
                  padding: '40px 20px',
                  color: '#666'
                }}
              >
                {emptyContent}
              </td>
            </tr>
          ) : (
            data.map((record, index) => (
              <tr
                key={getRowKey(record, index)}
                onClick={() => handleRowClick(record, index)}
                style={{
                  cursor: onRowClick ? 'pointer' : 'default',
                  backgroundColor: isRowSelected(record, index) ? '#f0f7ff' : undefined,
                }}
              >
                {selectable && (
                  <td style={{ textAlign: 'center' }}>
                    <input
                      type="checkbox"
                      checked={isRowSelected(record, index)}
                      onChange={(e) => handleRowSelection(record, index, e.target.checked)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </td>
                )}
                {columns.map((column) => (
                  <td
                    key={column.key}
                    style={getCellStyle(column)}
                  >
                    {getCellContent(column, record, index)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;