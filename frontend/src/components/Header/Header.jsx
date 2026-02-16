import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Welcome to Cravex — where every craving finds its match. Explore a
          world of mouthwatering meals, irresistible snacks, and comfort food
          classics, all just a tap away. Fast delivery, fresh ingredients, and
          flavors that keep you coming back for more.
        </p>
        <button>
          <a href="#explore-menu">View Menu </a>
        </button>
      </div>
    </div>
  );
};

export default Header;
