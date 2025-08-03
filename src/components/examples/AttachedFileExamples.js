import React from 'react';
import { AttachedFileList, AttachedFileThumbnail } from '../AttachedFile';

const AttachedFileExamples = ({ attachedFiles, handleRemoveFile, handleAddFile }) => {
  return (
    <div className="component-section">
      <h2 className="component-title">Attached File Components</h2>
      
      {/* List Type - 1line */}
      <div className="component-section">
        <h3 className="component-subtitle">Attached File - List Type (1line)</h3>
        <AttachedFileList
          files={[{ name: '파일명' }]}
          onRemove={handleRemoveFile}
        />
      </div>

      {/* List Type - 2line */}
      <div className="component-section">
        <h3 className="component-subtitle">Attached File - List Type (2line)</h3>
        <AttachedFileList
          files={[
            { name: '파일명1' },
            { name: '파일명2' }
          ]}
          onRemove={handleRemoveFile}
        />
      </div>

      {/* List Type - 3line */}
      <div className="component-section">
        <h3 className="component-subtitle">Attached File - List Type (3line)</h3>
        <AttachedFileList
          files={[
            { name: '파일명1' },
            { name: '파일명2' },
            { name: '파일명3' }
          ]}
          onRemove={handleRemoveFile}
        />
      </div>

      {/* List Type - 4line */}
      <div className="component-section">
        <h3 className="component-subtitle">Attached File - List Type (4line)</h3>
        <AttachedFileList
          files={[
            { name: '파일명1' },
            { name: '파일명2' },
            { name: '파일명3' },
            { name: '파일명4' }
          ]}
          onRemove={handleRemoveFile}
        />
      </div>

      {/* List Type - 5line */}
      <div className="component-section">
        <h3 className="component-subtitle">Attached File - List Type (5line)</h3>
        <AttachedFileList
          files={[
            { name: '파일명1' },
            { name: '파일명2' },
            { name: '파일명3' },
            { name: '파일명4' },
            { name: '파일명5' }
          ]}
          onRemove={handleRemoveFile}
        />
      </div>

      {/* Thumbnail Type - default */}
      <div className="component-section">
        <h3 className="component-subtitle">Attached File - Thumbnail Type (default)</h3>
        <AttachedFileThumbnail
          files={[]}
          maxCount={0}
          currentCount={0}
          onAdd={handleAddFile}
        />
      </div>

      {/* Thumbnail Type - disabled */}
      <div className="component-section">
        <h3 className="component-subtitle">Attached File - Thumbnail Type (disabled)</h3>
        <AttachedFileThumbnail
          files={[]}
          maxCount={0}
          currentCount={0}
          disabled={true}
        />
      </div>

      {/* Thumbnail Type - filled */}
      <div className="component-section">
        <h3 className="component-subtitle">Attached File - Thumbnail Type (filled)</h3>
        <AttachedFileThumbnail
          files={[{ name: '이미지', url: './assets/imgs/nds/common/img_nh-golf_58.png' }]}
          onRemove={handleRemoveFile}
        />
      </div>

      {/* Component Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Component Examples</h3>
        <AttachedFileList 
          files={attachedFiles}
          onRemove={handleRemoveFile}
        />
        <AttachedFileThumbnail 
          files={[]}
          maxCount={5}
          currentCount={0}
          onAdd={handleAddFile}
        />
      </div>
    </div>
  );
};

export default AttachedFileExamples; 