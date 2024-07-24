/* eslint-disable react-refresh/only-export-components */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const KPI = () => {
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
            <div className="text-2xl">c</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-extrabold">Best Day</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">c</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-extrabold">
              Most Impressions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl ">c</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KPI;
