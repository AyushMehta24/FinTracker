import { HomeHeading } from "../home/HomeHeading";
import { TransactionFilter } from "./TransactionFilter";
import { TransactionList } from "./TransactionList";

export const TransactionEntry = () => {
  return (
    <div className="flex flex-col gap-5 p-2">
      <div>
        <HomeHeading name={"Transaction"} />
      </div>
      <div className=" w-full p-3 h-full rounded-lg flex flex-col overflow-hidden bg-slate-100">
        <div className=" flex gap-5">
          <TransactionFilter
            name={"Period"}
            width={100}
            options={["week", "month", "year"]}
          />
          <TransactionFilter
            name={"Payment Mode"}
            width={160}
            options={["cash", "card"]}
          />
        </div>
        <div>
          <TransactionList name="Ayush" detail="Project" amount={100} />
          <TransactionList name="Bharat" detail="Panelty" amount={500} />
          <TransactionList name="Vansh" detail="Party" amount={-100} />
          <TransactionList name="Diya" detail="Sing" amount={10} />
          <TransactionList name="Rushikesh" detail="Tea" amount={-20} />
          <TransactionList name="Ashutosh" detail="Nothing" amount={350} />
          {/* <TransactionList name="Jay Bhai" detail="Penda" amount={450} /> */}
        </div>
      </div>
    </div>
  );
};
