import LabelInput from '@/components/blocks/LabelInput';
import { LOGIN } from '@/constants/routes/routes';
import { useCheckEmailFetch, useSignUpFetch } from '@/hooks/fetch/useUserFetch';
import { flx_c_gap_1 } from '@/style/display.css';
import { mt_1 } from '@/style/margin.css';
import { Button, ButtonVariant, Input, InputVariant } from 'hoon-ds';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp_form } from './index.css';

type SignUpFormType = {
  email: string;
  name: string;
  password: string;
};

export default function Form() {
  const navigate = useNavigate();

  const [form, setForm] = useState<SignUpFormType>({
    email: '',
    name: '',
    password: '',
  });
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const { checkEmailMutate } = useCheckEmailFetch();
  const { signUpMutate } = useSignUpFetch();

  /**
   *  form 변화 핸들링ka
   */
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   *  이메일 인증 submit
   */
  const checkEmailDuplicate = () => {
    const { email } = form;
    checkEmailMutate(
      { email },
      {
        onSuccess: () => {
          setIsEmailVerified(true);
        },
      },
    );
  };

  /**
   *  회원가입 submit
   */
  const handleFormSubmit = () => {
    const { email, name, password } = form;
    signUpMutate(
      { email, name, password },
      {
        onSuccess: () => {
          navigate(LOGIN);
        },
      },
    );
  };

  return (
    <div className={signUp_form}>
      <LabelInput title="이메일">
        <div className={flx_c_gap_1}>
          <Input
            variant={isEmailVerified ? InputVariant.FIXED : InputVariant.DEFAULT}
            name="email"
            value={form.email}
            type="email"
            placeholder="이메일을 입력해주세요"
            onChange={handleFormChange}
          />
          <Button
            disabled={!form.email || isEmailVerified}
            variant={ButtonVariant.PRIMARY}
            text="중복확인"
            onClick={checkEmailDuplicate}
          />
        </div>
      </LabelInput>
      <LabelInput title="이름">
        <Input
          name="name"
          value={form.name}
          placeholder="이름을 입력해주세요"
          onChange={handleFormChange}
        />
      </LabelInput>
      <LabelInput title="비밀번호">
        <Input
          name="password"
          value={form.password}
          type="password"
          placeholder="비밀번호 입력해주세요"
          onChange={handleFormChange}
        />
      </LabelInput>
      <Button
        // disabled={!form.email || !form.name || !form.password || !isEmailVerified}
        className={mt_1}
        text="회원가입"
        onClick={handleFormSubmit}
      />
    </div>
  );
}
