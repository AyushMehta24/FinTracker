import { OverviewCard } from "../components/transaction/OverviewCard";
import { IoWalletOutline } from "react-icons/io5";
import { BsBoxArrowInDownLeft } from "react-icons/bs";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { HomeHeading } from "../components/home/HomeHeading";
import { Button } from "@mui/material";
import { AnalyticsGraph } from "../components/transaction/AnalyticsGraph";
import { useState } from "react";

export const Transaction = () => {
  const [graph, setGraph] = useState("halfYear");

  const handleGraph = (name: string) => {
    setGraph(name);
  };

  const yearData = [
    2400, 1398, 9800, 3908, 4800, 3800, 4300, 9800, 3908, 4800, 3800, 4300,
  ];
  const yearLabels = [
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

  const halfYearData = [4300, 9800, 3908, 4800, 3800, 4300];
  const halfYearLabels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE"];

  const monthData = [
    4300, 9800, 3908, 4800, 3800, 4300, 6000, 4300, 9800, 3908, 4800, 3800,
    4300, 6000, 4300, 9800, 3908, 4800, 3800, 4300, 6000, 4300, 9800, 3908,
    4800, 3800, 4300, 6000, 2908, 1000, 2000,
  ];
  const monthLabels = [
    "1/7",
    "2/7",
    "3/7",
    "4/7",
    "5/7",
    "6/7",
    "7/7",
    "8/7",
    "9/7",
    "10/7",
    "11/7",
    "12/7",
    "13/7",
    "14/7",
    "15/7",
    "16/7",
    "17/7",
    "18/7",
    "19/7",
    "20/7",
    "21/7",
    "22/7",
    "23/7",
    "24/7",
    "25/7",
    "26/7",
    "27/7",
    "28/7",
  ];

  const weekData = [4300, 9800, 3908, 4800, 3800, 4300, 6000];
  const weekLabels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const getGraph = (graph: string) => {
    switch (graph) {
      case "year":
        return { data: yearData, labels: yearLabels };
      case "halfYear":
        return { data: halfYearData, labels: halfYearLabels };
      case "month":
        return { data: monthData, labels: monthLabels };
      case "week":
        return { data: weekData, labels: weekLabels };
      default:
        return { data: [], labels: [] };
    }
  };
  return (
    <div className="flex-col w-full h-full flex gap-5 bg-[#FAF8Fc] pt-5 px-5">
      <div className="flex justify-between w-full gap-5 ">
        <div className=" w-full flex flex-col">
          <div className="p-2">
            <HomeHeading name={"Overview"} />
          </div>
          <div className="flex justify-between gap-5 w-full ">
            <OverviewCard
              icon={<IoWalletOutline className="text-2xl" />}
              name="Balance"
              amount={100}
              diffrence={15}
              secondary="#0B60B0"
              primary="#fff"
            />
            <OverviewCard
              icon={<BsBoxArrowInDownLeft className="text-2xl" />}
              name="Income"
              amount={456}
              diffrence={10}
              secondary="#3559E0"
              primary="#fff"
            />
            <OverviewCard
              icon={<BsBoxArrowInUpRight className="text-2xl" />}
              name="Expenses"
              amount={500}
              diffrence={-8}
              secondary="#654BBB"
              primary="#fff"
            />
          </div>
        </div>
        <div className=" w-full">
          <div className="flex justify-between p-2">
            <div className="w-full">
              <HomeHeading name={"Analytics"} />
            </div>
            <div className="w-full flex justify-between">
              <Button
                variant={graph === "week" ? "contained" : "outlined"}
                onClick={() => {
                  handleGraph("week");
                }}
              >
                Week
              </Button>
              <Button
                variant={graph === "month" ? "contained" : "outlined"}
                onClick={() => {
                  handleGraph("month");
                }}
              >
                Month
              </Button>
              <Button
                variant={graph === "halfYear" ? "contained" : "outlined"}
                onClick={() => {
                  handleGraph("halfYear");
                }}
              >
                6 Month
              </Button>
              <Button
                variant={graph === "year" ? "contained" : "outlined"}
                onClick={() => {
                  handleGraph("year");
                }}
              >
                Year
              </Button>
            </div>
          </div>
          <AnalyticsGraph graphData={getGraph(graph)} />
        </div>
      </div>
    </div>
  );
};
