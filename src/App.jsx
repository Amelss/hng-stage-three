import Header from "./Components/Header"
import Footer from "./Components/Footer"
import ImageLibrary from "./Components/ImageLibrary"
import SearchResultsPage from "./Components/SearchResultsPage"
import { Route, Routes } from "react-router-dom"

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<ImageLibrary />} />
       <Route path={"/search-results"} element={<SearchResultsPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
