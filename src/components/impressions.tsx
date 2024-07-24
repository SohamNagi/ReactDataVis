/* tslint:disable */

import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  {
    date: "2023-06-30",
    CampaignA: 7314,
    CampaignB: 6988,
  },
  {
    date: "2023-07-01",
    CampaignA: 2409,
    CampaignB: 9253,
  },
  {
    date: "2023-07-02",
    CampaignA: 2525,
    CampaignB: 8940,
  },
  {
    date: "2023-07-03",
    CampaignA: 4687,
    CampaignB: 9657,
  },
  {
    date: "2023-07-04",
    CampaignA: 7092,
    CampaignB: 3223,
  },
  {
    date: "2023-07-05",
    CampaignA: 4363,
    CampaignB: 422,
  },
  {
    date: "2023-07-06",
    CampaignA: 8599,
    CampaignB: 8100,
  },
  {
    date: "2023-07-07",
    CampaignA: 5451,
    CampaignB: 9745,
  },
  {
    date: "2023-07-08",
    CampaignA: 5017,
    CampaignB: 9044,
  },
  {
    date: "2023-07-09",
    CampaignA: 5500,
    CampaignB: 6059,
  },
  {
    date: "2023-07-10",
    CampaignA: 1124,
    CampaignB: 9904,
  },
  {
    date: "2023-07-11",
    CampaignA: 2352,
    CampaignB: 3770,
  },
  {
    date: "2023-07-12",
    CampaignA: 8453,
    CampaignB: 4118,
  },
  {
    date: "2023-07-13",
    CampaignA: 2162,
    CampaignB: 9591,
  },
  {
    date: "2023-07-14",
    CampaignA: 1804,
    CampaignB: 8022,
  },
  {
    date: "2023-07-15",
    CampaignA: 5017,
    CampaignB: 3991,
  },
  {
    date: "2023-07-16",
    CampaignA: 4465,
    CampaignB: 385,
  },
  {
    date: "2023-07-17",
    CampaignA: 6941,
    CampaignB: 641,
  },
  {
    date: "2023-07-18",
    CampaignA: 7912,
    CampaignB: 6776,
  },
  {
    date: "2023-07-19",
    CampaignA: 6435,
    CampaignB: 8946,
  },
  {
    date: "2023-07-20",
    CampaignA: 6586,
    CampaignB: 2632,
  },
  {
    date: "2023-07-21",
    CampaignA: 8625,
    CampaignB: 1109,
  },
  {
    date: "2023-07-22",
    CampaignA: 8708,
    CampaignB: 2939,
  },
  {
    date: "2023-07-23",
    CampaignA: 546,
    CampaignB: 7256,
  },
  {
    date: "2023-07-24",
    CampaignA: 9719,
    CampaignB: 8888,
  },
  {
    date: "2023-07-25",
    CampaignA: 4591,
    CampaignB: 1476,
  },
  {
    date: "2023-07-26",
    CampaignA: 1910,
    CampaignB: 8480,
  },
  {
    date: "2023-07-27",
    CampaignA: 9271,
    CampaignB: 6743,
  },
  {
    date: "2023-07-28",
    CampaignA: 5442,
    CampaignB: 3784,
  },
  {
    date: "2023-07-29",
    CampaignA: 391,
    CampaignB: 2336,
  },
];

const chartConfig = {
  views: {
    label: "Impressions",
  },
  CampaignA: {
    label: "Campaign A",
    color: "hsl(var(--chart-1))",
  },
  CampaignB: {
    label: "Campaign B",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Impressions(data) {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("CampaignA");

  const total = React.useMemo(
    () => ({
      CampaignA: chartData.reduce((acc, curr) => acc + curr.CampaignA, 0),
      CampaignB: chartData.reduce((acc, curr) => acc + curr.CampaignB, 0),
    }),
    []
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Impressions</CardTitle>
        </div>
        <div className="flex">
          {["CampaignA", "CampaignB"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default Impressions;
