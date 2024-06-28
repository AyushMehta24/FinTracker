export const MoneyCard = ({
  message,
  amount,
  icon,
}: {
  message: string;
  amount: number;
  icon: string;
}) => {
  return (
    <div className="border border-slate-300 h-24 w-full mt-3">
      <div className="p-3 text-xl  ">
        <div className="flex justify-between bg-red-600">
          <div>{message}</div>
          <div>{icon}</div>
        </div>
        <div className="text-xl">
          R${"  "}
          <span className="text-3xl">{amount}</span>
        </div>
      </div>
    </div>
  );
};
