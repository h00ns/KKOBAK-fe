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
import FormBox from './FormBox';
import { useDateActions, useDayState } from '@/store/date';

const Home = () => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<GetUserInfoResponse>(['user']);

  const { openModal, modalRef, handleModalOpen, handleModalClose } = useModal();

  const [searchParams] = useSearchParams();
  const yQuery = searchParams.get('y') ?? '';
  const mQuery = searchParams.get('m') ?? '';

  const { day } = useDayState();
  const { handleYear, handleMonth } = useDateActions();

  useEffect(() => {
    // month가 없다면 default로 현재 월
    const year = Number(_isValidYear(yQuery) ? yQuery : dayjs().format('YYYY'));
    const month = Number(_isValidMont(mQuery) ? mQuery : dayjs().format('M'));

    handleYear(year);
    handleMonth(month);

    // 유효한 year인지 확인
    function _isValidYear(y: string) {
      const year = Number(y);
      return year > 0 && year < 10000;
    }

    // 유효한 month인지 확인
    function _isValidMont(m: string) {
      const month = Number(m);
      return month > 0 && month < 13;
    }
  }, [yQuery, mQuery]);

  /** 월급날 정보 X  => modal open */
  useEffect(() => {
    if (!user) return;

    if (user.salaryDay === null) {
      handleModalOpen();
    }
  }, [user]);

  return (
    <div>
      <Header />
      <ResultBox />
      {day ? <FormBox /> : <Calendar />}
      <SalaryModal openModal={openModal} ref={modalRef} handleModalClose={handleModalClose} />
    </div>
  );
};

export default withAuth(Home);
