
import Footer from "./Components/Footer";
import ImageLibrary from "./Components/ImageLibrary";
import SearchResultsPage from "./Components/SearchResultsPage";
import Signin from "./auth/Signin";
// import SignUp from "./auth/SignUp";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="image-app bg-stone-100 pb-10">

      <Routes>

        <Route path={"/"} element={<Signin />} />
        <Route path={"/image-library"} element={<ImageLibrary />} />
        <Route path={"/search-results"} element={<SearchResultsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
