import { useLocation } from "react-router-dom";

export default function SearchResultsPage() {
  const location = useLocation();
  const { searchResults } = location.state || { searchResults: [] };

  return (
    <div>
      <h2 className="text-center py-5 text-xl">Search Results:</h2>
      <div>
        <ul className="grid grid-cols-2 md:grid-cols-4">
          {searchResults.map((result) => (
            <li key={result.id } >
              <img src={result.urls.small} alt={result.alt_description} className="py-2 px-1 bg-gray-300"/>
              <p className="border-2 border-pink-400 rounded-full px-2 text-xs w-20 ml-1 my-4">{result.tags.length > 0 ? result.tags[0].title : "No tags"}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
