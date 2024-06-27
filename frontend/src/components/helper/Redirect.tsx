import { useNavigate } from "react-router-dom";

export const Redirect = ({
  label,
  to,
  className,
}: {
  label: string;
  to: string;
  className: string;
}) => {
  const navigate = useNavigate();
  return (
    <strong className={className} onClick={() => navigate(to, { replace: true })}>
      {label}
    </strong>
  );
};
