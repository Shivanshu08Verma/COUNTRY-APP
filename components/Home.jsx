import React, { useContext, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useTheme } from "../hooks/useTheme";
// import { useOutletContext } from "react-router-dom";
// import { ThemeContext } from "../contexts/ThemeContext";
// import { useWindowSize } from "../hooks/useWindowSize";

export default function Home() {
  const [query, setQuery] = useState("");
  // const [isDark] = useOutletContext()

  const [isDark] = useTheme();

  // const windowSize = useWindowSize()
  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery}/>
      </div>
      {/* <h1 style={{ textAlign: "center" }}>
        {windowSize.width} x {windowSize.height}
      </h1> */}
      <CountriesList query={query} />
    </main>
  );
}
