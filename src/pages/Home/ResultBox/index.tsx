import { result_box } from './index.css';

export default function ResultBox() {
  return (
    <div className={result_box}>
      <div>수입</div>
      <div>지출</div>
      <div>잔액</div>
      <div>월급까지 D-15</div>
    </div>
  );
}
