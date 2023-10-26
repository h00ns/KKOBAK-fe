import { useState } from 'react';
import { button_wrap, form_box, icon_wrap } from './index.css';
import { Button, ButtonVariant, Icon, Input, gray } from 'hoon-ds';
import LabelInput from '@/components/blocks/LabelInput';
import { useDateActions, useDateState } from '@/store/date';
import { flx_end } from '@/style/display.css';
import { returnOnlyNumber } from '@/utils/regex';

type FormTypes = {
  title: string;
  value: number;
};

export default function FormBox() {
  const { year, month, day } = useDateState();
  const { handleDay } = useDateActions();

  const [form, setForm] = useState<FormTypes>({
    title: '',
    value: 0,
  });

  /**
   *  금액 변경 핸들링
   */
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = returnOnlyNumber(e.target.value);
    setForm((prev) => ({ ...prev, value }));
  };

  /**
   *  가계부 작성 제출
   */
  const handleFormSubmit = (type: 'income' | 'outcome') => {
    console.log({
      year,
      month,
      day,
      type,
      ...form,
    });
  };

  return (
    <div className={form_box}>
      <div className={flx_end}>
        <div className={icon_wrap} onClick={() => handleDay(0)}>
          <Icon name="close" size={'16px'} />
        </div>
      </div>

      <LabelInput title="내용" color={gray.gray6}>
        <Input
          name="title"
          value={form.title}
          placeholder="내용을 입력해주세요."
          onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
        />
      </LabelInput>
      <LabelInput title="금액" color={gray.gray6}>
        <Input
          name="value"
          value={form.value ? form.value : ''}
          placeholder="금액을 입력해주세요."
          onChange={handleValueChange}
        />
      </LabelInput>

      <div className={button_wrap}>
        <Button
          text="지출"
          variant={ButtonVariant.RED}
          onClick={() => handleFormSubmit('outcome')}
        />
        <Button text="입금" onClick={() => handleFormSubmit('income')} />
      </div>
    </div>
  );
}
