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

    if (entry.campaign === "CampaignA") {
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

  const bestdate = new Date(bestDay);

  // Array of month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Extract the parts
  const year = bestdate.getFullYear();
  const month = monthNames[bestdate.getMonth()]; // Get the month name from the array
  const day = bestdate.getDate();

  // Format the date
  const formattedDate = `${day} ${month}, ${year}`;

  if (a_clicks > b_clicks) {
    clickCamp = "Campaign A";
    highestClicks = a_clicks;
  } else {
    clickCamp = "Campaign B";
    highestImps = b_clicks;
  }

  if (a_imps > b_imps) {
    impCamp = "Campaign A";
    highestClicks = a_imps;
  } else {
    impCamp = "Campaign B";
    highestImps = b_imps;
  }

  return (
    <div>
      <div className="grid text-center px-5 grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="sm: text-[8px] text-sm font-bold">
              Most Clicks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="sm:text-[10px] md:text-2xl">{clickCamp}</div>
            <p className="text-xs text-muted-foreground">
              {highestClicks} Clicks
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="">
              Best Day
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="sm:text-[8px] md:text-2xl">{formattedDate}</div>
            <p className="text-xs text-muted-foreground ">
              {highestActivity} Interactions
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="sm: text-[8px] text-sm font-bold">
              Most Impressions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="sm:text-[10px] md:text-2xl ">{impCamp}</div>
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
