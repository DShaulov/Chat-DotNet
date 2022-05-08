const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/api",
    "/db",
    "/userauth",
    "/userregister"
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:7201',
        secure: false
    });

    app.use(appProxy);
};
