import logo_dark from "../assets/logo-dark.png";

const Header = () => {
  const handleInputChange = (e) => {
    const searchQuery = e.traget.value;
    console.log(searchQuery);
  };
  return (
    <header className="home_header">
      <div className="logo">
        <img src={logo_dark} alt="logo dark" />
      </div>
      <input
        placeholder="search"
        onChange={handleInputChange}
        className="search"
      />
      <div className="iconbox_container">
        <IconBox />
        <IconBox />
        <IconBox />
      </div>
    </header>
  );
};
const IconBox = () => {
  return <div className="iconsBox"></div>;
};

export default Header;
