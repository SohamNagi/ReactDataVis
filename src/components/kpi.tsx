/* eslint-disable react-refresh/only-export-components */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Entry {
  date: string;
  campaign: string;
  impressions: number;
  clicks: number;
}

interface KPIProps {
  entries: Entry[];
}

const KPI = (entries: KPIProps) => {
  let mostClicks = 0;
  let mostImpressions = 0;
  let bestDay = "";
  let highestActivity = 0;
  let a_imps = 0;
  let b_imps = 0;
  let a_clicks = 0;
  let b_clicks = 0;
  let clickCamp = "";
  let impCamp = "";
  let highestClicks = 0;
  let highestImps = 0;

  const dateActivityMap: { [key: string]: number } = {};

  for (const entry of entries.entries) {
    const combinedActivity = entry.impressions + entry.clicks;

    if (entry.clicks > mostClicks) {
      mostClicks = entry.clicks;
    }

    if (entry.impressions > mostImpressions) {
      mostImpressions = entry.impressions;
    }

    if (dateActivityMap[entry.date]) {
      dateActivityMap[entry.date] += combinedActivity;
    } else {
      dateActivityMap[entry.date] = combinedActivity;
    }

    if (entry.campaign === "Campaign A") {
      a_imps += entry.impressions;
      a_clicks += entry.clicks;
    } else {
      b_imps += entry.impressions;
      b_clicks += entry.clicks;
    }
  }

  for (const date in dateActivityMap) {
    if (dateActivityMap[date] > highestActivity) {
      highestActivity = dateActivityMap[date];
      bestDay = date;
    }
  }

  if (a_clicks > b_clicks) {
    clickCamp = "Campagin A";
    highestClicks = a_clicks;
  } else {
    clickCamp = "Campaign B";
    highestImps = b_clicks;
  }

  if (a_imps > b_imps) {
    impCamp = "Campagin A";
    highestClicks = a_imps;
  } else {
    impCamp = "Campaign B";
    highestImps = b_imps;
  }

  return (
    <div>
      <div className="grid text-center grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm   font-extrabold">
              Most Clicks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{clickCamp}</div>
            <p className="text-xs text-muted-foreground">
              {highestClicks} Clicks
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-extrabold">Best Day</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{bestDay}</div>
            <p className="text-xs text-muted-foreground">
              {highestActivity} Interactions
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-extrabold">
              Most Impressions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl ">{impCamp}</div>
            <p className="text-xs text-muted-foreground">
              {highestImps} Impressions
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KPI;
