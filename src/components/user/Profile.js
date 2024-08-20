import "./Profile.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Image from "../user/demo.jpg";

export const Profile = () => {
  const { user } = useAuth();

  return (
    <>
      <section className="main ">
        {user ? (
          <>
            <div className="profile-card rounded-5 p-3 ">
              <div className="profileImage">
                <img
                  src={Image} //using profile img
                  alt="demo.jpg"
                  className="profile-pic"
                ></img>
              </div>
              <div className="data">
                <h2>{user.name}</h2>

                <span>welcome {user.name}, it is your profile</span>
                <span>you creaded somthing</span>
              </div>
              <></>

              <div className="buttons">
                <Link to="/Err">
                  <button>error page</button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <center>
              <h2>User not found . Please login to get your Legder</h2>
              <Link to="/Login">
                <button>Login</button>
              </Link>
            </center>
          </>
        )}
      </section>
    </>
  );
};
