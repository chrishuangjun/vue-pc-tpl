import Mock from 'mockjs';

// 修复在使用 MockJS 情况下，设置 withCredentials = true，且未被拦截的跨域请求丢失 Cookies 的问题
// https://github.com/nuysoft/Mock/issues/300
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send;
Mock.XHR.prototype.send = function() {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false;
  }
  this.proxy_send(...arguments);
};
function importAll(r) {
  r.keys().forEach(key => {
    if (key == './index.js') return;
    let obj = r(key).default;
    for (let value of Object.values(obj)) {
      Mock.mock(RegExp(value.url), value.method, value.res);
    }
  });
}
importAll(require.context('./', true, /\.js$/));

export default Mock;
