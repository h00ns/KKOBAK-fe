import { TypoVariant, Typography, gray } from 'hoon-ds';
import { filter_icon, filter_item } from './index.css';
import { FilterCode, useGetFilterProps } from '../../../Home/hooks/useGetFilterProps';

type Props = {
  code: FilterCode;
  handleFormSubmit: (code: number) => void;
};

export default function FilterItem({ code, handleFormSubmit }: Props) {
  const { name, icon, background } = useGetFilterProps(code, '32px');

  return (
    <div className={filter_item} onClick={() => handleFormSubmit(code)}>
      <div className={filter_icon} style={{ background }}>
        {icon}
      </div>
      <Typography variant={TypoVariant.B5} color={gray.gray6}>
        {name}
      </Typography>
    </div>
  );
}
