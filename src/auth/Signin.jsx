import {signInWithEmailAndPassword} from "firebase/auth"
import { useState } from "react"
import { auth } from "../firebase.js"
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Ini

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/image-library");
      })
      .catch((err) => {
        console.log(err);
      });

   
  };
  return (
    <div className="">
      <form onSubmit={signIn}>
        <h1>Sign In</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-pink-300 rounded-full"
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-pink-300 rounded-full"
        />
        <br />
        <button className="bg-pink-300">Sign In</button>
      </form>
    </div>
  );
}
