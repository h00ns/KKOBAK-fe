import Header from '@/components/blocks/Header';
import Calendar from './Calendar';
import ResultBox from '../../components/blocks/ResultBox';
import { withAuth } from '@/components/hocs/withAuth';
import { useModal } from '@/hooks/util/useModal';
import SalaryModal from './SalaryModal';
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { GetUserInfoResponse } from '@/apis/user/types';
import DetailBox from './DetailBox';

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
      <Header pageType="home" />
      <ResultBox />

      <Calendar />
      <DetailBox />

      {/* 월급 입력 modal */}
      <SalaryModal openModal={openModal} ref={modalRef} handleModalClose={handleModalClose} />
      {/* 월급 입력 modal end */}
    </div>
  );
};

export default withAuth(Home);
