import React from 'react';
import Select, { 
  BasicSelect, 
  TwoRowSelect, 
  AccountSelect, 
  AdminSelect,
  BankSelect,
  CurrencySelect,
  IconSelect,
  ListSelect,
  PriceSelect,
  DisabledSelect,
  ErrorSelect,
  FilledSelect,
  FocusSelect,
  InactiveSelect,
  ReadonlySelect
} from '../Select';

const SelectExamples = ({ accountInfo }) => {
  return (
    <div className="component-section">
      <h2 className="component-title">Select Components</h2>
      
      {/* 2row Select */}
      <div className="component-section">
        <h3 className="component-subtitle">2row Select</h3>
        
        {/* State=disabled */}
        <div className="component-section">
          <h4>State=disabled</h4>
          <DisabledSelect
            type="2row"
            label="레이블"
            subDescription="부가설명"
            selectedValue="선택된 옵션입니다"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <ErrorSelect
            type="2row"
            label="레이블"
            subDescription="부가설명"
            selectedValue="선택된 옵션입니다"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <FilledSelect
            type="2row"
            label="레이블"
            subDescription="부가설명"
            selectedValue="선택된 옵션입니다"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=focus */}
        <div className="component-section">
          <h4>State=focus</h4>
          <FocusSelect
            type="2row"
            label="레이블"
            subDescription="부가설명"
            placeholder="선택"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=inactive */}
        <div className="component-section">
          <h4>State=inactive</h4>
          <InactiveSelect
            type="2row"
            label="레이블"
            subDescription="부가설명"
            placeholder="선택"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=readonly */}
        <div className="component-section">
          <h4>State=readonly</h4>
          <ReadonlySelect
            type="2row"
            label="레이블"
            subDescription="부가설명"
            selectedValue="선택된 옵션입니다"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>
      </div>

      {/* Account Select */}
      <div className="component-section">
        <h3 className="component-subtitle">Account Select</h3>
        
        {/* State=disabled */}
        <div className="component-section">
          <h4>State=disabled</h4>
          <DisabledSelect
            type="account"
            label="출금계좌번호"
            accountInfo={{
              bankCode: "011",
              accountName: "주거래우대통장",
              bankName: "NH농협",
              accountNumber: "111-1234-5678-99"
            }}
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <ErrorSelect
            type="account"
            label="출금계좌번호"
            accountInfo={{
              bankCode: "011",
              accountName: "주거래우대통장",
              bankName: "NH농협",
              accountNumber: "111-1234-5678-99"
            }}
            info="오류 메세지 출력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <FilledSelect
            type="account"
            label="출금계좌번호"
            accountInfo={{
              bankCode: "011",
              accountName: "주거래우대통장",
              bankName: "NH농협",
              accountNumber: "111-1234-5678-99"
            }}
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=focus */}
        <div className="component-section">
          <h4>State=focus</h4>
          <FocusSelect
            type="account"
            label="레이블"
            placeholder="출금계좌를 선택해 주세요"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=inactive */}
        <div className="component-section">
          <h4>State=inactive</h4>
          <InactiveSelect
            type="account"
            label="레이블"
            placeholder="출금계좌를 선택해 주세요"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=readonly */}
        <div className="component-section">
          <h4>State=readonly</h4>
          <ReadonlySelect
            type="account"
            label="출금계좌번호"
            accountInfo={{
              bankCode: "011",
              accountName: "주거래우대통장",
              bankName: "NH농협",
              accountNumber: "111-1234-5678-99"
            }}
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>
      </div>

      {/* Admin Select */}
      <div className="component-section">
        <h3 className="component-subtitle">Admin Select</h3>
        
        {/* State=disabled */}
        <div className="component-section">
          <h4>State=disabled</h4>
          <DisabledSelect
            type="admin"
            label="출금계좌번호"
            adminInfo={{
              bankCode: "011",
              name: "금융사명",
              accountNumber: "계좌번호",
              amount: "50,000,000"
            }}
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <ErrorSelect
            type="admin"
            label="출금계좌번호"
            adminInfo={{
              bankCode: "011",
              name: "금융사명",
              accountNumber: "계좌번호",
              amount: "50,000,000"
            }}
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <FilledSelect
            type="admin"
            label="출금계좌번호"
            adminInfo={{
              bankCode: "011",
              name: "금융사명",
              accountNumber: "계좌번호",
              amount: "50,000,000"
            }}
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=focus */}
        <div className="component-section">
          <h4>State=focus</h4>
          <FocusSelect
            type="list"
            label="레이블"
            placeholder="출금계좌 선택"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=inactive */}
        <div className="component-section">
          <h4>State=inactive</h4>
          <InactiveSelect
            type="list"
            label="레이블"
            placeholder="출금계좌 선택"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=readonly */}
        <div className="component-section">
          <h4>State=readonly</h4>
          <ReadonlySelect
            type="admin"
            label="출금계좌번호"
            adminInfo={{
              bankCode: "011",
              name: "금융사명",
              accountNumber: "계좌번호",
              amount: "50,000,000"
            }}
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>
      </div>

      {/* Bank Select */}
      <div className="component-section">
        <h3 className="component-subtitle">Bank Select</h3>
        
        {/* State=disabled */}
        <div className="component-section">
          <h4>State=disabled</h4>
          <DisabledSelect
            type="bank"
            label="출금계좌번호"
            bankInfo={{
              bankCode: "011",
              accountName: "주거래우대통장",
              bankName: "NH농협",
              accountNumber: "111-1234-5678-99"
            }}
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <ErrorSelect
            type="bank"
            label="출금계좌번호"
            bankInfo={{
              bankCode: "011",
              accountName: "주거래우대통장",
              bankName: "NH농협",
              accountNumber: "111-1234-5678-99"
            }}
            info="오류 메세지 출력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <FilledSelect
            type="bank"
            label="출금계좌번호"
            bankInfo={{
              bankCode: "011",
              accountName: "주거래우대통장",
              bankName: "NH농협",
              accountNumber: "111-1234-5678-99"
            }}
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=focus */}
        <div className="component-section">
          <h4>State=focus</h4>
          <FocusSelect
            type="bank"
            label="레이블"
            placeholder="출금계좌를 선택해 주세요"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=inactive */}
        <div className="component-section">
          <h4>State=inactive</h4>
          <InactiveSelect
            type="bank"
            label="레이블"
            placeholder="출금계좌를 선택해 주세요"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=readonly */}
        <div className="component-section">
          <h4>State=readonly</h4>
          <ReadonlySelect
            type="bank"
            label="출금계좌번호"
            bankInfo={{
              bankCode: "011",
              accountName: "주거래우대통장",
              bankName: "NH농협",
              accountNumber: "111-1234-5678-99"
            }}
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>
      </div>

      {/* Basic Select */}
      <div className="component-section">
        <h3 className="component-subtitle">Basic Select</h3>
        
        {/* State=disabled */}
        <div className="component-section">
          <h4>State=disabled</h4>
          <DisabledSelect
            type="basic"
            label="레이블"
            selectedValue="선택된 옵션입니다"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <ErrorSelect
            type="basic"
            label="레이블"
            selectedValue="선택된 옵션입니다"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <FilledSelect
            type="basic"
            label="레이블"
            selectedValue="선택된 옵션입니다"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=focus */}
        <div className="component-section">
          <h4>State=focus</h4>
          <FocusSelect
            type="basic"
            label="레이블"
            placeholder="선택"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=inactive */}
        <div className="component-section">
          <h4>State=inactive</h4>
          <InactiveSelect
            type="basic"
            label="레이블"
            placeholder="선택"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=readonly */}
        <div className="component-section">
          <h4>State=readonly</h4>
          <ReadonlySelect
            type="basic"
            label="레이블"
            selectedValue="선택된 옵션입니다"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>
      </div>

      {/* Currency Select */}
      <div className="component-section">
        <h3 className="component-subtitle">Currency Select</h3>
        
        {/* State=disabled */}
        <div className="component-section">
          <h4>State=disabled</h4>
          <DisabledSelect
            type="currency"
            label="레이블"
            currencyInfo={{
              countryCode: "001"
            }}
            selectedValue="USD"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <ErrorSelect
            type="currency"
            label="레이블"
            currencyInfo={{
              countryCode: "001"
            }}
            selectedValue="USD"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <FilledSelect
            type="currency"
            label="레이블"
            currencyInfo={{
              countryCode: "001"
            }}
            selectedValue="USD"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=focus */}
        <div className="component-section">
          <h4>State=focus</h4>
          <FocusSelect
            type="currency"
            label="레이블"
            placeholder="선택"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=inactive */}
        <div className="component-section">
          <h4>State=inactive</h4>
          <InactiveSelect
            type="currency"
            label="레이블"
            placeholder="선택"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=readonly */}
        <div className="component-section">
          <h4>State=readonly</h4>
          <ReadonlySelect
            type="currency"
            label="레이블"
            currencyInfo={{
              countryCode: "001"
            }}
            selectedValue="USD"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>
      </div>

      {/* Icon Select */}
      <div className="component-section">
        <h3 className="component-subtitle">Icon Select</h3>
        
        {/* State=disabled */}
        <div className="component-section">
          <h4>State=disabled</h4>
          <DisabledSelect
            type="icon"
            label="레이블"
            selectedValue="선택된 옵션입니다"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <ErrorSelect
            type="icon"
            label="레이블"
            selectedValue="선택된 옵션입니다"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <FilledSelect
            type="icon"
            label="레이블"
            selectedValue="선택된 옵션입니다"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=focus */}
        <div className="component-section">
          <h4>State=focus</h4>
          <FocusSelect
            type="icon"
            label="레이블"
            placeholder="선택"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=inactive */}
        <div className="component-section">
          <h4>State=inactive</h4>
          <InactiveSelect
            type="icon"
            label="레이블"
            placeholder="선택"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=readonly */}
        <div className="component-section">
          <h4>State=readonly</h4>
          <ReadonlySelect
            type="icon"
            label="레이블"
            selectedValue="선택된 옵션입니다"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>
      </div>

      {/* List Select */}
      <div className="component-section">
        <h3 className="component-subtitle">List Select</h3>
        
        {/* State=disabled */}
        <div className="component-section">
          <h4>State=disabled</h4>
          <DisabledSelect
            type="list"
            label="레이블"
            listItems={[
              {
                bankCode: "011",
                accountName: "주거래우대통장",
                bankName: "NH농협",
                accountNumber: "111-1234-5678-99",
                title: "제목",
                content: "내용"
              },
              {
                title: "제목",
                content: "내용"
              }
            ]}
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <ErrorSelect
            type="list"
            label="레이블"
            listItems={[
              {
                bankCode: "011",
                accountName: "주거래우대통장",
                bankName: "NH농협",
                accountNumber: "111-1234-5678-99",
                title: "제목",
                content: "내용"
              },
              {
                title: "제목",
                content: "내용"
              }
            ]}
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <FilledSelect
            type="list"
            label="레이블"
            listItems={[
              {
                bankCode: "011",
                accountName: "주거래우대통장",
                bankName: "NH농협",
                accountNumber: "111-1234-5678-99",
                title: "제목",
                content: "내용"
              },
              {
                title: "제목",
                content: "내용"
              }
            ]}
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=focus */}
        <div className="component-section">
          <h4>State=focus</h4>
          <FocusSelect
            type="list"
            label="레이블"
            placeholder="출금계좌를 선택해 주세요"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=inactive */}
        <div className="component-section">
          <h4>State=inactive</h4>
          <InactiveSelect
            type="list"
            label="레이블"
            placeholder="출금계좌를 선택해 주세요"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=readonly */}
        <div className="component-section">
          <h4>State=readonly</h4>
          <ReadonlySelect
            type="list"
            label="레이블"
            listItems={[
              {
                bankCode: "011",
                accountName: "주거래우대통장",
                bankName: "NH농협",
                accountNumber: "111-1234-5678-99",
                title: "제목",
                content: "내용"
              },
              {
                title: "제목",
                content: "내용"
              }
            ]}
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>
      </div>

      {/* Price Select */}
      <div className="component-section">
        <h3 className="component-subtitle">Price Select</h3>
        
        {/* State=disabled */}
        <div className="component-section">
          <h4>State=disabled</h4>
          <DisabledSelect
            type="price"
            label="출금계좌번호"
            priceInfo={{
              bankCode: "011",
              accountName: "주거래우대통장",
              bankName: "NH농협",
              accountNumber: "111-1234-5678-99",
              amount: "150,000,000"
            }}
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <ErrorSelect
            type="price"
            label="출금계좌번호"
            priceInfo={{
              bankCode: "011",
              accountName: "주거래우대통장",
              bankName: "NH농협",
              accountNumber: "111-1234-5678-99",
              amount: "150,000,000"
            }}
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <FilledSelect
            type="price"
            label="출금계좌번호"
            priceInfo={{
              bankCode: "011",
              accountName: "주거래우대통장",
              bankName: "NH농협",
              accountNumber: "111-1234-5678-99",
              amount: "150,000,000"
            }}
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=focus */}
        <div className="component-section">
          <h4>State=focus</h4>
          <FocusSelect
            type="price"
            label="레이블"
            placeholder="출금계좌를 선택해 주세요"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=inactive */}
        <div className="component-section">
          <h4>State=inactive</h4>
          <InactiveSelect
            type="price"
            label="레이블"
            placeholder="출금계좌를 선택해 주세요"
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>

        {/* State=readonly */}
        <div className="component-section">
          <h4>State=readonly</h4>
          <ReadonlySelect
            type="price"
            label="출금계좌번호"
            priceInfo={{
              bankCode: "011",
              accountName: "주거래우대통장",
              bankName: "NH농협",
              accountNumber: "111-1234-5678-99",
              amount: "150,000,000"
            }}
            info="안내 문구 입력"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>
      </div>

      {/* Component Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Component Examples</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <BasicSelect 
            label="기본 선택"
            placeholder="선택해주세요"
            onSelect={(value) => console.log('Selected:', value)}
          />
          <TwoRowSelect 
            label="2행 선택"
            subDescription="부가설명"
            selectedValue="선택된 옵션입니다"
            onSelect={(value) => console.log('Selected:', value)}
          />
          <AccountSelect 
            label="출금계좌번호"
            accountInfo={accountInfo}
            onSelect={(value) => console.log('Selected:', value)}
          />
          <AdminSelect
            label="관리자 선택"
            adminInfo={{
              bankCode: "011",
              name: "금융사명",
              accountNumber: "계좌번호",
              amount: "50,000,000"
            }}
            onSelect={(value) => console.log('Selected:', value)}
          />
          <BankSelect
            label="은행 선택"
            bankInfo={{
              bankCode: "011",
              accountName: "주거래우대통장",
              bankName: "NH농협",
              accountNumber: "111-1234-5678-99"
            }}
            onSelect={(value) => console.log('Selected:', value)}
          />
          <CurrencySelect
            label="통화 선택"
            currencyInfo={{
              countryCode: "001"
            }}
            selectedValue="USD"
            onSelect={(value) => console.log('Selected:', value)}
          />
          <IconSelect
            label="아이콘 선택"
            selectedValue="선택된 옵션입니다"
            onSelect={(value) => console.log('Selected:', value)}
          />
          <ListSelect
            label="목록 선택"
            listItems={[
              {
                bankCode: "011",
                accountName: "주거래우대통장",
                bankName: "NH농협",
                accountNumber: "111-1234-5678-99",
                title: "제목",
                content: "내용"
              }
            ]}
            onSelect={(value) => console.log('Selected:', value)}
          />
          <PriceSelect
            label="가격 선택"
            priceInfo={{
              bankCode: "011",
              accountName: "주거래우대통장",
              bankName: "NH농협",
              accountNumber: "111-1234-5678-99",
              amount: "150,000,000"
            }}
            onSelect={(value) => console.log('Selected:', value)}
          />
          <FilledSelect 
            label="채워진 선택"
            selectedValue="선택된 값"
            onSelect={(value) => console.log('Selected:', value)}
          />
          <ErrorSelect 
            label="오류 선택"
            selectedValue="잘못된 선택"
            info="다시 선택해주세요"
            onSelect={(value) => console.log('Selected:', value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectExamples;