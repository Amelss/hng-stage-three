import { useLocation, Link } from "react-router-dom";
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
  return 2; // 2 columns for large screens
} else {
  return 1; // 1 column for smaller screens
}
};

const getWidthForScreenSize = () => {
  if (window.innerWidth >= 1000) {
    return 600; // Width for large screens
  } else {
    return window.innerWidth - 150; // Adjust the width as needed for smaller screens
  }
};

return (
  <div className="">
    <Header />

    <h2 className="text-center py-5 text-xl">Search Results:</h2>
   <Link to={"/image-library"}> <p className="text-center text-xs">Home</p></Link>
    <div className="ml-20 md:ml-0 flex">
      <div >
        <GridLayout
          className="layout flex"
          layout={searchResults.map((_, index) => ({
            i: `${index}`,
            x: index % getColsForScreenSize(),
            y: Math.floor(index / getColsForScreenSize()),
            w: 1,
            h: 1,
          }))}
          cols={getColsForScreenSize()}
          rowHeight={220}
          width={getWidthForScreenSize()} // Dynamically adjust width
          onLayoutChange={onLayoutChange}
        >
        
          {searchResults.map((result, index) => (
            <div
              key={`${index}`}
              data-grid={{ i: `${index}`, x: 0, y: 0, w: 1, h: 1 }} className=""
            >
              <img
                src={result.urls.small}
                alt={result.alt_description}
                className="w-[300px] h-[200px] md:w-full md:h-full object-cover py-7 md:py-10 text-center mx-auto"
              />
              <p className="border-2 border-pink-400 rounded-full px-2 text-xs w-20 text-center my-4">
                {result.tags.length > 0 ? result.tags[0].title : "No tags"}
              </p>
            </div>
          ))}
        </GridLayout>
      </div>
    </div>
  </div>
);
}
