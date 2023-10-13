import { m_auto, mb_2 } from '@/style/margin.css';
import IntroImage from '@/assets/images/pig-money.png';
import { TypoVariant, Typography, white } from 'hoon-ds';
import { text_center } from '@/style/text.css';

export default function IntroTitle() {
  return (
    <>
      <img
        className={`${m_auto} ${mb_2}`}
        width={72}
        height={72}
        src={IntroImage}
        alt={'pig-money-img'}
      />
      <Typography className={text_center} variant={TypoVariant.H5} color={white}>
        KKOBAK
      </Typography>
      <Typography className={text_center} variant={TypoVariant.SH3} color={white}>
        당신의 자산을 꼬박, 꼬박, 관리하다
      </Typography>
    </>
  );
}
