export const MoneyCard = ({
  count,
  amount,
  element,
  type,
  borderColour,
}: {
  count: number;
  amount: number;
  element: JSX.Element;
  type: string;
  borderColour: string;
}) => {
  return (
    <div
      className="border h-24 w-full mt-3 border-r-[5px] rounded-md"
      style={{ borderRightColor: borderColour }}
    >
      <div className="p-3 text-xl">
        <div className="flex justify-between uppercase">
          <div>
            {count} {type}
          </div>
          <div>{element}</div>
        </div>
        <div className="text-xl">
          R$ <span className="text-3xl font-semibold">{amount}</span>
        </div>
      </div>
    </div>
  );
};
