import { create } from 'zustand';

/**
 *  상태관리 라이브러리 Zustand 사용
 */

type State = {
  year: number;
  month: number;
  day: number;
};

type Actions = {
  actions: {
    handlePrevMonth: () => void;
    handleNextMonth: () => void;
    setDay: (day: number) => void;
  };
};

const initialState: State = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  day: new Date().getDate(),
};

const useDateStore = create<State & Actions>((set) => ({
  ...initialState,
  actions: {
    handlePrevMonth: () => {
      set((state) => {
        const prevMonth = state.month - 1;

        return {
          month: prevMonth < 1 ? 12 : prevMonth,
        };
      });
    },
    handleNextMonth: () => {
      set((state) => {
        const nextMonth = state.month + 1;

        return {
          month: nextMonth > 12 ? 1 : nextMonth,
        };
      });
    },
    setDay: (day) => set({ day }),
  },
}));

/** custom Hook */
export const useDateState = () =>
  useDateStore((state) => ({ year: state.year, month: state.month, day: state.day }));
export const useYearMonthState = () =>
  useDateStore((state) => ({ year: state.year, month: state.month }));
export const useDayState = () => useDateStore((state) => ({ day: state.day }));
export const useDateActions = () => useDateStore((state) => state.actions);
