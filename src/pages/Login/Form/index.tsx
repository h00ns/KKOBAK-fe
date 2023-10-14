import { flx_between, r_gap_1 } from '@/style/display.css';
import { mt_1, mt_2 } from '@/style/margin.css';
import { Button, Input } from 'hoon-ds';
import { useState } from 'react';
import { text_button } from './index.css';
import { useNavigate } from 'react-router-dom';
import { HOME, RESET, SIGN_UP } from '@/constants/routes/routes';
import { useLoginFetch } from '@/hooks/fetch/useAuthFetch';

type LoginFormType = {
  email: string;
  password: string;
};

export default function Form() {
  const navigate = useNavigate();

  const [form, setForm] = useState<LoginFormType>({ email: '', password: '' });

  const { loginMutate } = useLoginFetch();

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

  /**
   *  로그인 submit
   */
  const handleFormSubmit = () => {
    loginMutate(
      { ...form },
      {
        onSuccess: () => {
          navigate(HOME);
        },
      },
    );
  };

  return (
    <form
      className={`${mt_2} ${r_gap_1}`}
      onSubmit={(e) => {
        e.preventDefault();
        handleFormSubmit();
      }}>
      <Input
        name="email"
        value={form.email}
        placeholder="이메일을 입력해주세요"
        onChange={handleFormChange}
      />
      <Input
        name="password"
        type="password"
        value={form.password}
        placeholder="비밀번호를 입력해주세요"
        onChange={handleFormChange}
      />
      <Button className={mt_1} text="로그인하기" />
      <div className={flx_between}>
        <span className={text_button} onClick={() => navigate(RESET)}>
          비밀번호 찾기
        </span>
        <span className={text_button} onClick={() => navigate(SIGN_UP)}>
          회원가입
        </span>
      </div>
    </form>
  );
}
