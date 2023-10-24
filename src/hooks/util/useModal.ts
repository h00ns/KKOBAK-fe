import { useRef, useState } from 'react';
import useHandleModalClick from '../interaction/useHandleModalClick';

export const useModal = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  useHandleModalClick(modalRef, handleModalClose);

  return {
    openModal,
    modalRef,
    handleModalOpen,
    handleModalClose,
  };
};
