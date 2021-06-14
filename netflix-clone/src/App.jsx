import "./App.css";
import axios from "./axios";
import requests from "./requests";
function App() {
  const getNetflixOriginals = async () => {
    const movies = await axios.get(requests.fetchNetflixOriginals);
    console.table(movies.data);
  };
  getNetflixOriginals();
  return (
    <div className="App">
      <h1>Let's build Netflix clone using react 🚀 </h1>
    </div>
  );
}

export default App;
