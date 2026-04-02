"use client";
import Image from "next/image";

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
import Legend from "./legend";

export const description = "A donut chart";

const chartData = [
  { browser: "chrome", visitors: 150, fill: "#EE9430" },
  { browser: "safari", visitors: 300, fill: "#DCE001" },
  { browser: "firefox", visitors: 100, fill: "#2EB166" },
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
    color: "#EE9430",
  },
  safari: {
    label: "Safari",
    color: "#DCE001",
  },
  firefox: {
    label: "Firefox",
    color: "#2EB166",
  },
} satisfies ChartConfig;

export function Chart({ data }: Props) {
  return (
    <Card className="flex flex-col border border-amber-200 shadow ">
      <CardHeader className="text-center pb-0">
        <CardTitle className="text-xl">Couverture campagnes</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-60"
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
              innerRadius={65}
            />
          </PieChart>
        </ChartContainer>
        <div className="w-full flex  items-center justify-center">
          <Legend />
        </div>
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

      <CardFooter className="w-full flex flex-col items-center pt-5 ">
        <div className="flex item-center justify-center ">
          <Image
            src="/plus.png"
            alt="logo"
            width={140}
            height={150}
            className="overflow-hidden"
          />
        </div>
      </CardFooter>
    </Card>
  );
}
