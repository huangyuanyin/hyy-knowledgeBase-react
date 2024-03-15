import './login.scss'
import LoginBg from '../../assets/login-bg.jpg'
import LoginForm from './components/login'

const styleLoginBg = {
  backgroundImage: `url(${LoginBg})`,
  backgroundRepeat: 'no-repeat'
}

const Login = () => {
  return (
    <div className="login-container" style={styleLoginBg}>
      <div className="login-wrap">
        <div className="login-title">信安知识库</div>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
