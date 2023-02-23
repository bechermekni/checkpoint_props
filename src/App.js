import Profile from './Profile/Profile';
import './App.css';
import bech from "../src/Profile/bech.jpg";
function App() {
  const handleName = (name) => alert(name);
  return (
    <div className="App">
      <div
        style={{
          maxWidth: "55%",
          borderRadius: "15px",
          padding: "15px",
        }}
      >
        <Profile
          className="prof"
          fullName={"Mekni Becher"}
          profession={"mechanical engineer"}
          bio="A mechanical engineer with experience in Car Repair."
          handleName={handleName}
        ></Profile>
        <img
          className="image"
          src={bech}
          alt=""
          style={{ borderRadius: "15px", width: "500px" }}
        />
      </div>
    </div>
  );
}

export default App;
