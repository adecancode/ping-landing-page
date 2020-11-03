import logo from './img/logo.svg'
import mockup from './img/illustration-dashboard.png'
import facebook from './img/logo-facebook.svg'
import instagram from './img/logo-instagram.svg'
import twitter from './img/logo-twitter.svg'

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <img src={ logo } />
      </div>
      <div className="text">
        <p className="center first">We are launching <b>soon!</b></p>
        <p className="center second">Subscribe and get notified</p>
      </div>
      <div className="form">
        <form>
          <input type="email" className="input" placeholder="Your email address..." />
          <button className="nm-button">Notify Me</button>
        </form>
      </div>
      <div className="mockup">
        <img src={ mockup } />
      </div>

      <footer>
        <div className="icon-bar">
          <a><img src={ facebook } /></a>
          <a><img src={ instagram } /></a>
          <a><img src={ twitter } /></a>
        </div>
        <p className="cc center">© Copyright Ping. All rights reserved.</p>
        <p class="attribution">Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://twitter.com/DevNinjaAde">Ade</a>.</p>
      </footer>
    </div>
  );
}

export default App;
