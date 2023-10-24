import Header from '@/components/layouts/Header';
import Calendar from './Calendar';
import ResultBox from './ResultBox';
import { withAuth } from '@/components/hocs/withAuth';
import { useModal } from '@/hooks/util/useModal';
import SalaryModal from './SalaryModal';
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { GetUserInfoResponse } from '@/apis/user/types';

const Home = () => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<GetUserInfoResponse>(['user']);

  const { openModal, modalRef, handleModalOpen, handleModalClose } = useModal();

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
      <Calendar />

      <SalaryModal openModal={openModal} ref={modalRef} handleModalClose={handleModalClose} />
    </div>
  );
};

export default withAuth(Home);
