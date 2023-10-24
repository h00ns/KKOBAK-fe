const ONLY_NUMBER_REGEX = /[^0-9]/g;

export const returnOnlyNumber = (value: string): number => {
  return Number(value.replace(ONLY_NUMBER_REGEX, ''));
};
