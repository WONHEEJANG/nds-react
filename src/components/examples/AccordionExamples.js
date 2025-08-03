import React from 'react';
import { 
  AccordionBox, 
  AccordionBoxList, 
  AccordionGraybox, 
  AccordionLine, 
  AccordionNotice 
} from '../Accordion';
import DownloadList from '../DownloadList';

const AccordionExamples = ({ accordionStates, handleToggle, downloadItems }) => {
  return (
    <>
      {/* Accordion - box/list - State=close */}
      <div className="component-section">
        <h2 className="component-title">Accordion - box/list - State=close</h2>
        <AccordionBoxList
          title="타이틀"
          subInfo="부가설명"
          badge="라벨"
          isOpen={accordionStates['box-list-close']}
          onToggle={(isOpen) => handleToggle('box-list-close', isOpen)}
        >
          <dl className="dl">
            <div>
              <dt>타이틀</dt>
              <dd>데이터</dd>
            </div>
            <div>
              <dt>타이틀</dt>
              <dd>데이터</dd>
            </div>
            <div>
              <dt>타이틀</dt>
              <dd>데이터</dd>
            </div>
          </dl>
        </AccordionBoxList>
      </div>

      {/* Accordion - box/list - State=open */}
      <div className="component-section">
        <h2 className="component-title">Accordion - box/list - State=open</h2>
        <AccordionBoxList
          title="타이틀"
          subInfo="부가설명"
          badge="라벨"
          isOpen={true}
        >
          <dl className="dl">
            <div>
              <dt>타이틀</dt>
              <dd>데이터</dd>
            </div>
            <div>
              <dt>타이틀</dt>
              <dd>데이터</dd>
            </div>
            <div>
              <dt>타이틀</dt>
              <dd>데이터</dd>
            </div>
          </dl>
        </AccordionBoxList>
      </div>

      {/* Accordion - box/text - State=close */}
      <div className="component-section">
        <h2 className="component-title">Accordion - box/text - State=close</h2>
        <AccordionBox
          title="제목"
          isOpen={accordionStates['box-text-close']}
          onToggle={(isOpen) => handleToggle('box-text-close', isOpen)}
        >
          <div className="dummy">내용</div>
        </AccordionBox>
      </div>

      {/* Accordion - box/text - State=open */}
      <div className="component-section">
        <h2 className="component-title">Accordion - box/text - State=open</h2>
        <AccordionBox
          title="제목"
          isOpen={true}
        >
          <div className="dummy">내용</div>
        </AccordionBox>
      </div>

      {/* Accordion - graybox/basic - State=close */}
      <div className="component-section">
        <h2 className="component-title">Accordion - graybox/basic - State=close</h2>
        <AccordionGraybox
          title="제목"
          isOpen={accordionStates['graybox-close']}
          onToggle={(isOpen) => handleToggle('graybox-close', isOpen)}
        >
          <div className="dummy">내용</div>
        </AccordionGraybox>
      </div>

      {/* Accordion - graybox/basic - State=open */}
      <div className="component-section">
        <h2 className="component-title">Accordion - graybox/basic - State=open</h2>
        <AccordionGraybox
          title="제목"
          isOpen={true}
        >
          <div className="dummy">내용</div>
        </AccordionGraybox>
      </div>

      {/* Accordion - graybox/list - State=close */}
      <div className="component-section">
        <h2 className="component-title">Accordion - graybox/list - State=close</h2>
        <div className="accordion bg-grey" data-role="fold">
          <button 
            type="button" 
            className="title" 
            data-role="marker" 
            title="접힘"
            onClick={() => handleToggle('graybox-list-close', !accordionStates['graybox-list-close'])}
          >
            계약서류 확인
          </button>
          <div className="panel" data-role={accordionStates['graybox-list-close'] ? 'visible' : 'hidden'}>
            <DownloadList items={downloadItems} />
          </div>
        </div>
      </div>

      {/* Accordion - graybox/list - State=open */}
      <div className="component-section">
        <h2 className="component-title">Accordion - graybox/list - State=open</h2>
        <div className="accordion bg-grey -active" data-role="fold">
          <button 
            type="button" 
            className="title" 
            data-role="marker" 
            title="펼쳐짐"
          >
            계약서류 확인
          </button>
          <div className="panel" data-role="visible">
            <DownloadList items={downloadItems} />
          </div>
        </div>
      </div>

      {/* Accordion - line - State=close */}
      <div className="component-section">
        <h2 className="component-title">Accordion - line - State=close</h2>
        <AccordionLine
          title="제목"
          isOpen={accordionStates['line-close']}
          onToggle={(isOpen) => handleToggle('line-close', isOpen)}
        >
          <div className="dummy">내용</div>
        </AccordionLine>
      </div>

      {/* Accordion - line - State=open */}
      <div className="component-section">
        <h2 className="component-title">Accordion - line - State=open</h2>
        <AccordionLine
          title="제목"
          isOpen={true}
        >
          <div className="dummy">내용</div>
        </AccordionLine>
      </div>

      {/* Accordion - notice - State=close */}
      <div className="component-section">
        <h2 className="component-title">Accordion - notice - State=close</h2>
        <AccordionNotice
          title="알아두세요"
          isOpen={accordionStates['notice-close']}
          onToggle={(isOpen) => handleToggle('notice-close', isOpen)}
        >
          <ul className="ul -bullet">
            <li>목록</li>
          </ul>
        </AccordionNotice>
      </div>

      {/* Accordion - notice - State=open */}
      <div className="component-section">
        <h2 className="component-title">Accordion - notice - State=open</h2>
        <AccordionNotice
          title="알아두세요"
          isOpen={true}
        >
          <ul className="ul -bullet">
            <li>목록</li>
          </ul>
        </AccordionNotice>
      </div>
    </>
  );
};

export default AccordionExamples; 