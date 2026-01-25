import { Link } from "react-router-dom";
import UserData from "../UserData/UserData";

export function Results() {
  return (
    <div>
      <h2>Results Component</h2>
      <UserData />
      <Link to="/selectUser"><button>Go to user selection</button></Link>
    </div>
  );
}