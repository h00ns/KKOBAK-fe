import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function (app: any) {
  app.use(
    '/auth/google', // 이 URL 패턴을 프록시합니다.
    createProxyMiddleware({
      target: 'http://localhost:3000', // Nest.js 서버의 주소와 포트
      changeOrigin: true, // 요청 헤더에서 호스트를 변경
    }),
  );
};
