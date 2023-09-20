import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase.js";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="">
      <form onSubmit={signUp}>
        <h1>Sign Up</h1>
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
        <button className="bg-pink-300">Sign Up</button>
      </form>
    </div>
  );
}
