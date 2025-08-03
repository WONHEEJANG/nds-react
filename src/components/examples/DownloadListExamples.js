import React from 'react';
import DownloadList from '../DownloadList';

const DownloadListExamples = () => {
  const sampleItems = [
    {
      title: '상품설명서.pdf',
      type: 'pdf',
      size: '2.5MB'
    },
    {
      title: '약관안내.hwp',
      type: 'hwp',
      size: '1.8MB'
    },
    {
      title: '신청서양식.xlsx',
      type: 'excel',
      size: '500KB'
    },
    {
      title: '안내문서.docx',
      type: 'word',
      size: '1.2MB'
    }
  ];

  return (
    <div className="component-section">
      <h2 className="component-title">DownloadList Components</h2>
      
      {/* Basic DownloadList */}
      <div className="component-section">
        <h3 className="component-subtitle">Basic DownloadList</h3>
        <DownloadList items={sampleItems} />
      </div>

      {/* DownloadList with Few Items */}
      <div className="component-section">
        <h3 className="component-subtitle">DownloadList with Few Items</h3>
        <DownloadList items={sampleItems.slice(0, 2)} />
      </div>

      {/* Empty DownloadList */}
      <div className="component-section">
        <h3 className="component-subtitle">Empty DownloadList</h3>
        <DownloadList items={[]} />
      </div>
    </div>
  );
};

export default DownloadListExamples; 