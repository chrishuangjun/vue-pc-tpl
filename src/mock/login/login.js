import Mock from 'mockjs';
export default {
  // post提交
  login: {
    url: 'system/user/login',
    method: 'post',
    res: () => {
      return Mock.mock({
        code: 0,
        data: {
          name: '@cname()',
        },
        msg: '',
      });
    },
  },
};
