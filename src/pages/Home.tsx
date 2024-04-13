import { Header } from "../components";
import GreetingContainer from "../components/GreetingContainer";

const Home = () => {
  return (
    <div className="home_container">
      <section className="top">
        <Header />
        <GreetingContainer />
      </section>
    </div>
  );
};
export default Home;
