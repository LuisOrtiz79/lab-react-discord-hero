import './App.css';

function App() {
  console.log("hello")
  return (
    <div className="App">
      <div className="head">
        <img className='img-logo'
          src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-logo-white.png'
          alt="logo"
        />
        <img className='img-menu'
          src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-icon.png' 
          alt="menu"
        />
      </div>

      <div className='body'>
        <div className='body-info'>
          <h1>Imagine a place...</h1>

          <p>
            ...where you can belong to a school club, a gaming group, or a worldwide
            art community. Where just you and a handful of friends can spend time 
            together. A place that makes it easy to talk every day and hang out more often.
          </p>

          <div className='button-info'>
            <a target="_blank">
              <button id='button1'> Download for Mac </button>
            </a>

            <br />
            
            <a target="_blank">
              <button id='button2'> Open Discord in your browser </button>
            </a>
          </div>

          
        </div>

        <div className='body-img'>
          <img
            src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/discord-background.png' 
            alt='img-background'
          />
        </div>
      </div>
      

    </div>
  );
}

export default App;
