import Search from "./Search"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="font-inclusive">
      <div className="block text-center mb-5 md:mb-0 md:flex justify-center items-center">
        <h1 className="text-orange-300 text-center text-3xl md:text-6xl py-5  ">Verve Image Library</h1>
       <Link to={"/"}><button className="bg-orange-600 text-white md:ml-6 px-3 py-1 h-max rounded-lg text-xs md:mt-3">Log out</button></Link> 
      </div>
   
 <Search />
    </div>
  )
}
