import './App.scss';
import profileImage from './assets/profile-image.png';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className='info-container'></div>
        <div className="profile-container">
          <img
            src={profileImage}
            className="profile-image"
            alt="profile-image"
          />
          <span className="profile-user-name">Klihsman Freitas</span>
          <div className="profile-tags">
            <span className="profile-tag">#React</span>
            <span className="profile-tag">#Angular</span>
            <span className="profile-tag">#Typescript</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
