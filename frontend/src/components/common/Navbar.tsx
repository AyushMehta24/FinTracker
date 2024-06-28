import { NavLink } from "react-router-dom";
import { LuHome } from "react-icons/lu";
import { BsFolder } from "react-icons/bs";
import { MdAccountBalance } from "react-icons/md";
import { MdOutlineAccountTree } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";

export const Navbar = () => {
  const checkActive = (status: { isActive: boolean }) => {
    return status.isActive
      ? "bg-[#1565C0] tracking-wider text-[#FAF8Fc] py-3 rounded-md"
      : "py-3 tracking-wider";
  };

  return (
    <div className="flex flex-1  p-5 flex-col text-center font-semibold font-fira text-white text-md  justify-between ">
      <div className="flex flex-col gap-3 text-center font-semibold  ">
        <NavLink to="/" className={checkActive}>
          <div className="flex items-center gap-5 pl-10">
            <LuHome className="text-xl"  />
            Home
          </div>
        </NavLink>
        <NavLink to="/record" className={checkActive}>
          <div className="flex items-center gap-5 pl-10">
            <BsFolder  className="text-xl" />
            Record
          </div>
        </NavLink>
        <NavLink to="/accounting" className={checkActive}>
          <div className="flex items-center gap-5 pl-10">
            <MdAccountBalance  className="text-xl" />
            Accounting
          </div>
        </NavLink>
        <NavLink to="/operations" className={checkActive}>
          <div className="flex items-center gap-5 pl-10">
            <MdOutlineAccountTree  className="text-xl" />
            Operations
          </div>
        </NavLink>
        <NavLink to="/report" className={checkActive}>
          <div className="flex items-center gap-5 pl-10">
            <TbReportAnalytics className="text-xl"/>
            Report
          </div>
        </NavLink>
        <NavLink to="/transaction" className={checkActive}>
          <div className="flex items-center gap-5 pl-10">
            <BiMoneyWithdraw className="text-xl"  />
            Transaction
          </div>
        </NavLink>
      </div>
      <div className="flex flex-col gap-3 text-center font-semibold justify-between">
        <NavLink to="/myaccount" className={checkActive}>
          <div className="flex items-center gap-5 pl-10">
            <MdOutlineAccountCircle  className="text-xl"/>
            My Account
          </div>
        </NavLink>
        <NavLink to="/auth/login" className={checkActive}>
          <div className="flex items-center gap-5 pl-10">
            <IoIosLogOut className="text-xl" />
            Log Out
          </div>
        </NavLink>
      </div>
    </div>
  );
};
