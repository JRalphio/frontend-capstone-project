import star from "../icons-assets/star.png";

const CustomersSay = () => {
  return (
    <div className="customers_say">
      <h1>Testimonials</h1>
      <div className="customers_say_cards">
        <div className="customers_say_individual_card">
          <img src={star} alt="star" height="50px" width="50px"></img>
          <h3>Bernardo Silva</h3>
          <h4>
            The food here really refreshed me after a late night shift at the
            local supply depot.
          </h4>
        </div>
        <div className="customers_say_individual_card">
          <img src={star} alt="star" height="50px" width="50px"></img>
          <h3>Ruben Dias</h3>
          <h4>
            The food here was fire! Everyone should try this place out at least
            once if they live in Chicago.
          </h4>
        </div>
        <div className="customers_say_individual_card">
          <img src={star} alt="star" height="50px" width="50px"></img>
          <h3>Joao Cancelo</h3>
          <h4>
            Great food, welcoming staff, cozy atmosphere. A great place to treat
            your kids too.
          </h4>
        </div>
        <div className="customers_say_individual_card">
          <img src={star} alt="star" height="50px" width="50px"></img>
          <h3>Goncalo Guedes</h3>
          <h4>
            The restaurant served as a perfect late dinner for me after a night
            out, i would definitely order from here again!
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CustomersSay;
