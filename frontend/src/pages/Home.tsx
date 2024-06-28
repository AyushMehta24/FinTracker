import { HomeHeading } from "../components/home/HomeHeading";
import { MoneyCard } from "../components/home/MoneyCard";

export const Home = () => {
  return (
    <div className=" flex-col w-full h-full flex gap-5 bg-[#FAF8Fc] pt-5 px-5">
      <HomeHeading />
      <div className="flex gap-5">
        <MoneyCard message={"hii1"} amount={1111} icon={"icon1"} />
        <MoneyCard message={"hii1"} amount={1111} icon={"icon1"} />
        <MoneyCard message={"hii1"} amount={1111} icon={"icon1"} />
        <MoneyCard message={"hii1"} amount={1111} icon={"icon1"} />
      </div>
    </div>
  );
};
