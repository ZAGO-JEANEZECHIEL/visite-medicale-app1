"use client";

import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A donut chart";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "orange" },
  { browser: "safari", visitors: 200, fill: "yellow" },
  { browser: "firefox", visitors: 187, fill: "green" },
  // { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  // { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

interface PieData {
  label: string;
  value: number;
  fill: string;
}

interface Props {
  data: PieData[];
}

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "orange",
  },
  safari: {
    label: "Safari",
    color: "yellow",
  },
  firefox: {
    label: "Firefox",
    color: "green",
  },
  // edge: {
  //   label: "Edge",
  //   color: "var(--chart-4)",
  // },
  // other: {
  //   label: "Other",
  //   color: "var(--chart-5)",
  // },
} satisfies ChartConfig;

export function Chart({ data }: Props) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="text-center pb-0">
        <CardTitle>Couverture campagnes</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-62.5"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={70}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <div className="flex items-center gap-6 overflow-x-auto px-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-sm text-gray-600 "
          >
            <span
              className="size-3 rounded-full"
              style={{ backgroundColor: item.fill }}
            />
            <span className="truncate">{item.label}</span>
          </div>
        ))}
      </div>
      <CardFooter className="flex-col gap-2 text-sm">
        {/* <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div> */}
      </CardFooter>
    </Card>
  );
}
