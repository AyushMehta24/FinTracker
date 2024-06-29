import { HomeHeading } from "../components/home/HomeHeading";
import { MoneyCard } from "../components/home/MoneyCard";
import { BsPersonWorkspace } from "react-icons/bs";
import { VscOpenPreview } from "react-icons/vsc";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdOutlinePaid } from "react-icons/md";
import { BarGraph } from "../components/home/BarGraph";
import HomePieChart from "../components/home/HomePieChart";

export const Home = () => {
  return (
    <div className="flex-col w-full h-full flex gap-5 bg-[#FAF8Fc] pt-5 px-5">
      <HomeHeading />
      <div className="flex gap-5">
        <MoneyCard
          count={50}
          type={"Processing"}
          amount={4856}
          element={<BsPersonWorkspace className="text-3xl text-slate-400" />}
          borderColour={"#A7E6FF"}
        />
        <MoneyCard
          count={30}
          type={"Under Review"}
          amount={40005}
          element={<VscOpenPreview className="text-3xl text-slate-400" />}
          borderColour={"#3ABEF9"}
        />
        <MoneyCard
          count={10}
          type={"Pending"}
          amount={61565}
          element={<AiOutlineFieldTime className="text-3xl text-slate-400" />}
          borderColour={"#3572EF"}
        />
        <MoneyCard
          count={20}
          type={"Paid"}
          amount={6511}
          element={<MdOutlinePaid className="text-3xl text-slate-400" />}
          borderColour={"#050C9C"}
        />
      </div>
      <div className="flex justify-between gap-5">
        <HomePieChart />
        <BarGraph />
      </div>
    </div>
  );
};
