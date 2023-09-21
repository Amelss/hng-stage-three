import { useLocation } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import GridLayout from "react-grid-layout";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

export default function SearchResultsPage() {
  const location = useLocation();
  const { searchResults } = location.state || { searchResults: [] };
  const [layout, setLayout] = useState([]);



const onLayoutChange = (newLayout) => {
  setLayout(newLayout);
};

const getColsForScreenSize = () => {
if (window.innerWidth >= 1200) {
  return 4; // 2 columns for large screens
} else {
  return 1; // 1 column for smaller screens
}
};

const getWidthForScreenSize = () => {
  if (window.innerWidth >= 1200) {
    return 800; // Width for large screens
  } else {
    return window.innerWidth - 32; // Adjust the width as needed for smaller screens
  }
};

return (
  <div>
    <Header />
    <h2 className="text-center py-5 text-xl">Search Results:</h2>
    <div style={{ display: "inline-block" }}>
      <GridLayout
        className="layout"
        layout={searchResults.map((_, index) => ({
          i: `${index}`,
          x: index % getColsForScreenSize(),
          y: Math.floor(index / getColsForScreenSize()),
          w: 1,
          h: 1,
        }))}
        cols={getColsForScreenSize()}
        rowHeight={250}
        width={getWidthForScreenSize()} // Dynamically adjust width
        onLayoutChange={onLayoutChange}
      >
        {searchResults.map((result, index) => (
          <div
            key={`${index}`}
            data-grid={{ i: `${index}`, x: 0, y: 0, w: 1, h: 1 }}
          >
            <img
              src={result.urls.small}
              alt={result.alt_description}
              className="py-2 px-1 bg-gray-300"
            />
            <p className="border-2 border-pink-400 rounded-full px-2 text-xs w-20 ml-1 my-4">
              {result.tags.length > 0 ? result.tags[0].title : "No tags"}
            </p>
          </div>
        ))}
      </GridLayout>
    </div>
  </div>
);
}
