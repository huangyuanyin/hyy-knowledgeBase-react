import { useNavigate } from 'react-router-dom'
import { Button, Form, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

interface LoginForm {
  username: string
  password: string
}

const LoginForm = () => {
  const navigate = useNavigate()

  const handlerFinish = (val: LoginForm) => {
    console.log(val)
    navigate('/')
  }

  const handlerFinishFailed = (val: any) => {
    console.log(val)
  }

  return (
    <Form className="login-form" name="basic" initialValues={{ remember: true }} autoComplete="off" labelAlign="left" onFinish={handlerFinish} onFinishFailed={handlerFinishFailed}>
      <Form.Item name="username" rules={[{ required: true, message: '!' }]}>
        <Input prefix={<UserOutlined className="login-form-prefix-icon" />} placeholder="请输入用户名" />
      </Form.Item>

      <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
        <Input.Password prefix={<LockOutlined className="login-form-prefix-icon" />} placeholder="请输入密码" />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button className="login-submit" type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
