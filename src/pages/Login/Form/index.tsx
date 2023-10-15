import { flx_between } from '@/style/display.css';
import { mt_1 } from '@/style/margin.css';
import { Button, Input } from 'hoon-ds';
import { useState } from 'react';
import { google_btn, login_form, text_btn } from './index.css';
import { useNavigate } from 'react-router-dom';
import { HOME, RESET, SIGN_UP } from '@/constants/routes/routes';
import { useGoogleLoginFetch, useLoginFetch } from '@/hooks/fetch/useAuthFetch';
import GoogleImg from '@/assets/images/google.png';

type LoginFormType = {
  email: string;
  password: string;
};

export default function Form() {
  const navigate = useNavigate();

  const [form, setForm] = useState<LoginFormType>({ email: '', password: '' });

  const { loginMutate } = useLoginFetch();
  const { googleLoginMutate } = useGoogleLoginFetch();

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
  const handleLogin = () => {
    loginMutate(
      { ...form },
      {
        onSuccess: () => {
          navigate(HOME);
        },
      },
    );
  };

  /**
   *  구글 로그인 submit
   */
  const handleGoogleLogin = () => {
    googleLoginMutate(void 0, {});
  };

  return (
    <form
      className={login_form}
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
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
      <button className={google_btn} type="button" onClick={handleGoogleLogin}>
        <img width={16} height={16} src={GoogleImg} alt="google" />
        Google로 로그인
      </button>
      <div className={flx_between}>
        <span className={text_btn} onClick={() => navigate(RESET)}>
          비밀번호 찾기
        </span>
        <span className={text_btn} onClick={() => navigate(SIGN_UP)}>
          회원가입
        </span>
      </div>
    </form>
  );
}
