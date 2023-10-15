import { useKakaoLoginFetch } from '@/hooks/fetch/useAuthFetch';
import { Indicator } from 'hoon-ds';
import { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Kakao = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const isRequest = useRef(false);

  const { kakaoLoginMutate } = useKakaoLoginFetch();

  useEffect(() => {
    if (!code) return;
    if (isRequest.current) return;

    isRequest.current = true;
    kakaoLoginMutate({ code });
  }, [code, kakaoLoginMutate, navigate]);

  return (
    <div>
      <Indicator />
    </div>
  );
};

export default Kakao;
