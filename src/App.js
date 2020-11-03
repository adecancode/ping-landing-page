import logo from './img/logo.svg'
import mockup from './img/illustration-dashboard.png'

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
          <a></a>
          <a></a>
          <a></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
