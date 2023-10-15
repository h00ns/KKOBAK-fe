export const LOGIN = '/'; // 로그인 페이지
export const SIGN_UP = '/signup'; // 회원가입 페이지
export const RESET = '/reset'; // 비밀번호 재설정 페이지

export const HOME = '/home'; // 메인 페이지

export const KAKAO = '/auth/kakao';
export const CLIENT_ID = 'bf3c6f8879049ed9b9ad63403fba4fec';
export const REDIRECT_URI = 'http://localhost:5173/auth/kakao';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
