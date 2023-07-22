import { useEffect, useState } from "react";
import BodyComponent from "./components/BodyComponent";
import NavBar from "./components/NavBar";
import { BASE_URL } from "./utils";

const App = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("All")

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        console.log(json);
        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch Data...");
      }
    };
    fetchData();
  }, []);

  const searchData = (e) => {
    const searchValue = e.target.value;
    if (searchValue === "") {
      setFilteredData(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };

  const categoryFilter = (e) => {
    const categoryValue = e.target.value;
    if (categoryValue === "All") {
      setFilteredData(data);
      setSelectedBtn("All")
    } else {
      const filter = data?.filter((food) =>
        food.type.toLowerCase().includes(categoryValue.toLowerCase())
      );
      setFilteredData(filter);
      setSelectedBtn(categoryValue)
    }
  };

  return (
    <div>
      <NavBar searchData={searchData} categoryFilter={categoryFilter} selectedBtn={selectedBtn}/>
      <BodyComponent data={filteredData} loading={loading} error={error} />
    </div>
  );
};

export default App;
