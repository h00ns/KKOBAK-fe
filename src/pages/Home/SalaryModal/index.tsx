import { Button, ButtonVariant, Input, Modal } from 'hoon-ds';
import { ForwardedRef, forwardRef, useState } from 'react';
import { button_wrap } from './index.css';
import { returnOnlyNumber } from '@/utils/regex';
import { usePatchSalaryDayFetch } from '@/hooks/fetch/useUserFetch';
import { useQueryClient } from '@tanstack/react-query';
import { GetUserInfoResponse } from '@/apis/user/types';

type Props = {
  openModal: boolean;
  handleModalClose: () => void;
};

const SalaryModal = ({ openModal, handleModalClose }: Props, ref: ForwardedRef<HTMLDivElement>) => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<GetUserInfoResponse>(['user']);
  const [salaryDay, setSalaryDay] = useState(0);

  const { patchSalaryDayMutate } = usePatchSalaryDayFetch();

  /**
   *  변화 핸들링
   */
  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const numberValue = returnOnlyNumber(value);
    if (numberValue <= 31) {
      setSalaryDay(numberValue);
    }
  };

  /**
   *  월급날 변경
   */
  const handleDaySubmit = () => {
    if (!salaryDay) {
      alert('월급날을 입력해주세요.');
      return;
    }

    patchSalaryDayMutate(
      { salaryDay },
      {
        onSuccess: () => {
          if (user) {
            queryClient.setQueryData<GetUserInfoResponse>(['user'], { ...user, salaryDay });
          }
          handleModalClose();
        },
      },
    );
  };

  return (
    <Modal
      openModal={openModal}
      ref={ref}
      title="월급날 등록"
      contents={
        <div>
          <Input
            value={salaryDay === 0 ? '' : salaryDay}
            onChange={handleDayChange}
            placeholder="월급날이 몇일인지 등록하면 D-day로 알려드려요."
          />
        </div>
      }
      footer={
        <div className={button_wrap}>
          <Button variant={ButtonVariant.RED} text="취소" onClick={handleModalClose} />
          <Button text="등록" onClick={handleDaySubmit} />
        </div>
      }
    />
  );
};

export default forwardRef(SalaryModal);
