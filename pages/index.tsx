import type { NextPage } from "next";
import SoftwareData from "../components/SoftwareData/";
import CurrentUserSession from "../components/CurrentUserSession/";

const Home: NextPage = () => {
  return (
    <div className="text-2xl text-sky-400">
      <SoftwareData name="shadowrun" version="v0.0.0" />
      <CurrentUserSession />
    </div>
  );
};

export default Home;
