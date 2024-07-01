import { BsThreeDotsVertical } from "react-icons/bs";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { HiArrowTrendingDown } from "react-icons/hi2";

export const OverviewCard = ({
  icon,
  name,
  amount,
  diffrence,
  primary,
  secondary,
}: {
  icon: JSX.Element;
  name: string;
  amount: number;
  diffrence: number;
  primary: string;
  secondary: string;
}) => {


  const getIcon = (diffrence: number) => {
    if (diffrence < 0) {
      return <HiArrowTrendingDown />;
    }
    return <HiArrowTrendingUp />;
  };
  return (
    <div
      className=" h-50 w-full rounded-md shadow-md text-white"
      style={{ backgroundColor: primary }}
    >
      <div className=" rounded-lg p-3" style={{ backgroundColor: secondary }}>
        <div className="flex justify-between">
          {icon}
          <BsThreeDotsVertical className="text-2xl" />
        </div>
        <div className=" mt-2 text-xl">{name}</div>
      </div>
      <div className="p-3 mb-5 text-black">
        <div className="text-3xl font-medium">${amount}</div>
        <div className="text-sm flex gap-1 items-center mt-1">
          {diffrence}%{getIcon(diffrence)}
        </div>
      </div>
    </div>
  );
};
