import React from 'react';
import './attached-file.css';

export interface AttachedFileItem {
  id: string;
  filename: string;
  onDelete?: () => void;
}

export interface AttachedFileProps {
  /** 컴포넌트 타입 */
  type?: 'list' | 'thumbnail';
  /** 리스트 타입인 경우 줄 수 (1~5) */
  lines?: 1 | 2 | 3 | 4 | 5;
  /** 썸네일 상태 */
  thumbnailState?: 'default' | 'disabled' | 'filled';
  /** 파일 목록 (리스트 타입용) */
  files?: AttachedFileItem[];
  /** 썸네일 이미지 (filled 상태용) */
  thumbnailImage?: string;
  /** 썸네일 alt 텍스트 */
  thumbnailAlt?: string;
  /** 카운트 표시 (default/disabled 상태용) */
  count?: {
    current: number;
    total: number;
  };
  /** 썸네일 클릭 이벤트 */
  onThumbnailClick?: () => void;
  /** 썸네일 삭제 이벤트 */
  onThumbnailDelete?: () => void;
  /** CSS 클래스명 */
  className?: string;
}

export const AttachedFile: React.FC<AttachedFileProps> = ({
  type = 'list',
  lines = 1,
  thumbnailState = 'default',
  files = [],
  thumbnailImage,
  thumbnailAlt = '',
  count = { current: 0, total: 0 },
  onThumbnailClick,
  onThumbnailDelete,
  className = '',
}) => {
  const renderListType = () => {
    // 실제 파일 수가 지정된 lines보다 적으면 파일 수만큼, 많으면 lines만큼 표시
    const displayFiles = files.slice(0, lines);
    
    // lines에 맞춰 빈 슬롯을 채워야 하는 경우 기본 파일명으로 채움
    const filesToShow = [...displayFiles];
    while (filesToShow.length < lines) {
      filesToShow.push({
        id: `placeholder-${filesToShow.length}`,
        filename: '파일명',
      });
    }

    return (
      <div className={`attached-file-wrap ${className}`.trim()}>
        <div className="attached-file-box mr-0">
          {filesToShow.map((file, index) => (
            <div key={file.id} className="list">
              <div className="title">{file.filename}</div>
              <button 
                type="button" 
                className="cancel-btn"
                onClick={file.onDelete}
              >
                <span className="hide">리스트 삭제</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderThumbnailType = () => {
    const getThumbnailClasses = () => {
      const classes = ['thumbnail'];
      classes.push(`-${thumbnailState}`);
      return classes.join(' ');
    };

    return (
      <div className={`attached-file-box ${className}`.trim()}>
        {thumbnailState === 'filled' ? (
          <div className={getThumbnailClasses()}>
            <img 
              src={thumbnailImage || './assets/imgs/nds/common/img_nh-golf_58.png'} 
              alt={thumbnailAlt} 
            />
            <button 
              type="button" 
              className="cancel-btn"
              onClick={onThumbnailDelete}
            >
              <span className="hide">사진 삭제</span>
            </button>
          </div>
        ) : (
          <button 
            type="button" 
            className={getThumbnailClasses()}
            onClick={onThumbnailClick}
            disabled={thumbnailState === 'disabled'}
          >
            <div className="count">
              <span>{count.current}</span>/<span>{count.total}</span>
            </div>
          </button>
        )}
      </div>
    );
  };

  if (type === 'thumbnail') {
    return renderThumbnailType();
  }

  return renderListType();
};

export default AttachedFile;