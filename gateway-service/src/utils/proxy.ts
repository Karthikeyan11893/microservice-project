import { createProxyMiddleware } from 'http-proxy-middleware';

export const createServiceProxy = (target: string, prefix: string) => {
  return createProxyMiddleware({
    target,

    changeOrigin: true,

    selfHandleResponse: false,

    pathRewrite: (path) => {
      return `${prefix}${path}`;
    },

    on: {
      proxyReq: (proxyReq, req: any) => {
        console.log('FORWARDING:', req.method, req.url);

        if (req.body) {
          const bodyData = JSON.stringify(req.body);

          proxyReq.setHeader('Content-Type', 'application/json');

          proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));

          proxyReq.write(bodyData);
        }
      },

      error: (err) => {
        console.log('PROXY ERROR:', err.message);
      },
    },
  });
};
