import { useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Button } from "@mui/material";
import { PieCenterLabel } from "./PieCenterLabel";
import { calculatePercentage } from "../helper/home/percentageCounter";

const data = [
  { label: "Processing", value: 4856, color: "#A7E6FF" },
  { label: "Under Review", value: 40005, color: "#3ABEF9" },
  { label: "Pending", value: 61565, color: "#3572EF" },
  { label: "Paid", value: 6511, color: "#050C9C" },
];

const data2 = [
  { label: "Processing", value: 100, color: "#A7E6FF" },
  { label: "Under Review", value: 1000, color: "#3ABEF9" },
  { label: "Pending", value: 2000, color: "#3572EF" },
  { label: "Paid", value: 500, color: "#050C9C" },
];

const size = {
  width: 600,
  height: 230,
};

const dataWithPercentage = calculatePercentage(data);
const data2WithPercentage = calculatePercentage(data2);

export default function HomePieChart() {
  const [activeButton, setActiveButton] = useState<"Last Month" | "Last Year">(
    "Last Month"
  );
  const [currentData, setCurrentData] = useState(dataWithPercentage);

  const handleButtonClick = (button: "Last Month" | "Last Year") => {
    setActiveButton(button);
    setCurrentData(
      button === "Last Month" ? dataWithPercentage : data2WithPercentage
    );
  };

  return (
    <div className="border border-slate-300 rounded w-full h-72">
      <div className="p-2 font-semibold border-b-2 flex items-center justify-between w-full">
        <p className="text-2xl text-center py-1">Status</p>
        <div className="flex items-center gap-5 bg-[#BBE9FF] p-2 rounded-md">
          <Box
            sx={{
              "& .active": {
                backgroundColor: "#2196F3",
                color: "white",
                paddingX: 1,
              },
            }}
          >
            <Button
              size="small"
              className={`uppercase  ${
                activeButton === "Last Month" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Last Month")}
            >
              Last Month
            </Button>
            <Button
              size="small"
              className={`uppercase ${
                activeButton === "Last Year" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("Last Year")}
            >
              Last Year
            </Button>
          </Box>
        </div>
      </div>
      <PieChart
        series={[
          {
            data: currentData.map((item) => ({
              value: item.value,
              color: item.color,
              label: `${item.label} (${item.percentage})`,
            })),
            outerRadius: 90,
            innerRadius: 60,
          },
        ]}
        slotProps={{
          legend: {
            direction: "column",
            position: { vertical: "middle", horizontal: "right" },
            padding: -10,
          },
        }}
        {...size}
      >
        <PieCenterLabel />
      </PieChart>
    </div>
  );
}
