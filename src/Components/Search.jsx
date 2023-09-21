import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";


export default function Search() {
  const [search, setSearch] = useState("");
  const query = search;
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate


  const getSearch = async () => {

    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=S1cxIj1tN-b1dhGC_sbKViumMipvBRv53qT8RrEtfP8`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.log(error);
    } 
  };

  useEffect(() => {
    getSearch();
  }, []);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchButtonClick = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=S1cxIj1tN-b1dhGC_sbKViumMipvBRv53qT8RrEtfP8`
      );

      // Pass the search results data to the "SearchResultsPage" route
      navigate(`/search-results?query=${query}`, {
        state: { searchResults: response.data.results },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // When Enter key is pressed, trigger the search
      handleSearchButtonClick();
    }
  };

   

  return (
    <div>
      
      <div className="pb-10 text-center">
        <input
          type="text"
          name="query"
          id="query"
          value={search}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Search Anything..."
          className="border-2 border-orange-300 md:w-96 rounded-lg pr-10 pl-3 py-1"
        />
        {/* Button that triggers the navigation */}
        <button
          className="ml-3 bg-orange-300 px-3 py-1 rounded-lg text-white"
          onClick={handleSearchButtonClick}
        >
          Search
        </button>
      </div>
      {searchResults.length > 0 && (
        <div>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
                <img
                  src={result.urls.small}
                  alt={result.alt_description}
                  className="bg-gray-300"
                />
                <p>{result.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
