import restaurantFoodImage from "../icons-assets/restauranfood.jpg";

const CallToAction = () => {
  return (
    <div className="call_to_action">
      <div className="call_to_action_hero">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <h3>
          We are a family owned Mediterranean restaurant, located on Maldove
          Street in Chicago, Illinois. We focus on traditional recipes served
          with a modern twist
        </h3>
        <button>Reserve a table</button>
      </div>
      <div className="call_to_action_image">
        <img
          src={restaurantFoodImage}
          alt="restaurant food"
          width="350vw"
          // width="200px"
        ></img>
      </div>
    </div>
  );
};

export default CallToAction;
