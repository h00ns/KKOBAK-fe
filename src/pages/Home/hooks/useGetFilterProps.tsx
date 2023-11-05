import { Icon, blue, gray, green, red, white } from 'hoon-ds';

export enum FilterCode {
  SALARY = 101,
  CARRY_OVER = 102,
  INCOME_ETC = 103,
  FOOD = 201,
  TRANSPORT = 202,
  CULTURE = 203,
  SAVE = 204,
  LIVING = 205,
  CARD = 206,
  UTILITY = 207,
  SHOPPING = 208,
  OUTCOME_ETC = 209,
}

/**
 *  get filter props
 */
export const useGetFilterProps = (code: FilterCode, size: string) => {
  return {
    [FilterCode.SALARY]: {
      name: '월급',
      icon: <Icon name="money" stroke={white} size={size} key="101" />,
      background: green.green2,
    },
    [FilterCode.CARRY_OVER]: {
      name: '이월',
      icon: <Icon name="chevron-right" stroke={white} size={size} key="102" />,
      background: blue.blue2,
    },
    [FilterCode.INCOME_ETC]: {
      name: '기타',
      icon: <Icon name="plus" stroke={white} size={size} key="103" />,
      background: red.red2,
    },
    [FilterCode.FOOD]: {
      name: '식비',
      icon: <Icon name="food" fill={white} stroke="transparent" size={size} key="101" />,
      background: green.green2,
    },
    [FilterCode.TRANSPORT]: {
      name: '교통비',
      icon: <Icon name="bus" stroke={white} size={size} key="102" />,
      background: blue.blue2,
    },
    [FilterCode.CULTURE]: {
      name: '문화생활',
      icon: <Icon name="music" stroke={white} size={size} key="103" />,
      background: gray.gray3,
    },
    [FilterCode.SAVE]: {
      name: '저축',
      icon: <Icon name="music" stroke={white} size={size} key="101" />,
      background: red.red2,
    },
    [FilterCode.LIVING]: {
      name: '생활',
      icon: <Icon name="heart" stroke={white} size={size} key="102" />,
      background: green.green2,
    },
    [FilterCode.CARD]: {
      name: '카드대금',
      icon: <Icon name="card" stroke={white} size={size} key="103" />,
      background: blue.blue2,
    },
    [FilterCode.UTILITY]: {
      name: '공과금',
      icon: <Icon name="plug" fill={white} stroke="transparent" size={size} key="101" />,
      background: green.green2,
    },
    [FilterCode.SHOPPING]: {
      name: '쇼핑',
      icon: <Icon name="cart" stroke={white} size={size} key="102" />,
      background: gray.gray3,
    },
    [FilterCode.OUTCOME_ETC]: {
      name: '기타',
      icon: <Icon name="plus" stroke={white} size={size} key="103" />,
      background: red.red2,
    },
  }[code];
};
