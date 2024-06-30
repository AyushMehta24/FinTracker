import { BarChart } from "@mui/x-charts/BarChart";

const cData = [
  4000, 3000, 2000, 2780, 1890, 2390, 3490, 2000, 2780, 1890, 2390, 3490,
];
const pData = [
  2400, 1398, 9800, 3908, 4800, 3800, 4300, 9800, 3908, 4800, 3800, 4300,
];
const xLabels = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUNE",
  "JULY",
  "AUG",
  "SEPT",
  "OCT",
  "NOV",
  "DEC",
];

export const HomeBarGraph = () => {
  return (
    <div className="border border-slate-300 rounded w-full h-72">
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
              data: pData,
              label: "2024",
              id: "pvId",
              color: "#3572EF",
            },
            { data: cData, label: "2023", id: "uvId", color: "#A7E6FF" },
          ]}
          xAxis={[
            {
              data: xLabels,
              scaleType: "band",
            },
          ]}
          grid={{ horizontal: true }}
        />
      </div>
    </div>
  );
};
