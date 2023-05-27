import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchForm from "./pages/SearchForm";
import TVList from "./pages/TVList";
import ShowDetails from "./pages/ShowDetails";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<SearchForm />}></Route>
          <Route path="/tv-shows/:TV" element={<TVList />}></Route>
          <Route path="/tv-shows/details/:id" element={<ShowDetails />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
