import { styled } from "@mui/material";
import { useDrawingArea } from "@mui/x-charts";

export const PieCenterLabel = () => {
  const { width, height, left, top } = useDrawingArea();
  return (
    <>
      <StyledText x={left + width / 2} y={top + height / 2 - 10}>
        100%
        <tspan x={left + width / 2} dy={20} fontSize="medium">
          Operations
        </tspan>
      </StyledText>
    </>
  );
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: "large",
  fontWeight: 600,
}));
