import SearchParams from "./SearchParams";
import { StrictMode, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <div
          className="p-0 m-0"
          style={{
            background: "#81a69b",
          }}
        >
          <header className="w-full mb-10 text-center p-7">
            <Link to="/" className="text-6xl text-white">
              <i className="fa-solid fa-house"></i> Pet Store!
            </Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

export default App;
