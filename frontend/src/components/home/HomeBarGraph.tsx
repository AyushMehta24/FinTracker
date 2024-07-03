import { BarChart } from "@mui/x-charts/BarChart";
import { useEffect, useState } from "react";
import { getHandler } from "../helper/apiHandler";

export const HomeBarGraph = () => {
  const [prevData, setPrevData] = useState<number[]>([]);
  const [curData, setCurData] = useState<number[]>([]);
  const [label, setLabel] = useState<string[]>([]);
  const [month, setMonth] = useState<string[]>([]);
  const getAnnualData = async () => {
    const res = await getHandler("api/overview/annual");

    const yearlyData: { month: string; counter: number }[][] = res.data;

    const keys: string[] = Object.keys(yearlyData);

    setLabel(keys);
    const value: { month: string; counter: number }[][] =
      Object.values(yearlyData);

    const pdata: { month: string; counter: number }[] = value[0];
    const cdata: { month: string; counter: number }[] = value[1];

    const fpdata: number[] = [];
    const fcdata: number[] = [];
    const month: string[] = [];

    pdata.map((record1: { month: string; counter: number }) => {
      fpdata.push(record1.counter);
      month.push(record1.month);
    });

    cdata.map((record2: { month: string; counter: number }) => {
      fcdata.push(record2.counter);
    });

    setMonth(month);
    setPrevData(fpdata);
    setCurData(fcdata);
  };
  useEffect(() => {
    getAnnualData();
  }, []);
  return (
    <div className="border border-slate-300 rounded w-full h-72 bg-white">
      <div className="p-2 font-semibold border-b-2 flex items-center justify-between w-full">
        <p className="text-2xl text-center py-2">
          Annual comparison of operations grouped by month
        </p>
        {/* <div className="flex items-center gap-5 bg-[#BBE9FF] p-2 rounded-md"></div> */}
      </div>
      <div className="w-full flex justify-center">
        <BarChart
          width={750}
          height={220}
          series={[
            {
              data: prevData,
              label: label[0],
              id: "pvId",
              color: "#3572EF",
            },
            { data: curData, label: label[1], id: "uvId", color: "#A7E6FF" },
          ]}
          xAxis={[
            {
              data: month,
              scaleType: "band",
            },
          ]}
          grid={{ horizontal: true }}
        />
      </div>
    </div>
  );
};
