import "./App.css";
import requests from "./requests";
import Row from "./components/Row";
import Banner from "./components/Banner";
function App() {
  return (
    <div className="App">
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Row
        key="NETFLIX ORIGINALS"
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        largeRow
      />
      <Row
        key="Trending now"
        title="Trending now"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        key="Top rated"
        title="Top rated"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        key="Action Movies"
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        key="Comedy Movies"
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        key="Horror Movies"
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        key="Romance Movies"
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        key="Documentaries"
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
