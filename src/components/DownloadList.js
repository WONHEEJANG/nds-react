import React from 'react';

const DownloadList = ({ items = [] }) => {
  const handleDownload = (item) => {
    console.log('Download:', item.title);
    // 실제 다운로드 로직 구현
  };

  const handleView = (item) => {
    console.log('View:', item.title);
    // 실제 보기 로직 구현
  };

  return (
    <div className="download">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div>{item.title}</div>
            <div>
              <button 
                type="button" 
                title={item.title}
                className="down-btn"
                onClick={() => handleDownload(item)}
              >
                <span className="hide">다운로드</span>
              </button>
              <button 
                type="button" 
                title={item.title}
                aria-haspopup="true" 
                className="go-link"
                onClick={() => handleView(item)}
              >
                <span className="hide">바로보기</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DownloadList; 