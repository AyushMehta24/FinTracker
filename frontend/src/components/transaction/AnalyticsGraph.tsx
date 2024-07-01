import { BarChart } from "@mui/x-charts/BarChart";

export const AnalyticsGraph = ({
  graphData,
}: {
  graphData: { data: number[]; labels: string[] };
}) => {
  return (
    <div>
      <BarChart
        width={850}
        height={220}
        borderRadius={5}
        series={[
          {
            data: graphData.data,
            id: "pvId",
            color: "#3572EF",
          },
        ]}
        xAxis={[
          {
            data: graphData.labels,
            scaleType: "band",
          },
        ]}
        leftAxis={null}
        bottomAxis={{
          disableLine: true,
          disableTicks: true,
        }}
      />
    </div>
  );
};
