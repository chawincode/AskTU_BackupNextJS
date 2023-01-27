import SideBar from './SideBar'
import '../styles/page.css'

export default function Home() {
  return (
    <body className='body'>
      <div className="background">
        <div className="signin">
          <span>Sign in</span>
        </div>
        <div className='des'>
          <span>Sign in and start learn effectively</span>
        </div>
        <div className='form'>
          <form action="/send-data-here" method="post">
            <div className='forminput'>
              <input className='input' type="number" id="username" name="username"  placeholder='Username' required/>
            </div>
            <div className='forminput'>
              <input className='input' type="number" id="password" name="password" placeholder='Password' required/>
            </div>
            <div className='formbox'>
              <input className='box' type="checkbox" />
              <span className='rem'> Remember me</span>
              <a href='/home' className='for'> Forgot password?</a>
            </div>
            <div className='buttom'>
              <button className='btnLog' type="submit">Login</button>
              <button className='btnReg' type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </body>
  )
}
