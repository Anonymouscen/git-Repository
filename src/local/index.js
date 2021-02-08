import { Validator } from 'vee-validate'

const dictionary = {
  'zh-CN': {
    messages: {
      required: field => '请输入' + field,
      email: () => '请输入正确的邮箱格式',
      min: () => '不符合最小长度要求',
      length: (field, args) => field + '长度要求' + args,
      is: () => '两次密码不一致'
    },
    attributes: {
      username: '账号',
      name: '昵称',
      password: '密码',
      repassword: '密码',
      email: '邮箱',
      code: '验证码'
    }
  }
}

Validator.localize(dictionary)
