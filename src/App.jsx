import "./App.css";
import Card from "./components/cardBox/Card";
import SearchBar from './components/searchBar/SearchBar'
import DataContextProvider from "./contexts/DataContextProvider";

const App = () => {
  return (
    <DataContextProvider>
      <h1 className="text-3xl font-bold">Welcome to Seach from Api</h1>
      <SearchBar/>
      <Card/>
    </DataContextProvider>
  );
};

export default App;
