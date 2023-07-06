import greekSalad from "../icons-assets/greek salad.jpg";
import bruschetta from "../icons-assets/bruchetta.jpg";
import lemonDessert from "../icons-assets/lemon dessert.jpg";

const Specials = () => {
  return (
    <div className="specials">
      <h1>This weeks specials</h1>
      <h2>Online Menu</h2>
      <div className="specials_cards">
        <div className="specials_individual_card">
          <img src={greekSalad} alt="greek Salad"></img>
          <h3>Greek Salad</h3>
          <h3>$12.99</h3>
          <h4>
            Refreshing salad, made with tomato, lettuce, feta cheese and olives.
            Seasoned with salt, hot pepper and olive oil.
          </h4>
          <button>Order For Delivery</button>
        </div>
        <div className="specials_individual_card">
          <img src={bruschetta} alt="bruschetta"></img>
          <h3>Bruschetta</h3>
          <h3>$16.99</h3>
          <h4>
            Toasted bread, topped with tomato, prociutto and cheese. Seasoned
            with salt and olive oil.
          </h4>
          <button>Order For Delivery</button>
        </div>
        <div className="specials_individual_card">
          <img src={lemonDessert} alt="lemon dessert"></img>
          <h3>Lemon Dessert</h3>
          <h3>$8.50</h3>
          <h4>
            Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
            and lemon zest.
          </h4>
          <button>Order For Delivery</button>
        </div>
      </div>
    </div>
  );
};

export default Specials;
