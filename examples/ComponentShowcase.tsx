import React, { useState } from 'react';
import { Button, Input, Checkbox, Radio, Switch, Accordion, Icon, Card, List, Tab, Badge, TextArea, Divider, Select, Chip, ChipGroup, Toast, useToast, Tooltip, TooltipButton } from '../components';

export const ComponentShowcase: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedRadio, setSelectedRadio] = useState('option1');
  const [activeTab, setActiveTab] = useState('tab1');
  const [switchStates, setSwitchStates] = useState({
    notifications: false,
    autoLogin: true,
    disabled: false
  });
  const [textAreaValue, setTextAreaValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [accountSelect, setAccountSelect] = useState('');
  const [chips, setChips] = useState(['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS']);
  const [activeChip, setActiveChip] = useState('React');
  const [toastVisible, setToastVisible] = useState(false);
  const [toastType, setToastType] = useState<'info' | 'success' | 'warning' | 'error'>('info');
  const [toastMessage, setToastMessage] = useState('');

  return (
    <div className="page">
      <div className="container">
        <header className="header">
          <div className="inner">
            <h1 className="title">NDS 컴포넌트 쇼케이스</h1>
          </div>
        </header>

        <main className="contents">
          <div className="content">
            
            {/* 버튼 예제 */}
            <section>
              <h2>Button Components</h2>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Button variant="primary" size="lg">Primary Large</Button>
                <Button variant="secondary" size="md">Secondary Medium</Button>
                <Button variant="tertiary" size="sm">Tertiary Small</Button>
                <Button variant="primary" disabled>Disabled</Button>
              </div>
            </section>

            {/* 입력 필드 예제 */}
            <section style={{ marginTop: '32px' }}>
              <h2>Input Components</h2>
              <Input
                label="기본 입력 필드"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="텍스트를 입력하세요"
              />
              <Input
                label="비밀번호"
                type="password"
                placeholder="비밀번호를 입력하세요"
              />
              <Input
                label="에러 상태"
                state="error"
                error="올바른 형식이 아닙니다"
                placeholder="에러 상태 예제"
              />
            </section>

            {/* 체크박스 예제 */}
            <section style={{ marginTop: '32px' }}>
              <h2>Checkbox Components</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Checkbox
                  label="기본 체크박스"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <Checkbox label="선택된 상태" defaultChecked />
                <Checkbox label="비활성 상태" state="disabled" />
                <Checkbox label="큰 크기" size="lg" />
                <Checkbox label="작은 크기" size="xs" />
              </div>
            </section>

            {/* 아코디언 예제 */}
            <section style={{ marginTop: '32px' }}>
              <h2>Accordion Components</h2>
              <Accordion
                title="계좌 정보"
                subInfo="NH농협은행"
                badge="주거래"
                variant="box"
                type="list"
              >
                <dl className="dl">
                  <div>
                    <dt>계좌번호</dt>
                    <dd>123-456-789012</dd>
                  </div>
                  <div>
                    <dt>잔액</dt>
                    <dd>1,234,567원</dd>
                  </div>
                  <div>
                    <dt>개설일</dt>
                    <dd>2024.01.15</dd>
                  </div>
                </dl>
              </Accordion>
            </section>

            {/* 라디오 버튼 예제 */}
            <section style={{ marginTop: '32px' }}>
              <h2>Radio Components</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Radio
                  label="옵션 1"
                  name="example"
                  value="option1"
                  checked={selectedRadio === 'option1'}
                  onChange={(e) => setSelectedRadio(e.target.value)}
                />
                <Radio
                  label="옵션 2"
                  name="example"
                  value="option2"
                  checked={selectedRadio === 'option2'}
                  onChange={(e) => setSelectedRadio(e.target.value)}
                />
                <Radio label="비활성 옵션" state="disabled" />
              </div>
            </section>

            {/* 스위치 예제 */}
            <section style={{ marginTop: '32px' }}>
              <h2>Switch Components</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Switch 
                  label="알림 받기" 
                  size="lg" 
                  checked={switchStates.notifications}
                  onChange={(e) => setSwitchStates(prev => ({...prev, notifications: e.target.checked}))}
                />
                <Switch 
                  label="자동 로그인" 
                  size="md" 
                  checked={switchStates.autoLogin}
                  onChange={(e) => setSwitchStates(prev => ({...prev, autoLogin: e.target.checked}))}
                />
                <Switch label="비활성 스위치" state="disabled" />
              </div>
            </section>

            {/* 배지 예제 */}
            <section style={{ marginTop: '32px' }}>
              <h2>Badge Components</h2>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Badge variant="new" ariaLabel="새로운 알림이 있습니다">NEW</Badge>
                <Badge variant="line-gray">일반</Badge>
                <Badge variant="solid">중요</Badge>
              </div>
            </section>

            {/* 카드 예제 */}
            <section style={{ marginTop: '32px' }}>
              <h2>Card Components</h2>
              <Card
                variant="account"
                title="주거래우대통장"
                bankCode="011"
                bankName="NH농협"
                accountNumber="111-1234-5678-99"
                hasAccordion={true}
                items={[
                  { title: '잔액', value: '1,234,567원' },
                  { title: '상태', value: '정상' }
                ]}
                hiddenItems={[
                  { title: '개설일', value: '2024.01.15' },
                  { title: '만료일', value: '2025.01.15' }
                ]}
              />
            </section>

            {/* 리스트 예제 */}
            <section style={{ marginTop: '32px' }}>
              <h2>List Components</h2>
              <List
                variant="account"
                items={[
                  {
                    id: '1',
                    title: 'NH농협은행',
                    bankCode: '011',
                    accountNumber: '123-456-789012',
                    isFavorite: true
                  },
                  {
                    id: '2',
                    title: '국민은행',
                    bankCode: '004',
                    accountNumber: '987-654-321098',
                    isFavorite: false
                  }
                ]}
                onFavoriteToggle={(id, isFavorite) => 
                  console.log(`Item ${id} favorite: ${isFavorite}`)
                }
              />
            </section>

            {/* 탭 예제 */}
            <section style={{ marginTop: '32px' }}>
              <h2>Tab Components</h2>
              <Tab
                items={[
                  {
                    id: 'tab1',
                    label: '첫 번째 탭',
                    content: <div style={{ padding: '20px' }}>첫 번째 탭의 내용입니다.</div>
                  },
                  {
                    id: 'tab2',
                    label: '두 번째 탭',
                    content: <div style={{ padding: '20px' }}>두 번째 탭의 내용입니다.</div>
                  },
                  {
                    id: 'tab3',
                    label: '세 번째 탭',
                    content: <div style={{ padding: '20px' }}>세 번째 탭의 내용입니다.</div>
                  }
                ]}
                defaultActiveTab="tab1"
                onTabChange={(tabId) => console.log(`Active tab: ${tabId}`)}
              />
            </section>

            {/* 아이콘 예제 */}
            <section style={{ marginTop: '32px' }}>
              <h2>Icon Components</h2>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '24px', height: '24px', backgroundColor: '#e0e0e0', borderRadius: '4px' }}></div>
                  <span style={{ fontSize: '12px' }}>24px</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '32px', height: '32px', backgroundColor: '#e0e0e0', borderRadius: '4px' }}></div>
                  <span style={{ fontSize: '12px' }}>32px</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: '#e0e0e0', borderRadius: '4px' }}></div>
                  <span style={{ fontSize: '12px' }}>20px</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '28px', height: '28px', backgroundColor: '#e0e0e0', borderRadius: '4px' }}></div>
                  <span style={{ fontSize: '12px' }}>28px</span>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>
                * 아이콘 이미지는 실제 NDS 아이콘 파일이 필요합니다
              </p>
            </section>

            {/* TextArea 예제 */}
            <section style={{ marginTop: '32px' }}>
              <h2>TextArea Components</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <TextArea
                  label="기본 텍스트 영역"
                  value={textAreaValue}
                  onChange={(value) => setTextAreaValue(value)}
                  placeholder="여러 줄의 텍스트를 입력하세요"
                  minRows={4}
                />
                <TextArea
                  label="문자 수 제한 (100자)"
                  placeholder="최대 100자까지 입력 가능"
                  maxLength={100}
                  showCounter={true}
                  minRows={3}
                />
                <TextArea
                  label="자동 크기 조절"
                  placeholder="입력하면 자동으로 크기가 조절됩니다"
                  autoResize={true}
                  minRows={2}
                  maxRows={6}
                />
                <TextArea
                  label="비활성 상태"
                  value="수정할 수 없는 텍스트입니다"
                  disabled
                  minRows={2}
                />
              </div>
            </section>

            {/* Divider 예제 */}
            <section style={{ marginTop: '32px' }}>
              <h2>Divider Components</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <p>콘텐츠 1</p>
                  <Divider type="content-8" />
                  <p>콘텐츠 2 (8px 간격)</p>
                </div>
                
                <div>
                  <p>리스트 아이템 1</p>
                  <Divider type="list-1" />
                  <p>리스트 아이템 2</p>
                  <Divider type="list-1" />
                  <p>리스트 아이템 3 (1px 구분선)</p>
                </div>

                <div>
                  <p>페이지 섹션 1</p>
                  <Divider type="page-1" />
                  <p>페이지 섹션 2 (페이지 구분선)</p>
                </div>
              </div>
            </section>

            {/* Select 예제 */}
            <section style={{ marginTop: '32px' }}>
              <h2>Select Components</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Select
                  label="기본 선택"
                  value={selectedOption}
                  onChange={(value) => setSelectedOption(value)}
                  placeholder="옵션을 선택하세요"
                  options={[
                    { value: 'option1', label: '옵션 1' },
                    { value: 'option2', label: '옵션 2' },
                    { value: 'option3', label: '옵션 3' }
                  ]}
                />
                <Select
                  label="계좌 선택"
                  variant="account"
                  value={accountSelect}
                  onChange={(value) => setAccountSelect(value)}
                  placeholder="계좌를 선택하세요"
                  options={[
                    { value: 'account1', label: 'NH농협은행 123-456-789012' },
                    { value: 'account2', label: '국민은행 987-654-321098' },
                    { value: 'account3', label: '신한은행 555-444-333222' }
                  ]}
                />
                <Select
                  label="관리자 선택"
                  variant="admin"
                  placeholder="관리자를 선택하세요"
                  options={[
                    { value: 'admin1', label: '김관리 (kim@company.com)' },
                    { value: 'admin2', label: '이관리 (lee@company.com)' }
                  ]}
                />
                <Select
                  label="비활성 상태"
                  disabled
                  placeholder="선택할 수 없습니다"
                  options={[
                    { value: 'disabled1', label: '비활성 옵션 1' },
                    { value: 'disabled2', label: '비활성 옵션 2' }
                  ]}
                />
              </div>
            </section>

            {/* Chip 예제 */}
            <section style={{ marginTop: '32px' }}>
              <h2>Chip Components</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* 기본 칩 */}
                <div>
                  <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>기본 칩</h3>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <Chip onClick={() => setActiveChip('React')} active={activeChip === 'React'}>React</Chip>
                    <Chip onClick={() => setActiveChip('Vue')} active={activeChip === 'Vue'}>Vue</Chip>
                    <Chip onClick={() => setActiveChip('Angular')} active={activeChip === 'Angular'}>Angular</Chip>
                    <Chip disabled>비활성</Chip>
                  </div>
                </div>
                
                {/* 삭제 가능한 칩 */}
                <div>
                  <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>삭제 가능한 칩</h3>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {chips.map((chip, index) => (
                      <Chip 
                        key={index}
                        deletable
                        onDelete={() => setChips(chips.filter((_, i) => i !== index))}
                        onClick={() => console.log(`칩 클릭: ${chip}`)}
                      >
                        {chip}
                      </Chip>
                    ))}
                  </div>
                  <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>
                    * 삭제 버튼을 눌러 칩을 제거할 수 있습니다
                  </p>
                </div>
                
                {/* 칩 그룹 */}
                <div>
                  <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>칩 그룹</h3>
                  <ChipGroup variant="basic">
                    <Chip>카테고리 1</Chip>
                    <Chip>카테고리 2</Chip>
                    <Chip>카테고리 3</Chip>
                    <Chip>카테고리 4</Chip>
                  </ChipGroup>
                </div>
              </div>
            </section>

            {/* Toast 예제 */}
            <section style={{ marginTop: '32px' }}>
              <h2>Toast Components</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>토스트 알림</h3>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <Button 
                      variant="primary" 
                      size="sm"
                      onClick={() => {
                        setToastType('info');
                        setToastMessage('정보 메시지입니다.');
                        setToastVisible(true);
                      }}
                    >
                      정보 토스트
                    </Button>
                    <Button 
                      variant="primary" 
                      size="sm"
                      onClick={() => {
                        setToastType('success');
                        setToastMessage('성공적으로 처리되었습니다.');
                        setToastVisible(true);
                      }}
                    >
                      성공 토스트
                    </Button>
                    <Button 
                      variant="primary" 
                      size="sm"
                      onClick={() => {
                        setToastType('warning');
                        setToastMessage('주의가 필요합니다.');
                        setToastVisible(true);
                      }}
                    >
                      경고 토스트
                    </Button>
                    <Button 
                      variant="primary" 
                      size="sm"
                      onClick={() => {
                        setToastType('error');
                        setToastMessage('오류가 발생했습니다.');
                        setToastVisible(true);
                      }}
                    >
                      오류 토스트
                    </Button>
                  </div>
                  <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>
                    * 버튼을 눌러 토스트 알림을 확인해보세요 (3초 후 자동 사라짐)
                  </p>
                </div>
              </div>
            </section>

            {/* 추가 컴포넌트들은 나중에 활성화 예정 */}
            <section style={{ marginTop: '32px' }}>
              <h2>Coming Soon Components</h2>
              <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                <p>🚧 다음 컴포넌트들이 준비 중입니다:</p>
                <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                  <li>✅ TextArea - 다중행 텍스트 입력 (완성!)</li>
                  <li>✅ Divider - 구분선 (완성!)</li>
                  <li>✅ Select - 드롭다운 선택 (완성!)</li>
                  <li>✅ Chip - 태그/칩 (완성!)</li>
                  <li>✅ Toast - 알림 메시지 (완성!)</li>
                  <li>✅ Tooltip - 도움말 (완성!)</li>
                  <li>그 외 20+ 컴포넌트</li>
                </ul>
              </div>
            </section>

            {/* Tooltip 예제 */}
            <section style={{ marginTop: '32px' }}>
              <h2>Tooltip Components</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>툴팁 도움말</h3>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Tooltip content="이것은 hover 툴팁입니다." trigger="hover">
                      <Button variant="secondary" size="sm">호버 툴팁</Button>
                    </Tooltip>
                    
                    <Tooltip content="이것은 클릭 툴팁입니다." trigger="click">
                      <Button variant="secondary" size="sm">클릭 툴팁</Button>
                    </Tooltip>
                    
                    <Tooltip 
                      title="제목이 있는 툴팁" 
                      content="이 툴팁은 제목과 내용을 모두 가지고 있습니다." 
                      trigger="hover"
                    >
                      <Button variant="secondary" size="sm">제목 있는 툴팁</Button>
                    </Tooltip>
                    
                    <TooltipButton 
                      content="도움말 버튼으로 만들어진 툴팁입니다." 
                      label="도움말" 
                      trigger="click"
                    />
                  </div>
                  <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>
                    * 버튼에 마우스를 올리거나 클릭하면 툴팁을 볼 수 있습니다
                  </p>
                </div>
              </div>
            </section>

            {/* 토스트 렌더링 */}
            {toastVisible && (
              <Toast
                message={toastMessage}
                type={toastType}
                visible={toastVisible}
                duration={3000}
                onClose={() => setToastVisible(false)}
              />
            )}

          </div>
        </main>
      </div>
    </div>
  );
};