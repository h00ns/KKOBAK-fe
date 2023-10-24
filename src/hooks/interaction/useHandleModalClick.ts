import { RefObject, useEffect } from 'react';

/**
 *  @hooks
 *  Modal 외부클릭시 handleModalClose 실행
 */
export default function useHandleModalClick(
  modalRef: RefObject<HTMLElement>,
  handleModalClose: () => void,
) {
  useEffect(() => {
    // OutSide Click => Modal Close
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleModalClose();
      }
    };

    // ESC keydown => Modal Close
    const handleKeyDownEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleModalClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDownEsc);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDownEsc);
    };
  }, [modalRef, handleModalClose]);
}
