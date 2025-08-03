import React from 'react';

const AttachedFile = ({ 
  type = 'list', 
  files = [], 
  maxCount = 0, 
  currentCount = 0,
  disabled = false,
  onRemove,
  onAdd 
}) => {
  
  const handleRemove = (index) => {
    if (onRemove) {
      onRemove(index);
    }
  };

  const handleAdd = () => {
    if (onAdd && !disabled) {
      onAdd();
    }
  };

  // List 타입 렌더링
  if (type === 'list') {
    return (
      <div className="attached-file-wrap">
        <div className="attached-file-box mr-0">
          {files.map((file, index) => (
            <div key={index} className="list">
              <div className="title">{file.name || '파일명'}</div>
              <button 
                type="button" 
                className="cancel-btn"
                onClick={() => handleRemove(index)}
              >
                <span className="hide">리스트 삭제</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Thumbnail 타입 렌더링
  if (type === 'thumbnail') {
    if (files.length > 0) {
      // Filled 상태 - 이미지가 있는 경우
      return (
        <div className="attached-file-box">
          <div className="thumbnail -filled">
            <img 
              src={files[0].url || "./assets/imgs/nds/common/img_nh-golf_58.png"} 
              alt={files[0].name || "첨부파일"}
            />
            <button 
              type="button" 
              className="cancel-btn"
              onClick={() => handleRemove(0)}
            >
              <span className="hide">사진 삭제</span>
            </button>
          </div>
        </div>
      );
    } else {
      // Default 또는 Disabled 상태
      return (
        <div className="attached-file-box">
          <button 
            type="button" 
            className={`thumbnail ${disabled ? '-disabled' : '-default'}`}
            disabled={disabled}
            onClick={handleAdd}
          >
            <div className="count">
              <span>{currentCount}</span>/<span>{maxCount}</span>
            </div>
          </button>
        </div>
      );
    }
  }

  return null;
};

// 편의를 위한 래퍼 컴포넌트들
export const AttachedFileList = (props) => <AttachedFile type="list" {...props} />;
export const AttachedFileThumbnail = (props) => <AttachedFile type="thumbnail" {...props} />;

export default AttachedFile; 