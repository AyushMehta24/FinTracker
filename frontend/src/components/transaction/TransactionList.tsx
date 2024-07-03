export const TransactionList = ({
  name,
  detail,
  amount,
}: {
  name: string;
  detail: string;
  amount: number;
}) => {
  return (
    <div className=" flex items-center justify-between">
      <div className="flex gap-3 items-center justify-center">
        <div className="m-2">
          <img
            src="../src/assets/profileImages/image.png"
            alt="image"
            className="rounded-full w-14 h-14"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-black">{name}</div>
          <div className="text-slate-400">{detail}</div>
        </div>
      </div>
      <div
        className={`text-xl font-medium mr-2 ${
          amount < 0 ? "text-red-600" : "text-green-600"
        }`}
      >
        {amount < 0 ? "-$" + -amount : "$" + amount}
      </div>
    </div>
  );
};
