import "./App.css";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Search from "./pages/search/Search";
function App() {

  return (
    <div className="app">
      <Routes>
      <Route path = "/" element = { <Home/>}/>
        <Route path = "/home" element = { <Home />}/>
        <Route path = "/search" element = { <Search />}/>
        <Route path = "/*" element = { <PageNotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
