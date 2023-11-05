import { useState } from 'react';
import { button_wrap, filter_wrap, form_box, icon_wrap } from './index.css';
import { Button, ButtonVariant, Icon, Input, gray } from 'hoon-ds';
import LabelInput from '@/components/blocks/LabelInput';
import { useDateState } from '@/store/date';
import { flx_end } from '@/style/display.css';
import { returnOnlyNumber } from '@/utils/regex';
import { useCreateRecordFetch } from '@/hooks/fetch/useRecordFetch';
import { useQueryClient } from '@tanstack/react-query';
import { Toast } from '@/utils/toast';
import FilterItem from './FilterItem';
import { FilterCode } from '../hooks/useGetFilterProps';

type Props = {
  setHomeTypeCalendar: () => void;
};

type FormTypes = {
  title: string;
  value: number;
  type: 'income' | 'outcome' | null;
};

export default function FormBox({ setHomeTypeCalendar }: Props) {
  const queryClient = useQueryClient();
  const { year, month, day } = useDateState();

  const [form, setForm] = useState<FormTypes>({
    title: '',
    value: 0,
    type: null,
  });

  const { createRecordMutate } = useCreateRecordFetch();

  /**
   *  금액 변경 핸들링
   */
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = returnOnlyNumber(e.target.value);
    setForm((prev) => ({ ...prev, value }));
  };

  /**
   *  가계부 타입 변경
   */
  const handleType = (type: 'income' | 'outcome') => {
    if (!form.title || !form.value) {
      Toast.error('내용과 금액을 입력해주세요.');
      return;
    }

    setForm((prev) => ({ ...prev, type }));
  };

  /**
   *  가계부 작성 제출
   */
  const handleFormSubmit = (code: number) => {
    if (!form.type) return;

    createRecordMutate(
      { ...form, year, month, day, code },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['getRecord']);
          setHomeTypeCalendar();
        },
      },
    );
  };

  return (
    <div className={form_box}>
      <div className={flx_end}>
        <div className={icon_wrap} onClick={setHomeTypeCalendar}>
          <Icon name="close" size={'16px'} />
        </div>
      </div>

      {/* 입력 form */}
      {!form.type && (
        <>
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
              value={form.value ? form.value.toLocaleString() : ''}
              placeholder="금액을 입력해주세요."
              onChange={handleValueChange}
            />
          </LabelInput>

          <div className={button_wrap}>
            <Button text="지출" variant={ButtonVariant.RED} onClick={() => handleType('outcome')} />
            <Button text="입금" onClick={() => handleType('income')} />
          </div>
        </>
      )}
      {/* 입력 form end */}

      {/* 지출 filter */}
      {form.type === 'outcome' && (
        <div className={filter_wrap}>
          <FilterItem code={FilterCode.FOOD} handleFormSubmit={handleFormSubmit} />
          <FilterItem code={FilterCode.TRANSPORT} handleFormSubmit={handleFormSubmit} />
          <FilterItem code={FilterCode.CULTURE} handleFormSubmit={handleFormSubmit} />
          <FilterItem code={FilterCode.SAVE} handleFormSubmit={handleFormSubmit} />
          <FilterItem code={FilterCode.LIVING} handleFormSubmit={handleFormSubmit} />
          <FilterItem code={FilterCode.CARD} handleFormSubmit={handleFormSubmit} />
          <FilterItem code={FilterCode.UTILITY} handleFormSubmit={handleFormSubmit} />
          <FilterItem code={FilterCode.SHOPPING} handleFormSubmit={handleFormSubmit} />
          <FilterItem code={FilterCode.OUTCOME_ETC} handleFormSubmit={handleFormSubmit} />
        </div>
      )}
      {/* 지출 filter end */}

      {/* 입금 filter */}
      {form.type === 'income' && (
        <div className={filter_wrap}>
          <FilterItem code={FilterCode.SALARY} handleFormSubmit={handleFormSubmit} />
          <FilterItem code={FilterCode.CARRY_OVER} handleFormSubmit={handleFormSubmit} />
          <FilterItem code={FilterCode.INCOME_ETC} handleFormSubmit={handleFormSubmit} />
        </div>
      )}
      {/* 입금 filter end */}
    </div>
  );
}
