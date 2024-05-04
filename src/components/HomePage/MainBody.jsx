import { BACK_IMG } from "../../utils/constant";

const MainBody = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BACK_IMG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        paddingLeft: "105px",
        gap: "20px",
      }}
    >
      {/* style={{ fontSize: "40px", fontWeight: "bold", paddingLeft: "20px" }} */}
      <p className="text-6xl font-bold">Let us find your</p>
      <span className="text-5xl text-[#BE123C] font-bold">Forever Food.</span>
      <p className="text-xl w-[50%] font-semibold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>
      <div style={{ display: "flex", gap: "20px" }}>
        <button className="p-2 bg-[#E11D48] text-[#fff] font-bold border-none">
          Search Now
        </button>
        <button className="p-2 bg-[#fff] text-[#E11D48] font-bold border-none">
          Know More
        </button>
      </div>
    </div>
  );
};

export default MainBody;
