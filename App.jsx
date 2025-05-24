import { useState } from "react";
import Header from "./components/Header";
// import SearchBar from "./components/SearchBar";
// import SelectMenu from "./components/SelectMenu";
// import CountriesList from "./components/CountriesList";
import { Outlet } from "react-router-dom";
import "./App.css";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";
const App = () => {
  // const [query, setQuery] = useState('')

  // const [isDark, setIsDark] = useState(
  //   JSON.parse(localStorage.getItem("isDarkMode"))
  // );

  return (
    // <ThemeContext.Provider value={[isDark, setIsDark]}>
      <ThemeProvider>
      <Header /*theme={[isDark, setIsDark]}*/ />
      <Outlet /*context={[isDark, setIsDark]}*/ />
      {/* <Header /> */}
      {/* <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery}/>
          <SelectMenu />
        </div>
       {
        query ==='unmount' ? '' :<CountriesList query = {query} />
       }
      </main> */}
      </ThemeProvider>
    // </ThemeContext.Provider>
  );
};
export default App;
