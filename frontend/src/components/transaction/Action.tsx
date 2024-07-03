import { BsBoxArrowInDownLeft, BsBoxArrowInUpRight } from "react-icons/bs";
import { HomeHeading } from "../home/HomeHeading";
import { MonthExpenseCount } from "./MonthExpenseCount";
import { Avatar, AvatarGroup } from "@mui/material";

export const Action = () => {
  return (
    <div className=" bg-red-100 w-full flex flex-col gap-3 p-2">
      <HomeHeading name="Action" />
      <div className="flex gap-3">
        <div className="flex flex-col justify-between gap-2 w-full ">
          <div className="bg-slate-100 p-3 flex flex-col gap-3 rounded-xl">
            <BsBoxArrowInUpRight className="text-2xl" />
            <div className="text-2xl">Transfer</div>
          </div>
          <div className="bg-slate-100 flex flex-col gap-3 p-3 rounded-xl">
            <BsBoxArrowInDownLeft className="text-2xl" />
            <div className="text-2xl">Recive</div>
          </div>
        </div>
        <div className="bg-slate-100 flex flex-col p-2 justify-between gap-2 w-full rounded-xl">
          <div className="p-2 text-xl">
            Expense in
            <div>July</div>
          </div>
          <div className="p-2">
            <div className="text-xl">$ 2560.56</div>
            <MonthExpenseCount />
          </div>
        </div>
        <div className="bg-slate-100 flex flex-col p-2 justify-between gap-2 w-full rounded-xl">
          {" "}
          <div className="p-2 text-xl">
            Favourite <div>Spend</div>
          </div>
          <AvatarGroup
            max={4}
            className="mb-3 flex justify-center items-center"
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
        </div>
      </div>
    </div>
  );
};
