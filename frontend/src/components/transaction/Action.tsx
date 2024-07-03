import { HomeHeading } from "../home/HomeHeading";

export const Action = () => {
  return (
    <div className="p-2">
      <HomeHeading name={"Action"} />
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div>transfer</div>
          <div>recive</div>
        </div>
      <div>expenses in may</div>
      <div>fav spend</div>
      </div>
    </div>
  );
};
