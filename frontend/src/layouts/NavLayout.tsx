import { NavPart } from "../components/common/NavPart";

export const NavLayout = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  return (
    <>
      <NavPart />
      {children}
    </>
  );
};
