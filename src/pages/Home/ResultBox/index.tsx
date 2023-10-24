import { TypoVariant, Typography, gray, green, red } from 'hoon-ds';
import { result_box, result_item, text_red } from './index.css';

export default function ResultBox() {
  return (
    <div className={result_box}>
      <div className={result_item}>
        수입
        <Typography variant={TypoVariant.B2} color={green.green3}>
          1000000원
        </Typography>
      </div>
      <div className={result_item}>
        지출
        <Typography variant={TypoVariant.B2} color={red.red2}>
          300000원
        </Typography>
      </div>
      <div className={result_item}>
        잔액
        <Typography variant={TypoVariant.B2} color={gray.gray6}>
          700000원
        </Typography>
      </div>
      <div className={result_item}>
        <div>
          월급까지 ... <span className={text_red}>D-15</span>
        </div>
      </div>
    </div>
  );
}
