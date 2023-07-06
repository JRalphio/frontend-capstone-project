import marioAndAdrian from "../icons-assets/Mario and Adrian A.jpg";

const Chicago = () => {
  return (
    <div className="chicago">
      <div className="chicago_adrian_and_mario">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <h3>
          Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
          Despite the city's diversity, the two brothers recognized the lack of
          Mediterranean cuisine in Chicago, and were inspired to bring the
          flavors of their hometown in Italy to the people in Chicago. The two
          brothers continue to oversee the Little Lemon restaurant, nearly ten
          years later.
        </h3>
      </div>
      <div className="chicago_image">
        <img
          src={marioAndAdrian}
          alt="restaurant food"
          height="100px"
          width="200px"
        ></img>
      </div>
    </div>
  );
};

export default Chicago;
