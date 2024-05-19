import { Link } from "react-router-dom";
import { LOGO_URl } from "../../utils/constant";

const Header = () => {
  return (
    <div>
      <div className=" w-full fixed flex justify-around items-center bg-[#111827] text-[#fff] p-5">
        <div className="flex justify-center items-center gap-3">
          <img src={LOGO_URl} alt="" className="" />
          <Link to="/" className="text-2xl font-bold cursor-pointer">
            GeekFoods
          </Link>
        </div>

        <ul className="flex gap-8 text-xl items-center cursor-pointer">
          <Link to="/" className="hover:text-[#2762D4] text-[#2762D4]">
            Home
          </Link>
          <Link to="/quotes" className="hover:text-[#2762D4]">
            Quotes
          </Link>
          <Link to="/restaurants" className="hover:text-[#2762D4]">
            Restaurants
          </Link>
          <Link to="/foods" className="hover:text-[#2762D4]">
            Foods
          </Link>
          <Link to="/contacts" className="hover:text-[#2762D4]">
            Contact
          </Link>
        </ul>

        <button className="bg-[#2563EB] p-3 text-[#fff] font-bold rounded-lg hover:bg-[#4c79da]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
