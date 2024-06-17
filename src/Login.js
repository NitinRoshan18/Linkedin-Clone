import { useState } from "react";
import "./Login.css";
import { login } from "./features/counter/userSlice";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const logininToApp = (e) => {
    e.preventDefault();
  };
  const register = () => {
    if (!name) {
      return alert("Please enter a name! ");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login_page">
      <img
        src="https://brandlogos.net/wp-content/uploads/2020/11/linkedin-logo.png"
        alt=""
      />
      <form>
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="text"
          placeholder="Full Name"
          required
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          type="text"
          placeholder="Pofile Pic url (optional)"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email or Phone"
          required
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
        />

        <button type="submit" onClick={logininToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member? {"  "}
        <span id="register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
