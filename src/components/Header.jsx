import { LOGO_URl } from "../utils/constant";

const Header = () => {
  return (
    <div
      className="headerContainer"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "20px",
        border: "2px solid black",
        backgroundColor: "#111827",
        color: "#fff",
      }}
    >
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
        }}
      >
        <img src={LOGO_URl} alt="" />
        <a style={{ fontSize: "25px", fontWeight: "bold" }}>GeekFoods</a>
      </section>
      <section>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "30px",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          <li className="hover:text-[#2762D4] text-[#2762D4]">Home</li>
          <li className="hover:text-[#2762D4]">Quotes</li>
          <li className="hover:text-[#2762D4]">Restaurants</li>
          <li className="hover:text-[#2762D4]">Foods</li>
          <li className="hover:text-[#2762D4]">Contact</li>
        </ul>
      </section>
      <section>
        <button
          style={{
            padding: "10px",
            backgroundColor: "#2563EB",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Header;
