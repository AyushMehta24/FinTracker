import { HomeHeading } from "../components/home/HomeHeading";
import { MoneyCard } from "../components/home/MoneyCard";
import { BsPersonWorkspace } from "react-icons/bs";
import { VscOpenPreview } from "react-icons/vsc";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdOutlinePaid } from "react-icons/md";
import { HomeBarGraph } from "../components/home/HomeBarGraph";
import HomePieChart from "../components/home/HomePieChart";
import { HomeTable } from "../components/home/HomeTable";
import { useEffect, useState } from "react";
import { getHandler } from "../components/helper/apiHandler";

type OpeartionDataType = {
  status: string;
  total: string;
  counter: number;
  element: JSX.Element;
  colour: string;
};

export const Home = () => {
  const [opData, setOpData] = useState<OpeartionDataType[]>([]);
  const getOperationData = async () => {
    const res = await getHandler("api/overview/operation");
    const finalData: OpeartionDataType[] = [
      {
        ...res.data[0],
        colour: "#A7E6FF",
        element: <BsPersonWorkspace className="text-3xl text-slate-400" />,
      },
      {
        ...res.data[3],
        colour: "#3ABEF9",
        element: <VscOpenPreview className="text-3xl text-slate-400" />,
      },
      {
        ...res.data[1],
        colour: "#3572EF",
        element: <AiOutlineFieldTime className="text-3xl text-slate-400" />,
      },
      {
        ...res.data[2],
        colour: "#050C9C",
        element: <MdOutlinePaid className="text-3xl text-slate-400" />,
      },
    ];
    setOpData(finalData);
  };
  useEffect(() => {
    getOperationData();
  }, []);
  return (
    <div className="flex-col w-full h-full flex gap-5 bg-[#FAF8Fc] pt-5 px-5">
      <HomeHeading name={"Overview"} />
      <div className="flex gap-5">
        {opData.map((component ,i) => (
          <MoneyCard
            count={component.counter}
            type={component.status}
            amount={+component.total}
            element={component.element}
            borderColour={component.colour}
            key={i}
          />
        ))}
      </div>
      <div className="flex justify-between gap-5">
        <HomePieChart />
        <HomeBarGraph />
      </div>
      <div>
        <HomeTable />
      </div>
    </div>
  );
};
