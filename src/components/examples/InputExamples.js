import React, { useState } from 'react';
import Input from '../Input';

const InputExamples = () => {
  const [inputValues, setInputValues] = useState({
    basic: '',
    password: '',
    rrn: '',
    serial: '',
    price: '',
    unit1: '',
    unit2: '',
    unit3: ''
  });

  const handleInputChange = (field, value) => {
    setInputValues(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="component-section">
      <h2 className="component-title">Input Components</h2>
      
      {/* Box Input - Basic */}
      <div className="component-section">
        <h3 className="component-subtitle">Box Input - Basic</h3>
        
        {/* State=inactive */}
        <div className="component-section">
          <h4>State=inactive</h4>
          <Input
            type="basic"
            state="inactive"
            label="레이블"
            placeholder="플레이스홀더"
            info="안내 문구 입력"
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <Input
            type="basic"
            state="filled"
            label="레이블"
            value="입력된 텍스트 입니다"
            placeholder="금액을 입력하세요"
            info="안내 문구 입력"
          />
        </div>

        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <Input
            type="basic"
            state="error"
            label="레이블"
            value="입력된 텍스트 입니다"
            placeholder="이름을 입력하세요"
            info="오류 메세지 출력"
          />
        </div>

        {/* State=disabled */}
        <div className="component-section">
          <h4>State=disabled</h4>
          <Input
            type="basic"
            state="disabled"
            label="레이블"
            value="입력된 텍스트 입니다"
            placeholder="이름을 입력하세요"
            info="안내 문구 입력"
          />
        </div>

        {/* State=readonly */}
        <div className="component-section">
          <h4>State=readonly</h4>
          <Input
            type="basic"
            state="readonly"
            label="레이블"
            value="입력된 텍스트 입니다"
            placeholder="이름을 입력하세요"
            info="안내 문구 입력"
          />
        </div>

        {/* State=success */}
        <div className="component-section">
          <h4>State=success</h4>
          <Input
            type="basic"
            state="success"
            label="레이블"
            value="입력된 텍스트 입니다"
            placeholder="이름을 입력하세요"
            info="안내 문구 입력"
          />
        </div>
      </div>

      {/* Box Input - Password */}
      <div className="component-section">
        <h3 className="component-subtitle">Box Input - Password</h3>
        
        {/* State=inactive */}
        <div className="component-section">
          <h4>State=inactive</h4>
          <Input
            type="password"
            state="inactive"
            label="비밀번호"
            placeholder="비밀번호를 입력하세요"
            info="안내 문구 입력"
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <Input
            type="password"
            state="filled"
            label="비밀번호"
            value="••••••••"
            info="안내 문구 입력"
          />
        </div>

        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <Input
            type="password"
            state="error"
            label="비밀번호"
            value="••••••••"
            info="오류 메시지 출력"
          />
        </div>

        {/* State=focus */}
        <div className="component-section">
          <h4>State=focus</h4>
          <Input
            type="password"
            state="focus"
            label="비밀번호"
            value="••••••••"
            info="안내 문구 입력"
          />
        </div>
      </div>

      {/* Box Input - RRN */}
      <div className="component-section">
        <h3 className="component-subtitle">Box Input - RRN</h3>
        
        {/* State=inactive */}
        <div className="component-section">
          <h4>State=inactive</h4>
          <Input
            type="rrn1"
            state="inactive"
            label="주민등록번호"
            info="안내 문구 입력"
          />
        </div>

        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <Input
            type="rrn1"
            state="error"
            label="주민등록번호"
            value="123456"
            info="오류 메시지 출력"
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <Input
            type="rrn1"
            state="filled"
            label="주민등록번호"
            value="123456"
            info="안내 문구 입력"
          />
        </div>

        {/* State=focus */}
        <div className="component-section">
          <h4>State=focus</h4>
          <Input
            type="rrn1"
            state="focus"
            label="주민등록번호"
            value="123456"
            info="안내 문구 입력"
          />
        </div>
      </div>

      {/* Box Input - Serial */}
      <div className="component-section">
        <h3 className="component-subtitle">Box Input - Serial</h3>
        
        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <Input
            type="serial"
            state="error"
            label="레이블"
            value="1234-1234-1234"
            info="안내 문구 입력"
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <Input
            type="serial"
            state="filled"
            label="레이블"
            value="1234-1234-1234"
            info="안내 문구 입력"
          />
        </div>
      </div>

      {/* Box Input - 16자리 Serial (일련번호) */}
      <div className="component-section">
        <h3 className="component-subtitle">Box Input - 16자리 Serial (일련번호)</h3>
        
        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <Input
            type="16serial"
            state="error"
            label="레이블"
            value="1234-1234-1234-1234"
            info="안내 문구 입력"
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <Input
            type="16serial"
            state="filled"
            label="레이블"
            value="1234-1234-1234-1234"
            info="안내 문구 입력"
          />
        </div>
      </div>

      {/* Box Input - Price */}
      <div className="component-section">
        <h3 className="component-subtitle">Box Input - Price</h3>
        
        {/* State=disabled */}
        <div className="component-section">
          <h4>State=disabled</h4>
          <Input
            type="price"
            state="disabled"
            label="레이블"
            value="70000000"
            info="안내 문구 입력"
          />
        </div>

        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <Input
            type="price"
            state="error"
            label="레이블"
            value="70000000"
            info="오류 메세지 출력"
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <Input
            type="price"
            state="filled"
            label="레이블"
            value="70000000"
            info="안내 문구 입력"
          />
        </div>

        {/* State=focus */}
        <div className="component-section">
          <h4>State=focus</h4>
          <Input
            type="price"
            state="focus"
            label="레이블"
            value="70000000"
            info="안내 문구 입력"
          />
        </div>

        {/* State=inactive */}
        <div className="component-section">
          <h4>State=inactive</h4>
          <Input
            type="price"
            state="inactive"
            label="레이블"
            placeholder="플레이스홀더"
            info="안내 문구 입력"
          />
        </div>

        {/* State=readonly */}
        <div className="component-section">
          <h4>State=readonly</h4>
          <Input
            type="price"
            state="readonly"
            label="레이블"
            value="70000000"
            info="안내 문구 입력"
          />
        </div>
      </div>

      {/* Box Input - Unit1 (Percent) */}
      <div className="component-section">
        <h3 className="component-subtitle">Box Input - Unit1 (Percent)</h3>
        
        {/* State=disabled */}
        <div className="component-section">
          <h4>State=disabled</h4>
          <Input
            type="unit1"
            state="disabled"
            label="레이블"
            value="75"
            placeholder="1~99"
            info="안내 문구 입력"
          />
        </div>

        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <Input
            type="unit1"
            state="error"
            label="레이블"
            value="96"
            placeholder="1~99"
            info="안내 문구 입력"
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <Input
            type="unit1"
            state="filled"
            label="레이블"
            value="99"
            placeholder="1~99"
            info="안내 문구 입력"
          />
        </div>

        {/* State=focus */}
        <div className="component-section">
          <h4>State=focus</h4>
          <Input
            type="unit1"
            state="focus"
            label="레이블"
            value="98"
            placeholder="1~99"
            info="안내 문구 입력"
          />
        </div>

        {/* State=inactive */}
        <div className="component-section">
          <h4>State=inactive</h4>
          <Input
            type="unit1"
            state="inactive"
            label="레이블"
            placeholder="1~99 이내로 입력"
            info="안내 문구 입력"
          />
        </div>

        {/* State=readonly */}
        <div className="component-section">
          <h4>State=readonly</h4>
          <Input
            type="unit1"
            state="readonly"
            label="레이블"
            value="75"
            placeholder="1~99"
            info="안내 문구 입력"
          />
        </div>
      </div>

      {/* Box Input - Unit2 (Address) */}
      <div className="component-section">
        <h3 className="component-subtitle">Box Input - Unit2 (Address)</h3>
        
        {/* State=disabled */}
        <div className="component-section">
          <h4>State=disabled</h4>
          <Input
            type="unit2"
            state="disabled"
            label="동/호"
            value="102-3106"
            info="안내문구 입력"
          />
        </div>

        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <Input
            type="unit2"
            state="error"
            label="동/호"
            value="102-3106"
            info="오류 메세지 출력"
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <Input
            type="unit2"
            state="filled"
            label="동/호"
            value="1234-1234"
            info="안내 문구 입력"
          />
        </div>

        {/* State=focus */}
        <div className="component-section">
          <h4>State=focus</h4>
          <Input
            type="unit2"
            state="focus"
            label="동/호"
            value="1234-"
            info="안내 문구 입력"
          />
        </div>

        {/* State=inactive */}
        <div className="component-section">
          <h4>State=inactive</h4>
          <Input
            type="unit2"
            state="inactive"
            label="동/호"
            info="안내 문구 입력"
          />
        </div>

        {/* State=readonly */}
        <div className="component-section">
          <h4>State=readonly</h4>
          <Input
            type="unit2"
            state="readonly"
            label="동/호"
            value="102-3106"
            info="오류 메세지 출력"
          />
        </div>
      </div>

      {/* Box Input - Code (인증번호) */}
      <div className="component-section">
        <h3 className="component-subtitle">Box Input - Code (인증번호)</h3>
        
        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <Input
            type="code"
            state="error"
            label="레이블"
            value="123456"
            placeholder="인증번호 6자리"
            info="안내 문구 입력"
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <Input
            type="code"
            state="filled"
            label="레이블"
            value="123456"
            placeholder="인증번호 6자리"
            info="안내 문구 입력"
          />
        </div>

        {/* State=focus */}
        <div className="component-section">
          <h4>State=focus</h4>
          <Input
            type="code"
            state="focus"
            label="레이블"
            value="123456"
            placeholder="인증번호 6자리"
            info="안내 문구 입력"
          />
        </div>
      </div>

      {/* Box Input - Combination (휴대폰번호) */}
      <div className="component-section">
        <h3 className="component-subtitle">Box Input - Combination (휴대폰번호)</h3>
        
        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <Input
            type="combination"
            state="error"
            label="레이블"
            value="01012345678"
            placeholder="-없이 입력"
            info="안내 문구 입력"
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <Input
            type="combination"
            state="filled"
            label="레이블"
            value="01012345678"
            placeholder="-없이 입력"
            info="안내 문구 입력"
          />
        </div>
      </div>

      {/* Box Input - Currency (외화) */}
      <div className="component-section">
        <h3 className="component-subtitle">Box Input - Currency (외화)</h3>
        
        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <Input
            type="currency"
            state="error"
            label="외화신청금액"
            value="50,000,000.00"
            placeholder="통화선택 후 숫자입력"
            info="안내 문구 입력"
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <Input
            type="currency"
            state="filled"
            label="외화신청금액"
            value="50,000,000.00"
            placeholder="통화선택 후 숫자입력"
            info="안내 문구 입력"
          />
        </div>
      </div>

      {/* Box Input - Dollar (달러) */}
      <div className="component-section">
        <h3 className="component-subtitle">Box Input - Dollar (달러)</h3>
        
        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <Input
            type="dollar"
            state="error"
            label="외화신청금액"
            value="5000000"
            placeholder="1,000 이상"
            info="최소 가입 금액 이상 입력해 주세요."
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <Input
            type="dollar"
            state="filled"
            label="외화신청금액"
            value="50,000,000"
            placeholder="1,000 이상"
            info="안내 문구 입력"
          />
        </div>
      </div>

      {/* Box Input - Inner (내부) */}
      <div className="component-section">
        <h3 className="component-subtitle">Box Input - Inner (내부)</h3>
        
        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <Input
            type="inner"
            state="error"
            label="레이블"
            value="입력된 텍스트 입니다"
            placeholder="placeholder text"
            info="안내 문구 입력"
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <Input
            type="inner"
            state="filled"
            label="레이블"
            value="입력된 텍스트 입니다"
            placeholder="placeholder text"
            info="안내 문구 입력"
          />
        </div>
      </div>

      {/* Box Input - Password (비밀번호) */}
      <div className="component-section">
        <h3 className="component-subtitle">Box Input - Password (비밀번호)</h3>
        
        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <Input
            type="password"
            state="error"
            label="비밀번호"
            value="1212"
            placeholder="비밀번호 4자리 입력"
            maxLength={4}
            info="비밀번호가 일치하지 않습니다."
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <Input
            type="password"
            state="filled"
            label="비밀번호"
            value="1212"
            placeholder="비밀번호 4자리 입력"
            maxLength={4}
            info="안내 문구 입력"
          />
        </div>
      </div>

      {/* Box Input - Point (포인트) */}
      <div className="component-section">
        <h3 className="component-subtitle">Box Input - Point (포인트)</h3>
        
        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <Input
            type="point"
            state="error"
            label="외화신청금액"
            value="5,000,000.00"
            placeholder="1,000 이상"
            info="최소 가입 금액 이상 입력해 주세요."
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <Input
            type="point"
            state="filled"
            label="외화신청금액"
            value="50,000,000.00"
            placeholder="1,000 이상"
            info="안내 문구 입력"
          />
        </div>
      </div>

      {/* Box Input - Unit3 (양수/음수) */}
      <div className="component-section">
        <h3 className="component-subtitle">Box Input - Unit3 (양수/음수)</h3>
        
        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <Input
            type="unit3"
            state="error"
            label="레이블"
            value="99"
            placeholder="1 ~ 99 이내로 입력"
            info="안내 문구 입력"
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <Input
            type="unit3"
            state="filled"
            label="레이블"
            value="99"
            placeholder="1 ~ 99 이내로 입력"
            info="안내 문구 입력"
          />
        </div>
      </div>

      {/* Line Input - Basic */}
      <div className="component-section">
        <h3 className="component-subtitle">Line Input - Basic</h3>
        
        {/* State=inactive */}
        <div className="component-section">
          <h4>State=inactive</h4>
          <Input
            type="basic"
            state="inactive"
            label="레이블"
            placeholder="플레이스홀더"
            info="안내 문구 입력"
            className="line"
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <Input
            type="basic"
            state="filled"
            label="레이블"
            value="입력된 텍스트 입니다."
            placeholder="금액을 입력하세요"
            info="안내 문구 입력"
            className="line"
          />
        </div>

        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <Input
            type="basic"
            state="error"
            label="레이블"
            value="입력된 텍스트 입니다."
            placeholder="금액을 입력하세요"
            info="오류 메시지 출력"
            className="line"
          />
        </div>

        {/* State=focus */}
        <div className="component-section">
          <h4>State=focus</h4>
          <Input
            type="basic"
            state="focus"
            label="레이블"
            value="입력된 텍스트 입니다."
            placeholder="금액을 입력하세요"
            info="안내 문구 입력"
            className="line"
          />
        </div>
      </div>

      {/* Line Input - Combination */}
      <div className="component-section">
        <h3 className="component-subtitle">Line Input - Combination</h3>
        
        {/* State=inactive */}
        <div className="component-section">
          <h4>State=inactive</h4>
          <Input
            type="combination"
            state="inactive"
            label="레이블"
            placeholder="-없이 입력"
            info="안내 문구 입력"
            className="line"
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <Input
            type="combination"
            state="filled"
            label="레이블"
            value="12345678"
            placeholder="-없이 입력"
            info="안내 문구 입력"
            className="line"
          />
        </div>

        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <Input
            type="combination"
            state="error"
            label="레이블"
            value="12345678"
            placeholder="-없이 입력"
            info="안내 문구 입력"
            className="line"
          />
        </div>

        {/* State=focus */}
        <div className="component-section">
          <h4>State=focus</h4>
          <Input
            type="combination"
            state="focus"
            label="레이블"
            value="12345678"
            placeholder="-없이 입력"
            info="안내 문구 입력"
            className="line"
          />
        </div>
      </div>

      {/* Line Input - Password */}
      <div className="component-section">
        <h3 className="component-subtitle">Line Input - Password</h3>
        
        {/* State=inactive */}
        <div className="component-section">
          <h4>State=inactive</h4>
          <Input
            type="password"
            state="inactive"
            label="레이블"
            placeholder="플레이스홀더"
            info="안내 문구 입력"
            className="line"
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <Input
            type="password"
            state="filled"
            label="레이블"
            value="12345678"
            placeholder="플레이스홀더"
            info="안내 문구 입력"
            className="line"
          />
        </div>

        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <Input
            type="password"
            state="error"
            label="레이블"
            value="12345678"
            placeholder="플레이스홀더"
            info="안내 문구 입력"
            className="line"
          />
        </div>

        {/* State=focus */}
        <div className="component-section">
          <h4>State=focus</h4>
          <Input
            type="password"
            state="focus"
            label="레이블"
            value="12345678"
            placeholder="플레이스홀더"
            info="안내 문구 입력"
            className="line"
          />
        </div>
      </div>

      {/* Line Input - Price */}
      <div className="component-section">
        <h3 className="component-subtitle">Line Input - Price</h3>
        
        {/* State=inactive */}
        <div className="component-section">
          <h4>State=inactive</h4>
          <Input
            type="price"
            state="inactive"
            label="레이블"
            placeholder="금액 입력"
            info="안내 문구 입력"
            className="line"
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <Input
            type="price"
            state="filled"
            label="레이블"
            value="50,000,000"
            placeholder="금액 입력"
            info="안내 문구 입력"
            className="line"
          />
        </div>

        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <Input
            type="price"
            state="error"
            label="레이블"
            value="50,000,000"
            placeholder="금액 입력"
            info="안내 문구 입력"
            className="line"
          />
        </div>

        {/* State=focus */}
        <div className="component-section">
          <h4>State=focus</h4>
          <Input
            type="price"
            state="focus"
            label="레이블"
            value="50,000,000"
            placeholder="금액 입력"
            info="안내 문구 입력"
            className="line"
          />
        </div>
      </div>

      {/* Line Input - RRN */}
      <div className="component-section">
        <h3 className="component-subtitle">Line Input - RRN</h3>
        
        {/* State=inactive */}
        <div className="component-section">
          <h4>State=inactive</h4>
          <Input
            type="rrn"
            state="inactive"
            label="주민등록번호"
            frontValue=""
            backValue=""
            info="안내 문구 입력"
            className="line"
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <Input
            type="rrn"
            state="filled"
            label="주민등록번호"
            frontValue="801102"
            backValue="1159345"
            info="안내 문구 입력"
            className="line"
          />
        </div>

        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <Input
            type="rrn"
            state="error"
            label="주민등록번호"
            frontValue="801102"
            backValue="1159345"
            info="오류 메세지 출력"
            className="line"
          />
        </div>

        {/* State=focus */}
        <div className="component-section">
          <h4>State=focus</h4>
          <Input
            type="rrn"
            state="focus"
            label="주민등록번호"
            frontValue="900405"
            backValue="1234567"
            info="안내 문구 입력"
            className="line"
          />
        </div>
      </div>

      {/* Line Input - Unit */}
      <div className="component-section">
        <h3 className="component-subtitle">Line Input - Unit</h3>
        
        {/* State=inactive */}
        <div className="component-section">
          <h4>State=inactive</h4>
          <Input
            type="unit1"
            state="inactive"
            label="레이블"
            placeholder="1~99"
            info="안내 문구 입력"
            className="line"
          />
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <Input
            type="unit1"
            state="filled"
            label="레이블"
            value="99"
            placeholder="1~99"
            info="안내 문구 입력"
            className="line"
          />
        </div>

        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <Input
            type="unit1"
            state="error"
            label="레이블"
            value="99"
            placeholder="1~99"
            info="안내 문구 입력"
            className="line"
          />
        </div>

        {/* State=focus */}
        <div className="component-section">
          <h4>State=focus</h4>
          <Input
            type="unit1"
            state="focus"
            label="레이블"
            value="99"
            placeholder="1~99"
            info="안내 문구 입력"
            className="line"
          />
        </div>
      </div>
    </div>
  );
};

export default InputExamples; 