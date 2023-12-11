import './App.css';
import bgImg from './video/background-img-coastline.mp4'

const App = () => {
  return (
    <div className="App">
      <video className="bgvideo" autoPlay loop muted>
        <source src={bgImg} type="video/mp4"/>
      </video>
      <div className="card">
        <h1 className="heading">Hello World!</h1>
        <p className="paragraph">I am grateful to God for his guidance and love. 
        I want to thank and express my gratitude to everyone who has been a part 
        of my life and this journey. Every drop in the ocean counts, and I will 
        never forget those who helped me in sailing through difficulties deserve 
        a portion of this reward. Thanks to all...</p>
        <h1 className="name">aarunraj</h1>
    </div>
    </div>
  );
}

export default App;
