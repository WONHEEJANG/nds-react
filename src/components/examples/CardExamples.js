import React from 'react';
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
} from '../Card';

const CardExamples = ({ 
  cardData, 
  data4ColumnData, 
  dataHighlightData, 
  etcInputData,
  generalAccordionData,
  generalDateData,
  generalDetailData,
  generalDivideMultiData,
  generalDivideSingleData,
  generalGripData,
  generalInfoData,
  generalInputData,
  generalListData,
  generalRateData,
  generalSumData,
  summary2ColumnData,
  summaryAccordionData,
  summaryBasicData,
  summaryPriceDivideData,
  summaryPriceDoubleData,
  summaryPriceSingleData
}) => {
  return (
    <div className="component-section">
      <h2 className="component-title">Card Components</h2>
      
      {/* Account Cards */}
      <div className="component-section">
        <h3 className="component-subtitle">Account Cards</h3>
        <AccountAccordionCard
          {...cardData}
          onToggle={(isOpen) => console.log('Account Accordion Card toggle:', isOpen)}
        />
        <AccountListCard
          bankCode="011"
          accountName="금융사명"
          accountNumber="계좌번호"
          mainData={[
            { title: '타이틀', value: '데이터' },
            { title: '타이틀', value: '데이터' }
          ]}
          buttons={[{ text: '버튼' }]}
          onDotMenu={() => console.log('Dot menu clicked')}
          onButtonClick={(button, index) => console.log('Button clicked:', button, index)}
        />
        <AccountPriceCard
          bankCode="011"
          accountName="금융사명"
          accountNumber="계좌번호"
          mainData={[{ title: '금액', value: '150,000,000' }]}
          buttons={[{ text: '버튼' }]}
          onDotMenu={() => console.log('Dot menu clicked')}
          onRefresh={() => console.log('Refresh clicked')}
          onButtonClick={(button, index) => console.log('Button clicked:', button, index)}
        />
      </div>

      {/* Data Cards */}
      <div className="component-section">
        <h3 className="component-subtitle">Data Cards</h3>
        <Data4ColumnCard {...data4ColumnData} />
        <DataHighlightCard {...dataHighlightData} />
      </div>

      {/* Etc Input Card */}
      <div className="component-section">
        <h3 className="component-subtitle">Etc Input Card</h3>
        <EtcInputCard {...etcInputData} />
      </div>

      {/* General Cards */}
      <div className="component-section">
        <h3 className="component-subtitle">General Cards</h3>
        <GeneralAccordionCard {...generalAccordionData} />
        <GeneralDateCard {...generalDateData} />
        <GeneralDetailCard {...generalDetailData} />
        <GeneralDivideMultiCard {...generalDivideMultiData} />
        <GeneralDivideSingleCard {...generalDivideSingleData} />
        <GeneralGripCard {...generalGripData} />
        <GeneralInfoCard {...generalInfoData} />
        <GeneralInputCard {...generalInputData} />
        <GeneralListCard {...generalListData} />
        <GeneralRateCard {...generalRateData} />
        <GeneralSumCard {...generalSumData} />
      </div>

      {/* Summary Cards */}
      <div className="component-section">
        <h3 className="component-subtitle">Summary Cards</h3>
        <Summary2ColumnCard {...summary2ColumnData} />
        <SummaryAccordionCard {...summaryAccordionData} />
        <SummaryBasicCard {...summaryBasicData} />
        <SummaryPriceDivideCard {...summaryPriceDivideData} />
        <SummaryPriceDoubleCard {...summaryPriceDoubleData} />
        <SummaryPriceSingleCard {...summaryPriceSingleData} />
      </div>
    </div>
  );
};

export default CardExamples; 