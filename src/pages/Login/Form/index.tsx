import { r_gap_1 } from '@/style/display.css';
import { mt_2 } from '@/style/margin.css';
import { Button, Input } from 'hoon-ds';
import { useState } from 'react';

export default function Form() {
  const [form, setForm] = useState({ email: '', password: '' });

  /**
   *  form 변화 핸들링
   */
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={`${mt_2} ${r_gap_1}`}>
      <Input
        name="email"
        value={form.email}
        placeholder="이메일을 입력해주세요"
        onChange={handleFormChange}
      />
      <div>
        <Input
          name="password"
          value={form.password}
          placeholder="비밀번호를 입력해주세요"
          onChange={handleFormChange}
        />
      </div>
      <Button text="로그인하기" />
    </div>
  );
}
