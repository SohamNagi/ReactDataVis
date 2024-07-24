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

interface Entry {
  date: string;
  campaign: string;
  impressions: number;
  clicks: number;
}

interface ImpProps {
  entries: Entry[];
}

interface CombinedData {
  date: string;
  "CampaignA": number;
  "CampaignB": number;
}

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

export function Impressions(entries: ImpProps) {
  const chartData: CombinedData[] = entries.entries.reduce((acc: CombinedData[], curr: Entry) => {
    const existing = acc.find(entry => entry.date === curr.date);
    if (existing) {
      if (curr.campaign === "CampaignA") {
        existing.CampaignA = curr.impressions;
      } else if (curr.campaign === "CampaignB") {
        existing.CampaignB = curr.impressions;
      }
    } else {
      acc.push({
        date: curr.date,
        CampaignA: curr.campaign === "CampaignA" ? curr.impressions : undefined,
        CampaignB: curr.campaign === "CampaignB" ? curr.impressions : undefined
      });
    }
    return acc;
  }, []);

  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("CampaignA");

  const total = React.useMemo(
    () => ({
      CampaignA: chartData.reduce((acc, curr) => acc + curr.CampaignA, 0),
      CampaignB: chartData.reduce((acc, curr) => acc + curr.CampaignB, 0),
    }),
    [chartData]
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
