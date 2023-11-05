import { useKakaoLoginFetch } from '@/hooks/fetch/useAuthFetch';
import { Indicator } from 'hoon-ds';
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { pageLayout } from './index.css';
import { withUnAuth } from '@/components/hocs/withUnAuth';
import { Toast } from '@/utils/toast';

const Kakao = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const isRequest = useRef(false);

  const { kakaoLoginMutate } = useKakaoLoginFetch();

  /** 인가 코드를 가져와 카카오 로그인 */
  useEffect(() => {
    if (!code) return;
    if (isRequest.current) return;

    isRequest.current = true;
    kakaoLoginMutate(
      { code },
      {
        onSuccess: () => {
          Toast.success('로그인 되었습니다.');
        },
      },
    );
  }, [code, kakaoLoginMutate]);

  return (
    <div className={pageLayout}>
      <Indicator />
    </div>
  );
};

export default withUnAuth(Kakao);
