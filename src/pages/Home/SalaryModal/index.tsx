import { Button, ButtonVariant, Input, Modal } from 'hoon-ds';
import { ForwardedRef, forwardRef, useState } from 'react';
import { button_wrap } from './index.css';
import { returnOnlyNumber } from '@/utils/regex';

type Props = {
  openModal: boolean;
  handleModalClose: () => void;
};

const SalaryModal = ({ openModal, handleModalClose }: Props, ref: ForwardedRef<HTMLDivElement>) => {
  const [day, setDay] = useState<number | ''>('');

  /**
   *  변화 핸들링
   */
  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const numberValue = returnOnlyNumber(value);
    if (numberValue <= 31) {
      setDay(numberValue);
    }
  };

  return (
    <Modal
      openModal={openModal}
      ref={ref}
      title="월급날 등록"
      contents={
        <div>
          <Input
            value={day}
            onChange={handleDayChange}
            placeholder="월급날이 몇일인지 등록하면 D-day로 알려드려요."
          />
        </div>
      }
      footer={
        <div className={button_wrap}>
          <Button variant={ButtonVariant.RED} text="취소" onClick={handleModalClose} />
          <Button text="등록" />
        </div>
      }
    />
  );
};

export default forwardRef(SalaryModal);
