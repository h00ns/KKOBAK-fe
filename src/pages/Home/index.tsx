import Header from '@/pages/Home/Header';
import Calendar from './Calendar';
import ResultBox from './ResultBox';
import { withAuth } from '@/components/hocs/withAuth';
import { useModal } from '@/hooks/util/useModal';
import SalaryModal from './SalaryModal';
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { GetUserInfoResponse } from '@/apis/user/types';
import { useSearchParams } from 'react-router-dom';
import dayjs from 'dayjs';

const Home = () => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<GetUserInfoResponse>(['user']);

  const { openModal, modalRef, handleModalOpen, handleModalClose } = useModal();

  const [searchParams] = useSearchParams();
  const yQuery = searchParams.get('y') ?? '';
  const mQuery = searchParams.get('m') ?? '';

  // 유효한 year인지 확인
  const isValidYear = (y: string) => {
    const year = Number(y);
    return year > 0 && year < 10000;
  };

  // 유효한 month인지 확인
  const isValidMont = (m: string) => {
    const month = Number(m);
    return month > 0 && month < 13;
  };

  // month가 없다면 default로 현재 월
  const year = Number(isValidYear(yQuery ?? '') ? yQuery : dayjs().format('YYYY'));
  const month = Number(isValidMont(mQuery ?? '') ? mQuery : dayjs().format('M'));

  /** 월급날 정보 X  => modal open */
  useEffect(() => {
    if (!user) return;

    if (user.salaryDay === null) {
      handleModalOpen();
    }
  }, [user]);

  return (
    <div>
      <Header year={year} month={month} />
      <ResultBox year={year} month={month} />
      <Calendar year={year} month={month} />

      <SalaryModal openModal={openModal} ref={modalRef} handleModalClose={handleModalClose} />
    </div>
  );
};

export default withAuth(Home);
