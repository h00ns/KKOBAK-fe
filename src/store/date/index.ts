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
    handleYear: (year: number) => void;
    handleMonth: (month: number) => void;
    handleDay: (day: number) => void;
  };
};

const initialState: State = {
  year: 0,
  month: 0,
  day: 0,
};

const useDateStore = create<State & Actions>((set) => ({
  ...initialState,
  actions: {
    handleYear: (year) => set({ year }),
    handleMonth: (month) => set({ month }),
    handleDay: (day) => set({ day }),
  },
}));

/** custom Hook */
export const useDateState = () =>
  useDateStore((state) => ({ year: state.year, month: state.month, day: state.day }));
export const useYearMonthState = () =>
  useDateStore((state) => ({ year: state.year, month: state.month }));
export const useDayState = () => useDateStore((state) => ({ day: state.day }));
export const useDateActions = () => useDateStore((state) => state.actions);
