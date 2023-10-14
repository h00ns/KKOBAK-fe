import LabelInput from '@/components/blocks/LabelInput';
import { LOGIN } from '@/constants/routes/routes';
import { usePatchPasswordFetch, useSendResetCodeFetch } from '@/hooks/fetch/useUserFetch';
import { c_gap_1, r_gap_1 } from '@/style/display.css';
import { mt_1, mt_2 } from '@/style/margin.css';
import { Button, Input, InputVariant } from 'hoon-ds';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    resetCode: '',
    password: '',
  });
  const [isSendResetCode, setIsSendResetCode] = useState(false);

  const { sendResetCodeMutate } = useSendResetCodeFetch();
  const { patchPasswordMutate } = usePatchPasswordFetch();

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
   *  비밀번호 재설정 이메일 발송 submit
   */
  const handleEmailSubmit = () => {
    sendResetCodeMutate(
      { email: form.email },
      {
        onSuccess: (res) => {
          setIsSendResetCode(true);
          alert(res.data.message);
        },
      },
    );
  };

  /**
   *  비밀번호 재설정 submit
   */
  const handleFormSubmit = () => {
    patchPasswordMutate(
      { ...form },
      {
        onSuccess: () => {
          navigate(LOGIN);
        },
      },
    );
  };

  return (
    <div className={`${mt_2} ${r_gap_1}`}>
      <LabelInput title="이메일">
        <div className={c_gap_1}>
          <Input
            variant={isSendResetCode ? InputVariant.FIXED : InputVariant.DEFAULT}
            name="email"
            value={form.email}
            placeholder="이메일을 입력해주세요"
            onChange={handleFormChange}
          />
          <Button
            disabled={!form.email || isSendResetCode}
            text="인증하기"
            onClick={handleEmailSubmit}
          />
        </div>
      </LabelInput>
      {isSendResetCode && (
        <>
          <LabelInput title="인증번호">
            <Input
              name="resetCode"
              value={form.resetCode}
              placeholder="인증번호를 입력해주세요"
              onChange={handleFormChange}
            />
          </LabelInput>
          <LabelInput title="비밀번호">
            <Input
              name="password"
              type="password"
              value={form.password}
              placeholder="재설정할 비밀번호를 입력해주세요"
              onChange={handleFormChange}
            />
          </LabelInput>
          <Button
            disabled={!form.password || !form.resetCode}
            className={mt_1}
            text="비밀번호 재설정"
            onClick={handleFormSubmit}
          />
        </>
      )}
    </div>
  );
}
