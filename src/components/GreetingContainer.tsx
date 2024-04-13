import { BreadCrumb } from ".";

const GreetingContainer = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Greeting />
      <BreadCrumb />
    </div>
  );
};

const Greeting = () => {
  const currentTime = new Date().getHours();
  let greeting;
  if (currentTime >= 5 && currentTime < 12) {
    greeting = "Good Morning";
  } else if (currentTime >= 12 && currentTime < 18) {
    greeting = "Good Afternoon";
  } else if (currentTime >= 18 && currentTime < 20) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night ";
  }
  return (
    <div className="greeting_container">
      <h4>{greeting}</h4>
      <h3>
        Welcome Back,<b>Sugar Fills</b>
      </h3>
    </div>
  );
};

export default GreetingContainer;
