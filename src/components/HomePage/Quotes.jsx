import { quotesObj } from "../../utils/quotesData";
export const Quotes = () => {
  return (
    <>
      <div className="pt-32"></div>
      {quotesObj.map((item, idx) => {
        return (
          <>
            <div className="p-7" key={idx}>
              <div className="bg-[#1F2937] text-[#fff] p-8 rounded-lg shadow-xl">
                <p className="text-3xl font-bold text-center">{item.quote}</p>
                <p className="text-center pt-4 pb-10">{item.auhtor}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
