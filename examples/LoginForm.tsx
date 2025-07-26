import React, { useState } from 'react';
import { Button, Input, Checkbox } from '../components';

export const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('로그인 정보:', formData);
  };

  return (
    <div className="page">
      <div className="container">
        <header className="header">
          <div className="inner">
            <h1 className="title">로그인</h1>
          </div>
        </header>

        <main className="contents">
          <div className="content">
            <form onSubmit={handleSubmit}>
              <Input
                label="아이디"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="아이디를 입력하세요"
                required
              />

              <Input
                label="비밀번호"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="비밀번호를 입력하세요"
                required
              />

              <Checkbox
                label="로그인 상태 유지"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
              />

              <div className="buttons">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                >
                  로그인
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};