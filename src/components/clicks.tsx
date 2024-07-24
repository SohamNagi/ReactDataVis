import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
    CampaignA: 39,
    CampaignB: 18,
  },
  {
    date: "2023-07-01",
    CampaignA: 33,
    CampaignB: 9,
  },
  {
    date: "2023-07-02",
    CampaignA: 50,
    CampaignB: 18,
  },
  {
    date: "2023-07-03",
    CampaignA: 43,
    CampaignB: 8,
  },
  {
    date: "2023-07-04",
    CampaignA: 49,
    CampaignB: 6,
  },
  {
    date: "2023-07-05",
    CampaignA: 10,
    CampaignB: 12,
  },
  {
    date: "2023-07-06",
    CampaignA: 47,
    CampaignB: 17,
  },
  {
    date: "2023-07-07",
    CampaignA: 27,
    CampaignB: 20,
  },
  {
    date: "2023-07-08",
    CampaignA: 23,
    CampaignB: 16,
  },
  {
    date: "2023-07-09",
    CampaignA: 38,
    CampaignB: 20,
  },
  {
    date: "2023-07-10",
    CampaignA: 29,
    CampaignB: 15,
  },
  {
    date: "2023-07-11",
    CampaignA: 32,
    CampaignB: 9,
  },
  {
    date: "2023-07-12",
    CampaignA: 18,
    CampaignB: 16,
  },
  {
    date: "2023-07-13",
    CampaignA: 37,
    CampaignB: 19,
  },
  {
    date: "2023-07-14",
    CampaignA: 15,
    CampaignB: 20,
  },
  {
    date: "2023-07-15",
    CampaignA: 40,
    CampaignB: 17,
  },
  {
    date: "2023-07-16",
    CampaignA: 32,
    CampaignB: 12,
  },
  {
    date: "2023-07-17",
    CampaignA: 48,
    CampaignB: 8,
  },
  {
    date: "2023-07-18",
    CampaignA: 28,
    CampaignB: 5,
  },
  {
    date: "2023-07-19",
    CampaignA: 15,
    CampaignB: 12,
  },
  {
    date: "2023-07-20",
    CampaignA: 12,
    CampaignB: 6,
  },
  {
    date: "2023-07-21",
    CampaignA: 37,
    CampaignB: 14,
  },
  {
    date: "2023-07-22",
    CampaignA: 15,
    CampaignB: 14,
  },
  {
    date: "2023-07-23",
    CampaignA: 49,
    CampaignB: 16,
  },
  {
    date: "2023-07-24",
    CampaignA: 15,
    CampaignB: 8,
  },
  {
    date: "2023-07-25",
    CampaignA: 30,
    CampaignB: 11,
  },
  {
    date: "2023-07-26",
    CampaignA: 17,
    CampaignB: 11,
  },
  {
    date: "2023-07-27",
    CampaignA: 28,
    CampaignB: 13,
  },
  {
    date: "2023-07-28",
    CampaignA: 32,
    CampaignB: 17,
  },
  {
    date: "2023-07-29",
    CampaignA: 46,
    CampaignB: 12,
  },
];

const chartConfig = {
  Impressions: {
    label: "Impressions",
  },
  CampaignA: {
    label: "Camp A",
    color: "hsl(var(--chart-1))",
  },
  CampaignB: {
    label: "Camp B",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Clicks() {
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
          <CardTitle>Clicks</CardTitle>
        </div>
        <div className="flex">
          {["CampaignA", "CampaignB"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
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
          <BarChart
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
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default Clicks;
