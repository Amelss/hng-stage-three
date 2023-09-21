import {signInWithEmailAndPassword} from "firebase/auth"
import { useState } from "react"
import { auth } from "../firebase.js"
import { useNavigate } from "react-router-dom"; // Import useNavigate


export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Ini
  const [error, setError] = useState(null); // State for error message


  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/image-library");
      })
      .catch((err) => {
        setError('Your email and/or password is not correct');
        console.log(err);
      });

   
  };
  return (
    <div className="text-center bg-stone-100 h-screen">
      <h1 className="text-orange-300 text-3xl py-10">Verve Image Gallery</h1>
      <form onSubmit={signIn}>
        <h1 className="pb-4">Please Sign In...</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-orange-300 rounded-full pr-10 px-2 mb-4 py-1"
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-orange-300 rounded-full pr-10 px-2 py-1"
        />
        <br />
        <button className="bg-orange-300 mt-4 px-3 text-white text-sm rounded-full">
          Sign In
        </button>
        {error && (
          <p className="text-red-500 mt-2">{error}</p> // Display error message
        )}
      </form>
    </div>
  );
}
