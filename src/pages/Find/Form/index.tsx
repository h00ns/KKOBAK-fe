import LabelInput from '@/components/blocks/LabelInput';
import { useSendResetCodeFetch } from '@/hooks/fetch/useUserFetch';
import { c_gap_1, r_gap_1 } from '@/style/display.css';
import { mt_2 } from '@/style/margin.css';
import { Button, Input } from 'hoon-ds';
import { useState } from 'react';

export default function Form() {
  const [email, setEmail] = useState('');

  const { sendResetCodeMutate } = useSendResetCodeFetch();

  /**
   *  비밀번호 재설정 이메일 발송 submit
   */
  const handleEmailSubmit = () => {
    sendResetCodeMutate({ email });
  };

  return (
    <div className={`${mt_2} ${r_gap_1}`}>
      <LabelInput title="이메일">
        <div className={c_gap_1}>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          <Button disabled={!email} text="인증하기" onClick={handleEmailSubmit} />
        </div>
      </LabelInput>
    </div>
  );
}
