'use client';

import { useEffect, useRef, useState } from 'react';
import type ApexCharts from 'apexcharts';
import type { ApexOptions } from 'apexcharts';

const UNDER_12_RANKING_DATA = [491, 317, 168, 194, 231, 194, 94, 48, 35, 35, 35];
const UNDER_14_RANKING_DATA = [330, 181, 217, 114, 117, 78, 46, 14, 11, 7, 7];

const under12Options: ApexOptions = {
  series: [{ name: 'Under 12', data: UNDER_12_RANKING_DATA }],
  chart: {
    height: 400,
    type: 'line',
    zoom: { enabled: false },
    toolbar: { show: false },
  },
  colors: ['#00B1CA'],
  dataLabels: { enabled: true },
  stroke: { curve: 'smooth' },
  title: { text: 'Under 12 AITA Rankings', align: 'left' },
  grid: {
    borderColor: '#98DEED',
    row: { colors: ['#F1FAFC', 'transparent'], opacity: 0.5 },
  },
  markers: { size: 1 },
  xaxis: {
    categories: [
      "Feb '23",
      "Apr '23",
      "Jun '23",
      "Aug '23",
      "Oct '23",
      "Dec '23",
      "Feb '24",
      "Apr '24",
      "May '24",
      "Jun '24",
      "Jul '24",
    ],
    title: { text: 'Month' },
  },
  yaxis: { title: { text: 'Ranking' }, reversed: true, min: 1 },
  legend: { position: 'top', horizontalAlign: 'right', floating: true, offsetY: -25, offsetX: -5 },
};

const under14Options: ApexOptions = {
  series: [{ name: 'Under 14', data: UNDER_14_RANKING_DATA }],
  chart: {
    height: 400,
    type: 'line',
    zoom: { enabled: false },
    toolbar: { show: false },
  },
  colors: ['#00B1CA'],
  dataLabels: { enabled: true },
  stroke: { curve: 'smooth' },
  title: { text: 'Under 14 AITA Rankings', align: 'left' },
  grid: {
    borderColor: '#98DEED',
    row: { colors: ['#F1FAFC', 'transparent'], opacity: 0.5 },
  },
  markers: { size: 1 },
  xaxis: {
    categories: [
      "Nov '24",
      "Jan '25",
      "Mar '25",
      "May '25",
      "Jul '25",
      "Sep '25",
      "Nov '25",
      "Jan '26",
      "Feb '26",
      "Apr '26",
      "May '26",
    ],
    title: { text: 'Month' },
  },
  yaxis: { title: { text: 'Ranking' }, reversed: true, min: 1 },
  legend: { position: 'top', horizontalAlign: 'right', floating: true, offsetY: -25, offsetX: -5 },
};

export default function RankingChart() {
  const [activeGraph, setActiveGraph] = useState<'u12' | 'u14'>('u14');
  const u12Ref = useRef<HTMLDivElement>(null);
  const u14Ref = useRef<HTMLDivElement>(null);
  const u12ChartRef = useRef<ApexCharts | null>(null);
  const u14ChartRef = useRef<ApexCharts | null>(null);

  useEffect(() => {
    let mounted = true;

    const initChart = async () => {
      const ApexCharts = (await import('apexcharts')).default;
      if (!mounted) return;

      if (activeGraph === 'u14' && u14Ref.current && !u14ChartRef.current) {
        u14ChartRef.current = new ApexCharts(u14Ref.current, under14Options);
        u14ChartRef.current.render();
      } else if (activeGraph === 'u12' && u12Ref.current && !u12ChartRef.current) {
        u12ChartRef.current = new ApexCharts(u12Ref.current, under12Options);
        u12ChartRef.current.render();
      }
    };

    initChart();

    return () => {
      mounted = false;
    };
  }, [activeGraph]);

  useEffect(() => {
    return () => {
      u12ChartRef.current?.destroy();
      u14ChartRef.current?.destroy();
      u12ChartRef.current = null;
      u14ChartRef.current = null;
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-4">
      <div
        ref={u12Ref}
        className={`w-full h-[250px] md:h-[340px] ${activeGraph === 'u12' ? '' : 'hidden'}`}
      />
      <div
        ref={u14Ref}
        className={`w-full h-[250px] md:h-[340px] ${activeGraph === 'u14' ? '' : 'hidden'}`}
      />
      <div className="flex gap-4">
        <button
          onClick={() => setActiveGraph('u14')}
          className={`border border-primary px-3 py-2 hover:bg-primary hover:text-white transition-colors ${activeGraph === 'u14' ? 'active-ranking-graph-button' : ''}`}
        >
          Under 14
        </button>
        <button
          onClick={() => setActiveGraph('u12')}
          className={`border border-primary px-3 py-2 hover:bg-primary hover:text-white transition-colors ${activeGraph === 'u12' ? 'active-ranking-graph-button' : ''}`}
        >
          Under 12
        </button>
      </div>
    </div>
  );
}
