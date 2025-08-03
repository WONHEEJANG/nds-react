import React from 'react';
import BottomSheet, { 
  AccountBottomSheet, 
  AccountNHBottomSheet,
  AccountNHNoDataBottomSheet,
  AccountOtherBottomSheet,
  AccountOtherNoDataBottomSheet,
  AccountAccordionBottomSheet,
  BasicBottomSheet,
  BasicNoneHeaderBottomSheet,
  BasicWithHeaderBottomSheet,
  FinanceBankBottomSheet,
  FinanceStockBottomSheet,
  KeypadBasicBottomSheet,
  KeypadBasicInputBottomSheet,
  KeypadPointBottomSheet,
  KeypadPointInputBottomSheet,
  KeypadPriceBottomSheet,
  KeypadPriceButtonBottomSheet,
  KeypadPriceInputBottomSheet,
  CurrencyBottomSheet,
  ListMultiBottomSheet,
  ListSingleBottomSheet,
  OptionBottomSheet,
  PickerCalendarMonthDayBottomSheet,
  PickerCalendarYearMonthBottomSheet,
  PickerCalendarYearMonthDayBottomSheet,
  PickerWheelDayBottomSheet,
  PickerWheelHourMinuteBottomSheet,
  PickerWheelPeriodBottomSheet,
  PickerWheelYearMonthDayBottomSheet,
  ShareBottomSheet
} from '../BottomSheet';

const BottomSheetExamples = ({ isBottomSheetOpen, setIsBottomSheetOpen, accounts }) => {
  return (
    <div className="component-section">
      <h2 className="component-title">BottomSheet Components - raw HTML</h2>
      
      {/* Basic BottomSheet Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Basic BottomSheet Examples</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('basic-none-header')}>
            Basic - No Header
          </button>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('basic-with-header')}>
            Basic - With Header
          </button>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('basic-with-cta')}>
            Basic - With CTA
          </button>
        </div>
      </div>

      {/* Account BottomSheet Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Account BottomSheet Examples</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('account-nh')}>
            Account - NH
          </button>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('account-other')}>
            Account - Other
          </button>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('account-accordion')}>
            Account - Accordion
          </button>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('account-nh-no-data')}>
            Account - NH No Data
          </button>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('account-other-no-data')}>
            Account - Other No Data
          </button>
        </div>
      </div>

      {/* Finance BottomSheet Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Finance BottomSheet Examples</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('finance-bank')}>
            Finance - Bank
          </button>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('finance-stock')}>
            Finance - Stock
          </button>
        </div>
      </div>

      {/* Keypad BottomSheet Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Keypad BottomSheet Examples</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('keypad-basic')}>
          Keypad - Basic
        </button>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('keypad-basic-input')}>
            Keypad - Basic Input
          </button>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('keypad-point')}>
            Keypad - Point
          </button>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('keypad-point-input')}>
            Keypad - Point Input
          </button>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('keypad-price')}>
            Keypad - Price
          </button>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('keypad-price-button')}>
            Keypad - Price Button
          </button>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('keypad-price-input')}>
            Keypad - Price Input
          </button>
        </div>
      </div>

      {/* List BottomSheet Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">List BottomSheet Examples</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('list-currency')}>
            List - Currency
          </button>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('list-multi')}>
            List - Multi
          </button>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('list-single')}>
            List - Single
          </button>
        </div>
      </div>

      {/* Option BottomSheet Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Option BottomSheet Examples</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('option')}>
            Option
          </button>
        </div>
      </div>

      {/* Picker BottomSheet Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Picker BottomSheet Examples</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('picker-calendar-month-day')}>
            Picker - Calendar Month Day
          </button>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('picker-calendar-year-month')}>
            Picker - Calendar Year Month
          </button>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('picker-calendar-year-month-day')}>
            Picker - Calendar Year Month Day
          </button>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('picker-wheel-day')}>
            Picker - Wheel Day
          </button>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('picker-wheel-hour-minute')}>
            Picker - Wheel Hour Minute
          </button>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('picker-wheel-period')}>
            Picker - Wheel Period
          </button>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('picker-wheel-year-month-day')}>
            Picker - Wheel Year Month Day
          </button>
        </div>
      </div>

      {/* Share BottomSheet Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Share BottomSheet Examples</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen('share')}>
            Share
          </button>
        </div>
      </div>

      {/* Component Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Component Examples</h3>
        <button type="button" className="a underline point" onClick={() => setIsBottomSheetOpen(true)}>
          테스트모드에서 클릭
        </button>
        <AccountBottomSheet 
          isOpen={isBottomSheetOpen === true}
          accounts={accounts}
          onClose={() => setIsBottomSheetOpen(false)}
        />
        {/* Basic BottomSheets */}
        <BasicNoneHeaderBottomSheet 
          isOpen={isBottomSheetOpen === 'basic-none-header'}
          title="기본 바텀시트"
          content="내용이 들어갑니다."
          onClose={() => setIsBottomSheetOpen(false)}
        />
        <BasicWithHeaderBottomSheet 
          isOpen={isBottomSheetOpen === 'basic-with-header'}
          title="헤더가 있는 바텀시트"
          content="헤더가 있는 바텀시트 내용입니다."
          onClose={() => setIsBottomSheetOpen(false)}
        />
        <BasicBottomSheet 
          isOpen={isBottomSheetOpen === 'basic-with-cta'}
          title="CTA 버튼이 있는 바텀시트"
          content="CTA 버튼이 있는 바텀시트 내용입니다."
          ctaButton="확인"
          onCtaClick={() => setIsBottomSheetOpen(false)}
          onClose={() => setIsBottomSheetOpen(false)}
        />

        {/* Account BottomSheets */}
        <AccountNHBottomSheet 
          isOpen={isBottomSheetOpen === 'account-nh'}
          accounts={accounts || [
            { name: '급여통장', number: '123-456789-01' },
            { name: '일반통장', number: '123-456789-02' }
          ]}
          onAccountSelect={(account) => {
            console.log('Account selected:', account);
            setIsBottomSheetOpen(false);
          }}
          onClose={() => setIsBottomSheetOpen(false)}
        />
        <AccountOtherBottomSheet 
          isOpen={isBottomSheetOpen === 'account-other'}
          accounts={accounts || [
            { bankName: '신한은행', name: '급여통장', number: '123-456789-01' },
            { bankName: '국민은행', name: '일반통장', number: '123-456789-02' }
          ]}
          onAccountSelect={(account) => {
            console.log('Account selected:', account);
            setIsBottomSheetOpen(false);
          }}
          onClose={() => setIsBottomSheetOpen(false)}
        />
        <AccountAccordionBottomSheet 
          isOpen={isBottomSheetOpen === 'account-accordion'}
          accounts={accounts || [
            { name: '급여통장', number: '123-456789-01' },
            { name: '일반통장', number: '123-456789-02' }
          ]}
          onAccountSelect={(account) => {
            console.log('Account selected:', account);
            setIsBottomSheetOpen(false);
          }}
          onClose={() => setIsBottomSheetOpen(false)}
        />
        <AccountNHNoDataBottomSheet 
          isOpen={isBottomSheetOpen === 'account-nh-no-data'}
          onClose={() => setIsBottomSheetOpen(false)}
        />
        <AccountOtherNoDataBottomSheet 
          isOpen={isBottomSheetOpen === 'account-other-no-data'}
          onClose={() => setIsBottomSheetOpen(false)}
        />

        {/* Finance BottomSheets */}
        <FinanceBankBottomSheet 
          isOpen={isBottomSheetOpen === 'finance-bank'}
          financeList={[
            { name: '신한은행' },
            { name: '국민은행' },
            { name: '우리은행' },
            { name: '하나은행' }
          ]}
          onFinanceSelect={(bank) => {
            console.log('Bank selected:', bank);
            setIsBottomSheetOpen(false);
          }}
          onClose={() => setIsBottomSheetOpen(false)}
        />
        <FinanceStockBottomSheet 
          isOpen={isBottomSheetOpen === 'finance-stock'}
          financeList={[
            { name: 'NH투자증권' },
            { name: '키움증권' },
            { name: '대우증권' },
            { name: '한국투자증권' }
          ]}
          onFinanceSelect={(stock) => {
            console.log('Stock selected:', stock);
            setIsBottomSheetOpen(false);
          }}
          onClose={() => setIsBottomSheetOpen(false)}
        />

        {/* Keypad BottomSheets */}
        <KeypadBasicBottomSheet 
          isOpen={isBottomSheetOpen === 'keypad-basic'}
          keypadValue=""
          onKeypadInput={(value) => console.log('Keypad input:', value)}
          onKeypadConfirm={() => setIsBottomSheetOpen(false)}
          onClose={() => setIsBottomSheetOpen(false)}
        />
        <KeypadBasicInputBottomSheet 
          isOpen={isBottomSheetOpen === 'keypad-basic-input'}
          keypadValue=""
          onKeypadInput={(value) => console.log('Keypad input:', value)}
          onKeypadConfirm={() => setIsBottomSheetOpen(false)}
          onClose={() => setIsBottomSheetOpen(false)}
        />
        <KeypadPointBottomSheet 
          isOpen={isBottomSheetOpen === 'keypad-point'}
          keypadValue=""
          onKeypadInput={(value) => console.log('Keypad input:', value)}
          onKeypadConfirm={() => setIsBottomSheetOpen(false)}
          onClose={() => setIsBottomSheetOpen(false)}
        />
        <KeypadPointInputBottomSheet 
          isOpen={isBottomSheetOpen === 'keypad-point-input'}
          keypadValue=""
          onKeypadInput={(value) => console.log('Keypad input:', value)}
          onKeypadConfirm={() => setIsBottomSheetOpen(false)}
          onClose={() => setIsBottomSheetOpen(false)}
        />
        <KeypadPriceBottomSheet 
          isOpen={isBottomSheetOpen === 'keypad-price'}
          keypadValue=""
          onKeypadInput={(value) => console.log('Keypad input:', value)}
          onKeypadConfirm={() => setIsBottomSheetOpen(false)}
          onClose={() => setIsBottomSheetOpen(false)}
        />
        <KeypadPriceButtonBottomSheet 
          isOpen={isBottomSheetOpen === 'keypad-price-button'}
          keypadValue=""
          onKeypadInput={(value) => console.log('Keypad input:', value)}
          onKeypadConfirm={() => setIsBottomSheetOpen(false)}
          onClose={() => setIsBottomSheetOpen(false)}
        />
        <KeypadPriceInputBottomSheet 
          isOpen={isBottomSheetOpen === 'keypad-price-input'}
          keypadValue=""
          onKeypadInput={(value) => console.log('Keypad input:', value)}
          onKeypadConfirm={() => setIsBottomSheetOpen(false)}
          onClose={() => setIsBottomSheetOpen(false)}
        />

        {/* List BottomSheets */}
        <CurrencyBottomSheet 
          isOpen={isBottomSheetOpen === 'list-currency'}
          listItems={[
            { code: '001', name: 'USD(미국 달러)' },
            { code: '010', name: 'AUD(호주 달러)', active: true },
            { code: '004', name: 'CNY(중국 위안)' }
          ]}
          onListItemClick={(item) => {
            console.log('Currency selected:', item);
            setIsBottomSheetOpen(false);
          }}
          onClose={() => setIsBottomSheetOpen(false)}
        />
        <ListMultiBottomSheet 
          isOpen={isBottomSheetOpen === 'list-multi'}
          listItems={[
            { id: 1, text: '항목1', checked: true },
            { id: 2, text: '항목2', checked: false },
            { id: 3, text: '항목3', checked: true },
            { id: 4, text: '항목4', checked: false }
          ]}
          onListItemClick={(item) => {
            console.log('Multi item clicked:', item);
          }}
          onClose={() => setIsBottomSheetOpen(false)}
        />
        <ListSingleBottomSheet 
          isOpen={isBottomSheetOpen === 'list-single'}
          listItems={[
            { id: 1, text: '항목1', active: false },
            { id: 2, text: '항목2', active: true },
            { id: 3, text: '항목3', active: false },
            { id: 4, text: '항목4', active: false }
          ]}
          onListItemClick={(item) => {
            console.log('Single item clicked:', item);
            setIsBottomSheetOpen(false);
          }}
          onClose={() => setIsBottomSheetOpen(false)}
        />

        {/* Option BottomSheets */}
        <OptionBottomSheet 
          isOpen={isBottomSheetOpen === 'option'}
          optionItems={[
            {
              label: '조회 설정',
              name: 'periods',
              options: [
                { label: '12개월', value: '12', checked: true },
                { label: '24개월', value: '24', checked: false },
                { label: '36개월', value: '36', checked: false },
                { label: '직접입력', value: 'custom', checked: false }
              ],
              datepicker: true,
              startDate: '2024.08.23',
              endDate: '2025.08.19'
            },
            {
              label: '조회기간',
              name: 'order',
              options: [
                { label: '최신순', value: 'latest', checked: true },
                { label: '과거순', value: 'oldest', checked: false }
              ]
            },
            {
              label: '조회유형',
              name: 'type',
              options: [
                { label: '전체', value: 'all', checked: true },
                { label: '입금', value: 'deposit', checked: false },
                { label: '출금', value: 'withdraw', checked: false }
              ]
            }
          ]}
          onOptionChange={(name, value) => {
            console.log('Option changed:', name, value);
          }}
          onClose={() => setIsBottomSheetOpen(false)}
        />

        {/* Picker BottomSheets */}
        <PickerCalendarMonthDayBottomSheet 
          isOpen={isBottomSheetOpen === 'picker-calendar-month-day'}
          onClose={() => setIsBottomSheetOpen(false)}
        />
        <PickerCalendarYearMonthBottomSheet 
          isOpen={isBottomSheetOpen === 'picker-calendar-year-month'}
          onClose={() => setIsBottomSheetOpen(false)}
        />
        <PickerCalendarYearMonthDayBottomSheet 
          isOpen={isBottomSheetOpen === 'picker-calendar-year-month-day'}
          onClose={() => setIsBottomSheetOpen(false)}
        />
        <PickerWheelDayBottomSheet 
          isOpen={isBottomSheetOpen === 'picker-wheel-day'}
          onClose={() => setIsBottomSheetOpen(false)}
        />
        <PickerWheelHourMinuteBottomSheet 
          isOpen={isBottomSheetOpen === 'picker-wheel-hour-minute'}
          onClose={() => setIsBottomSheetOpen(false)}
        />
        <PickerWheelPeriodBottomSheet 
          isOpen={isBottomSheetOpen === 'picker-wheel-period'}
          onClose={() => setIsBottomSheetOpen(false)}
        />
        <PickerWheelYearMonthDayBottomSheet 
          isOpen={isBottomSheetOpen === 'picker-wheel-year-month-day'}
          onClose={() => setIsBottomSheetOpen(false)}
        />

        {/* Share BottomSheets */}
        <ShareBottomSheet 
          isOpen={isBottomSheetOpen === 'share'}
          shareItems={[
            { type: '-kakao', name: '카카오톡' },
            { type: '-sms', name: '문자메시지' },
            { type: '-clipboard', name: '링크복사' }
          ]}
          onShare={(item) => {
            console.log('Share clicked:', item);
            setIsBottomSheetOpen(false);
          }}
          onClose={() => setIsBottomSheetOpen(false)}
        />
      </div>
    </div>
  );
};

export default BottomSheetExamples; 