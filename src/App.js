import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { 
  AccordionBox, 
  AccordionBoxList, 
  AccordionGraybox, 
  AccordionLine, 
  AccordionNotice 
} from './components/Accordion';
import DownloadList from './components/DownloadList';
import { AttachedFileList, AttachedFileThumbnail } from './components/AttachedFile';
import { BadgeNew, BadgeLineGray } from './components/Badge';
import Button, { BasicPrimaryButton, BasicSecondaryButton } from './components/Button';

import BottomSheet, { AccountBottomSheet } from './components/BottomSheet';
import Bullet, { BulletBody, BulletCaption, BulletNotice, Bullet2Depth } from './components/Bullet';

import Card, { 
  AccountCard, 
  AccountAccordionCard, 
  AccountListCard, 
  AccountPriceCard,
  DataCard,
  Data4ColumnCard,
  DataHighlightCard,
  EtcInputCard,
  GeneralCard,
  GeneralAccordionCard,
  GeneralDateCard,
  GeneralDetailCard,
  GeneralDivideMultiCard,
  GeneralDivideSingleCard,
  GeneralGripCard,
  GeneralInfoCard,
  GeneralInputCard,
  GeneralListCard,
  GeneralRateCard,
  GeneralSumCard,
  SummaryCard,
  Summary2ColumnCard,
  SummaryAccordionCard,
  SummaryBasicCard,
  SummaryPriceDivideCard,
  SummaryPriceDoubleCard,
  SummaryPriceSingleCard
} from './components/Card';
import Check, { CheckBasic, CheckBox, CheckXS, CheckSM, CheckLG, CheckSelected, CheckDisabled } from './components/Check';

import Controls, { Controller, Stepper, ControllerNext, ControllerPrevious, ControllerDisabled } from './components/Controls';
import Divider, { ContentDivider, List1Divider, List2Divider, PageDivider } from './components/Divider';
import Empty, { EmptyResult, EmptyPage } from './components/Empty';
import Filter, { FilterLeft, FilterRight } from './components/Filter';
import Indicator, { DotIndicator, NumberIndicator, PlayIndicator, StopIndicator } from './components/Indicator';
import InfoBox from './components/InfoBox';
import Label, { FillLabel, LineLabel, TextLabel, GrayLabel, GreenLabel, RedLabel, Grade1Label, Grade2Label, Grade3Label, Grade4Label, Grade5Label, Grade6Label } from './components/Label';
import Link, { CategoryLink, DivideLink, HorizontalLink, MixLink, NoneLink, PriceLink, VerticalLink } from './components/Link';
import List, { AccountList, CardList, LineList, PageList, LargeCardList, SmallCardList } from './components/List';
import LoadData, { BasicLoadData, HighlightLoadData } from './components/LoadData';
import Navigation, { BottomNavigation, TopBasicNavigation, TopMainNavigation } from './components/Navigation';
import Popover, { BottomCenterPopover, TopCenterPopover } from './components/Popover';
import Popup from './components/Popup';
import Process, { ProgressBar, StepProcess, IconProcess, ThreeStepProcess } from './components/Process';
import Radio, { BasicRadio, BoxRadio, LargeRadio, SmallRadio, SelectedRadio } from './components/Radio';
import Search, { SearchInput, SearchFilter, FilledSearch, ErrorSearch } from './components/Search';
import Select, { BasicSelect, TwoRowSelect, AccountSelect, FilledSelect, ErrorSelect } from './components/Select';

import Switch, { BasicSwitch, BigFontSwitch, LargeSwitch, SmallSwitch, OnSwitch, OffSwitch } from './components/Switch';
import Tab, { BarTab, ChipTab, LineTab, TwoMenuTab, ThreeMenuTab } from './components/Tab';
import TextArea, { InactiveTextArea, FilledTextArea, FocusTextArea, ErrorTextArea } from './components/TextArea';
import Terms, { RequiredTerms, OptionalTerms, CloseTerms, OpenTerms } from './components/Terms';
import Toast from './components/Toast';
import Tooltip, { TooltipField } from './components/Tooltip';

// Import separated component examples
import AccordionExamples from './components/examples/AccordionExamples';
import AttachedFileExamples from './components/examples/AttachedFileExamples';
import BadgeExamples from './components/examples/BadgeExamples';
import ButtonExamples from './components/examples/ButtonExamples';
import BottomSheetExamples from './components/examples/BottomSheetExamples';
import BulletExamples from './components/examples/BulletExamples';
import CalendarExamples from './components/examples/CalendarExamples';
import CardExamples from './components/examples/CardExamples';
import CheckExamples from './components/examples/CheckExamples';
import ChipExamples from './components/examples/ChipExamples';
import ControlsExamples from './components/examples/ControlsExamples';
import DividerExamples from './components/examples/DividerExamples';
import EmptyExamples from './components/examples/EmptyExamples';
import FilterExamples from './components/examples/FilterExamples';
import IndicatorExamples from './components/examples/IndicatorExamples';
import InfoBoxExamples from './components/examples/InfoBoxExamples';
import InputExamples from './components/examples/InputExamples';
import LabelExamples from './components/examples/LabelExamples';
import LinkExamples from './components/examples/LinkExamples';
import ListExamples from './components/examples/ListExamples';
import LoadDataExamples from './components/examples/LoadDataExamples';
import NavigationExamples from './components/examples/NavigationExamples';
import PopoverExamples from './components/examples/PopoverExamples';
import PopupExamples from './components/examples/PopupExamples';
import ProcessExamples from './components/examples/ProcessExamples';
import SearchExamples from './components/examples/SearchExamples';
import SelectExamples from './components/examples/SelectExamples';
import SwitchExamples from './components/examples/SwitchExamples';
import TabExamples from './components/examples/TabExamples';
import TermsExamples from './components/examples/TermsExamples';
import TextAreaExamples from './components/examples/TextAreaExamples';
import ToastExamples from './components/examples/ToastExamples';
import TooltipExamples from './components/examples/TooltipExamples';
import RadioExamples from './components/examples/RadioExamples';

import './App.css';

function App() {
  const [accordionStates, setAccordionStates] = useState({
    'box-list-close': false,
    'box-text-close': false,
    'graybox-close': false,
    'graybox-list-close': false,
    'line-close': false,
    'notice-close': false
  });
  const [selectedComponent, setSelectedComponent] = useState('accordion');
  const [isCapturing, setIsCapturing] = useState(false);
  const containerRef = useRef(null);
  
  const handleToggle = (id, isOpen) => {
    setAccordionStates(prev => ({
      ...prev,
      [id]: isOpen
    }));
  };

  const captureScreenshot = async () => {
    if (containerRef.current) {
      try {
        const canvas = await html2canvas(containerRef.current, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff'
        });
        
        const link = document.createElement('a');
        link.download = `component-screenshot-${Date.now()}.png`;
        link.href = canvas.toDataURL();
        link.click();
      } catch (error) {
        console.error('Screenshot capture failed:', error);
      }
    }
  };

  // 컴포넌트 목록
  const componentList = [
    { id: 'accordion', name: 'Accordion' },
    { id: 'attached-file', name: 'Attached File' },
    { id: 'badge', name: 'Badge' },
    { id: 'button', name: 'Button' },
    { id: 'bottomsheet', name: 'BottomSheet' },
    { id: 'bullet', name: 'Bullet' },
    { id: 'calendar', name: 'Calendar' },
    { id: 'card', name: 'Card' },
    { id: 'check', name: 'Check' },
    { id: 'chip', name: 'Chip' },
    { id: 'controls', name: 'Controls' },
    { id: 'divider', name: 'Divider' },
    { id: 'empty', name: 'Empty' },
    { id: 'filter', name: 'Filter' },
    { id: 'indicator', name: 'Indicator' },
    { id: 'infobox', name: 'InfoBox' },
    { id: 'input', name: 'Input' },
    { id: 'label', name: 'Label' },
    { id: 'link', name: 'Link' },
    { id: 'list', name: 'List' },
    { id: 'loaddata', name: 'LoadData' },
    { id: 'navigation', name: 'Navigation' },
    { id: 'popover', name: 'Popover' },
    { id: 'popup', name: 'Popup' },
    { id: 'process', name: 'Process' },
    { id: 'radio', name: 'Radio' },
    { id: 'search', name: 'Search' },
    { id: 'select', name: 'Select' },
    { id: 'switch', name: 'Switch' },
    { id: 'tab', name: 'Tab' },
    { id: 'textarea', name: 'TextArea' },
    { id: 'terms', name: 'Terms' },
    { id: 'toast', name: 'Toast' },
    { id: 'tooltip', name: 'Tooltip' }
  ];

  // 컴포넌트 렌더링 함수
  const renderComponent = (componentId) => {
    switch (componentId) {
      case 'accordion':
        return <AccordionExamples accordionStates={accordionStates} handleToggle={handleToggle} downloadItems={downloadItems} />;
      case 'attached-file':
        return <AttachedFileExamples attachedFiles={attachedFiles} handleRemoveFile={handleRemoveFile} handleAddFile={handleAddFile} />;
      case 'badge':
        return <BadgeExamples />;
      case 'button':
        return <ButtonExamples />;
      case 'bottomsheet':
        return <BottomSheetExamples isBottomSheetOpen={isBottomSheetOpen} setIsBottomSheetOpen={setIsBottomSheetOpen} accounts={accounts} />;
      case 'bullet':
        return <BulletExamples bulletItems={bulletItems} bullet2DepthItems={bullet2DepthItems} />;
      case 'calendar':
        return <CalendarExamples />;
      case 'card':
        return <CardExamples 
          cardData={cardData}
          data4ColumnData={data4ColumnData}
          dataHighlightData={dataHighlightData}
          etcInputData={etcInputData}
          generalAccordionData={generalAccordionData}
          generalDateData={generalDateData}
          generalDetailData={generalDetailData}
          generalDivideMultiData={generalDivideMultiData}
          generalDivideSingleData={generalDivideSingleData}
          generalGripData={generalGripData}
          generalInfoData={generalInfoData}
          generalInputData={generalInputData}
          generalListData={generalListData}
          generalRateData={generalRateData}
          generalSumData={generalSumData}
          summary2ColumnData={summary2ColumnData}
          summaryAccordionData={summaryAccordionData}
          summaryBasicData={summaryBasicData}
          summaryPriceDivideData={summaryPriceDivideData}
          summaryPriceDoubleData={summaryPriceDoubleData}
          summaryPriceSingleData={summaryPriceSingleData}
        />;
      case 'check':
        return <CheckExamples />;
      case 'chip':
        return <ChipExamples />;
      case 'controls':
        return <ControlsExamples stepperValue={stepperValue} setStepperValue={setStepperValue} />;
      case 'divider':
        return <DividerExamples />;
      case 'empty':
        return <EmptyExamples />;
      case 'filter':
        return <FilterExamples />;
      case 'indicator':
        return <IndicatorExamples currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />;
      case 'infobox':
        return <InfoBoxExamples />;
      case 'input':
        return <InputExamples />;
      case 'label':
        return <LabelExamples />;
      case 'link':
        return <LinkExamples linkItems={linkItems} priceItems={priceItems} />;
      case 'list':
        return <ListExamples accountItems={accountItems} cardItems={cardItems} lineItems={lineItems} />;
      case 'loaddata':
        return <LoadDataExamples />;
      case 'navigation':
        return <NavigationExamples />;
      case 'popover':
        return <PopoverExamples />;
      case 'popup':
        return <PopupExamples 
          isBasicPopupOpen={isBasicPopupOpen} 
          setIsBasicPopupOpen={setIsBasicPopupOpen}
          isLoginPopupOpen={isLoginPopupOpen}
          setIsLoginPopupOpen={setIsLoginPopupOpen}
          isPushPopupOpen={isPushPopupOpen}
          setIsPushPopupOpen={setIsPushPopupOpen}
          isErrorAccordionPopupOpen={isErrorAccordionPopupOpen}
          setIsErrorAccordionPopupOpen={setIsErrorAccordionPopupOpen}
        />;
      case 'process':
        return <ProcessExamples processSteps={processSteps} />;
      case 'radio':
        return <RadioExamples />;
      case 'search':
        return <SearchExamples />;
      case 'select':
        return <SelectExamples accountInfo={accountInfo} />;
      case 'switch':
        return <SwitchExamples />;
      case 'tab':
        return <TabExamples tabItems={tabItems} />;
      case 'textarea':
        return <TextAreaExamples />;
      case 'terms':
        return <TermsExamples termsItems={termsItems} />;
      case 'toast':
        return <ToastExamples isToastVisible={isToastVisible} setIsToastVisible={setIsToastVisible} />;
      case 'tooltip':
        return <TooltipExamples />;
      default:
        return (
          <div className="component-section">
            <h2 className="component-title">{componentList.find(c => c.id === componentId)?.name || 'Unknown'} Components</h2>
            <p>이 컴포넌트는 아직 구현되지 않았습니다.</p>
          </div>
        );
    }
  };

  // 다운로드 리스트 데이터
  const downloadItems = [
    { title: '예금계약서(비대면_저축성)' },
    { title: 'NH고향사랑기부예금 상품설명서' },
    { title: 'NH고향사랑기부예금 핵심상품설명서' },
    { title: 'NH고향사랑기부예금 약관' },
    { title: '예금거래기본약관 외' }
  ];

  // 첨부파일 데이터
  const [attachedFiles, setAttachedFiles] = useState([
    { name: 'document1.pdf' },
    { name: 'image1.jpg' },
    { name: 'spreadsheet.xlsx' }
  ]);

  const handleRemoveFile = (index) => {
    setAttachedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleAddFile = () => {
    setAttachedFiles(prev => [...prev, { name: `새파일${prev.length + 1}.txt` }]);
  };

  // BottomSheet 상태
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  // 계좌 데이터
  const accounts = [
    {
      bankCode: '011',
      name: '외화보통예금(비대면실명확인)',
      bankName: 'NH농협은행',
      accountNumber: '302-1234-5678-01',
      balance: '120,000,000'
    }
  ];

  // Bullet 데이터
  const bulletItems = [
    '페이지 1depth 목록 내용 입니다.',
    '페이지 1depth 목록 내용 입니다.'
  ];

  const bullet2DepthItems = [
    '1depth 목록 내용 입니다.',
    {
      text: '1depth 목록 내용 입니다.',
      children: [
        '2depth 목록 내용 입니다.',
        '2depth 목록 내용 입니다.'
      ]
    },
    '내용'
  ];

  // Card 데이터
  const cardData = {
    bankCode: '011',
    accountName: '주거래우대통장',
    bankName: 'NH농협',
    accountNumber: '111-1234-5678-99',
    mainData: [
      { title: '타이틀', value: '데이터' },
      { title: '타이틀', value: '데이터' }
    ],
    expandData: [
      { title: '타이틀', value: '데이터' },
      { title: '타이틀', value: '데이터' },
      { title: '타이틀', value: '데이터' }
    ]
  };

  // Data Card 데이터
  const data4ColumnData = {
    badges: [
      { text: '다소높은위험', type: 'line-gray' },
      { text: '거치식', type: 'line-blue' },
      { text: '선취', type: 'line-yellow' }
    ],
    dataTitle: '상품명',
    dataSubTitle: '부가텍스트',
    dataInfo: [
      { period: '1개월', value: '-6.2%' },
      { period: '3개월', value: '-5.36%' },
      { period: '6개월', value: '-1.27%' },
      { period: '12개월', value: '+7.69%' }
    ],
    dataSub: '기초지수 : KOSPI 200 지수'
  };

  const dataHighlightData = {
    badges: [
      { text: '추천', type: 'line-gray' },
      { text: '신규', type: 'line-red' }
    ],
    dataTitle: '미래에셋스마트롱숏70증권자투자신탁1호[주식]',
    dataSubTitle: '상품명',
    dataInfo: ['수수료 선취', '국내[주식형]', '국내'],
    dataSub: {
      price: '1088.55',
      change: '+6.33%',
      periods: [
        { period: '3개월', value: '+6.33%' },
        { period: '6개월', value: '-14.33%' },
        { period: '12개월', value: '+6.33%' }
      ]
    },
    compareCheckbox: true,
    accordionData: {
      title: '제목',
      content: '내용'
    }
  };

  // Etc Input Card 데이터
  const etcInputData = {
    inputFields: [
      {
        type: 'text',
        id: 'text-input',
        label: '레이블',
        placeholder: '금액을 입력하세요',
        value: '',
        onChange: (e) => console.log('Text input:', e.target.value)
      },
      {
        type: 'serial',
        id: 'rrn-input',
        label: '주민등록번호',
        value: '123456-1234567',
        readonly: true
      },
      {
        type: 'radio',
        name: 'radio-group',
        label: '레이블',
        value: 'option1',
        options: [
          { value: 'option1', label: '라디오' },
          { value: 'option2', label: '라디오' }
        ],
        onChange: (e) => console.log('Radio changed:', e.target.value)
      },
      {
        type: 'phone',
        id: 'phone-input',
        label: '레이블',
        value: '12345678',
        readonly: true
      }
    ],
    buttons: [
      { text: '버튼', disabled: true }
    ],
    deleteButton: true
  };

  // General Card 데이터
  const generalAccordionData = {
    badges: [
      { text: '매우낮은위험', type: 'line-gray' }
    ],
    dataTitle: '기쁨가득NH저축보험(무)_(기본형)',
    mainData: [
      { title: '평가금액', value: '200,000원' },
      { title: '투자금액', value: '200,000원' },
      { title: '수익률', value: '+20 %' }
    ],
    accordionData: {
      title: '계약서류 확인',
      files: [
        { name: '예금계약서(비대면_저축성)' },
        { name: 'NH고향사랑기부예금 상품설명서' },
        { name: 'NH고향사랑기부예금 핵심상품설명서' },
        { name: 'NH고향사랑기부예금 약관' },
        { name: '예금거래기본약관 외' }
      ]
    }
  };

  const generalDateData = {
    date: '2025.01.01',
    mainData: [
      { title: '타이틀', value: '데이터' },
      { title: '타이틀', value: '데이터' }
    ]
  };

  const generalDetailData = {
    detailTitle: '타이틀',
    detailSubTitle: '부가설명',
    buttons: [
      { text: '상세내역' }
    ]
  };

  const generalDivideMultiData = {
    divideData: [
      {
        title: '상품명',
        data: [
          { title: '타이틀', value: '데이터' }
        ]
      },
      {
        title: '상품명',
        data: [
          { title: '타이틀', value: '데이터' }
        ]
      },
      {
        title: '상품명',
        data: [
          { title: '타이틀', value: '데이터' }
        ]
      }
    ]
  };

  const generalDivideSingleData = {
    badges: [
      { text: '라벨', type: 'line-gray' }
    ],
    dataTitle: '상품명',
    dataSubTitle: '부가설명',
    mainData: [
      { title: '타이틀', value: '데이터' },
      { title: '타이틀', value: '데이터' }
    ],
    expandData: [
      { title: '타이틀', value: '데이터' },
      { title: '타이틀', value: '데이터' }
    ],
    buttons: [
      { text: '버튼' }
    ]
  };

  const generalGripData = {
    dataTitle: '타이틀',
    accountNumber: '계좌번호'
  };

  const generalInfoData = {
    infoData: {
      title: '상품명',
      date: '2025.01.01',
      subInfo: ['부가설명1', '부가설명2'],
      rightData: {
        value: '데이터',
        description: '데이터 설명'
      }
    },
    buttons: [
      { text: '버튼' }
    ]
  };

  const generalInputData = {
    badges: [
      { text: '매우낮은위험', type: 'line-gray' }
    ],
    dataTitle: '기쁨가득NH저축보험(무)_(기본형)',
    accountNumber: '028-0612-0912-11',
    mainData: [
      { title: '평가금액', value: '200,000원' },
      { title: '투자금액', value: '200,000원' },
      { title: '수익률', value: '+20 %' }
    ],
    inputType: 'price',
    inputLabel: '운용비율',
    inputValue: '100,000',
    inputUnit: '원',
    inputPlaceholder: '신청금액 입력',
    expandData: [
      { title: '평가금액', value: '200,000원' },
      { title: '투자금액', value: '200,000원' }
    ]
  };

  const generalListData = {
    badges: [
      { text: '매우낮은위험', type: 'line-gray' }
    ],
    dataTitle: '기쁨가득NH저축보험(무)_(기본형)',
    accountNumber: '028-0612-0912-11',
    mainData: [
      { title: '평가금액', value: '200,000원' },
      { title: '투자금액', value: '200,000원' },
      { title: '수익률', value: '+20 %' }
    ],
    buttons: [
      { text: '진행 상태' }
    ]
  };

  const generalRateData = {
    badges: [
      { text: '거치식', type: 'line-blue' }
    ],
    dataCategory: '종류',
    dataTitle: '상품명',
    dataSubTitle: '부가설명',
    dataHash: ['태그명', '태그명', '태그명', '태그명'],
    dataSub: {
      title: '텍스트',
      value: '10%',
      info: '추가정보'
    },
    mainData: [
      { title: '평가금액', value: '200,000원' },
      { title: '투자금액', value: '200,000원' }
    ]
  };

  const generalSumData = {
    badges: [
      {
        text: '펀드',
        tooltip: '이미 가입한 상품',
        tooltipTitle: '이미 가입한 상품',
        tooltipContent: [
          '운용중인 상품 비율이 추천비율보다 높은 경우\n추천 비중보다 높은 부분은 일부 매도되어 다른 상품으로 교체 매매됩니다.',
          '운용중인 상품 비율이 추천비율보다 낮은 경우\n해당 상품은 모두 포트폴리오에 포함되고 부족한 비율에 맞춰 추가 매수됩니다.'
        ]
      }
    ],
    dataTitle: '상품명',
    dataSubTitle: '부가설명',
    mainData: [
      { title: '평가금액', value: '200,000원' },
      { title: '투자금액', value: '200,000원' },
      { title: '수익률', value: '+20 %' }
    ],
    sumData: {
      title: '한도금액',
      content: '20,000,000원'
    }
  };

  // Summary Card 데이터
  const summary2ColumnData = {
    summaryData: [
      { title: '타이틀', value: '데이터' },
      { title: '타이틀', value: '데이터', link: true, point: true }
    ]
  };

  const summaryAccordionData = {
    summaryTitle: '타이틀',
    summaryData: [
      { title: '대출과목', value: '예적금담보대출' },
      { title: '거래구분', value: '개별거래' },
      { title: '담보예적금(신탁) 계좌번호', value: '111-1111-1111-11' },
      { title: '대출약정금액', value: '30,000,000원' },
      { title: '입금계좌번호', value: '302-1234-5678-80', hidden: true },
      { title: '대출관리점', value: '서대문지점', hidden: true }
    ],
    summaryInfo: {
      title: '타이틀',
      data: [
        { title: '질권설정금액', value: '3,000,000원' },
        { title: '대출신규일', value: '2023.01.01' },
        { title: '대출만기일', value: '2023.01.01' },
        { title: '지연배상금율', value: '최고 연 15.000%' }
      ]
    }
  };

  const summaryBasicData = {
    badges: [
      { text: '매우낮은위험', type: 'line-gray' }
    ],
    summaryTitle: '타이틀',
    summarySubTitle: '부가설명',
    summaryData: [
      { title: '상품명', value: 'NH해외여행보험' },
      { title: '보험료', value: '50,000원' },
      { title: '납입기간', value: '10년납' },
      { title: '납입방법', value: '매월' },
      { title: '계좌정보', value: 'NH농협은행 123-456-78910' }
    ]
  };

  const summaryPriceDivideData = {
    summaryPriceData: [
      {
        title: '타이틀',
        label: '예상금리',
        subLabel: '부가설명',
        period: '매월',
        value: '0원',
        subInfo: '부가설명',
        info: '가이드문구를 입력해 주세요.'
      },
      {
        title: '타이틀',
        label: '예상금리',
        subLabel: '부가설명',
        period: '매월',
        value: '0원',
        subInfo: '부가설명',
        info: '가이드문구를 입력해 주세요.'
      }
    ]
  };

  const summaryPriceDoubleData = {
    summaryPriceData: [
      {
        label: '예상금리',
        subLabel: '부가설명',
        period: '매월',
        value: '0원',
        subInfo: '부가설명'
      },
      {
        label: '예상금리',
        subLabel: '부가설명',
        period: '매월',
        value: '0원',
        subInfo: '부가설명'
      }
    ]
  };

  const summaryPriceSingleData = {
    summaryPriceData: [
      {
        label: '예상금리',
        subLabel: '부가설명',
        period: '매월',
        value: '0원',
        subInfo: '부가설명'
      }
    ]
  };

  // Chip 데이터
  const chipItems = ['메뉴', '메뉴', '메뉴', '메뉴', '메뉴'];
  const chipOpenItems = ['#목돈모으기', '#주택청약', '#투자상품', '#대출상품'];

  // Stepper 상태
  const [stepperValue, setStepperValue] = useState(1);

  // Indicator 상태
  const [currentSlide, setCurrentSlide] = useState(1);

  // Link 데이터
  const linkItems = [
    { title: '타이틀', subInfo: '부가설명' },
    { title: '타이틀2', subInfo: '부가설명2' }
  ];

  const priceItems = [
    {
      date: '2022.05.30 11:22:24',
      type: '출금',
      name: '나금상',
      amount: '750,000,000원',
      balance: '잔액 250,000,000원'
    }
  ];

  // List 데이터
  const accountItems = [
    {
      bankCode: '011',
      bankName: '농협은행',
      accountNumber: '123412341234123'
    }
  ];

  const cardItems = [
    { title: '타이틀', value: '데이터' },
    { title: '타이틀2', value: '데이터2' }
  ];

  const lineItems = [
    {
      startDate: '2024.01.01',
      endDate: '2025.01.01',
      data: [
        { title: '타이틀', value: '데이터' }
      ]
    }
  ];

  // Process 데이터
  const processSteps = [
    { title: '스탭1', subInfo: '부가설명' },
    { title: '스탭2', subInfo: '부가설명' },
    { title: '스탭3', subInfo: '부가설명' }
  ];

  // Popup 상태
  const [isBasicPopupOpen, setIsBasicPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isPushPopupOpen, setIsPushPopupOpen] = useState(false);
  const [isErrorAccordionPopupOpen, setIsErrorAccordionPopupOpen] = useState(false);

  // Select 데이터
  const accountInfo = {
    bankCode: '011',
    accountName: '주거래우대통장',
    bankName: 'NH농협',
    accountNumber: '111-1234-5678-99'
  };

  // Tab 데이터
  const tabItems = [
    { id: 'tab1', title: '첫번째 탭', content: '첫번째 탭의 내용입니다.' },
    { id: 'tab2', title: '두번째 탭', content: '두번째 탭의 내용입니다.' },
    { id: 'tab3', title: '세번째 탭', content: '세번째 탭의 내용입니다.' }
  ];

  // Terms 데이터
  const termsItems = [
    { id: 'term1', title: '개인정보 수집 및 이용 동의', checked: false },
    { id: 'term2', title: '서비스 이용약관 동의', checked: false },
    { id: 'term3', title: '마케팅 정보 수신 동의', checked: false },
    { id: 'term4', title: '제3자 정보제공 동의', checked: false },
    { id: 'term5', title: '위치정보 이용 동의', checked: false }
  ];

  // Toast 상태
  const [isToastVisible, setIsToastVisible] = useState(false);

  return (
    <div className="nds-container" ref={containerRef}>
      <div className="nds-layout">
        {/* Left Navigation Bar */}
        <div className="nds-lnb">
          <div className="lnb-header">
            <h1>NDS Components</h1>
          </div>
          <nav className="lnb-nav">
            {componentList.map((component) => (
              <button
                key={component.id}
                className={`lnb-item ${selectedComponent === component.id ? 'active' : ''}`}
                onClick={() => setSelectedComponent(component.id)}
              >
                {component.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="nds-content">
          <div className="content-header">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2>{componentList.find(c => c.id === selectedComponent)?.name || 'Unknown'} Components</h2>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={captureScreenshot}
                  disabled={isCapturing}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: isCapturing ? '#ccc' : '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: isCapturing ? 'not-allowed' : 'pointer',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  {isCapturing ? '캡처 중' : '캡처'}
                </button>
              </div>
            </div>
          </div>
          <div className="content-body">
            {renderComponent(selectedComponent)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 