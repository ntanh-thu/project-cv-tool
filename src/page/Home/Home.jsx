import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to={"/create"}>Create CV</Link>
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home;
