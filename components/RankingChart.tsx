'use client';

import { useEffect, useRef, useState } from 'react';
import type ApexCharts from 'apexcharts';
import type { ApexOptions } from 'apexcharts';

const UNDER_12_DATA = [491, 317, 168, 194, 231, 194, 94, 48, 35, 35, 35];
const UNDER_14_DATA = [330, 181, 217, 114, 117, 78, 46, 14, 11, 7, 7];

const U12_MONTHS = ["Feb '23","Apr '23","Jun '23","Aug '23","Oct '23","Dec '23","Feb '24","Apr '24","May '24","Jun '24","Jul '24"];
const U14_MONTHS = ["Nov '24","Jan '25","Mar '25","May '25","Jul '25","Sep '25","Nov '25","Jan '26","Feb '26","Apr '26","May '26"];

function buildOptions(data: number[], categories: string[]): ApexOptions {
  return {
    series: [{ name: 'Ranking', data }],
    chart: {
      type: 'area',
      height: '100%',
      zoom: { enabled: false },
      toolbar: { show: false },
      background: 'transparent',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 600,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        gradientToColors: ['transparent'],
        stops: [0, 100],
        opacityFrom: 0.45,
        opacityTo: 0.0,
      },
    },
    colors: ['#00b1ca'],
    stroke: {
      curve: 'smooth',
      width: 2.5,
    },
    dataLabels: { enabled: false },
    markers: {
      size: 4,
      colors: ['#003d47'],
      strokeColors: '#00b1ca',
      strokeWidth: 2,
      hover: { size: 6 },
    },
    grid: {
      borderColor: 'rgba(255,255,255,0.06)',
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
      padding: { left: 8, right: 8 },
    },
    xaxis: {
      categories,
      labels: {
        style: { colors: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-dm-sans)', fontSize: '11px' },
      },
      axisBorder: { color: 'rgba(255,255,255,0.08)' },
      axisTicks: { color: 'rgba(255,255,255,0.08)' },
    },
    yaxis: {
      reversed: true,
      min: 1,
      labels: {
        style: { colors: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-dm-sans)', fontSize: '11px' },
        formatter: (val: number) => `#${Math.round(val)}`,
      },
    },
    tooltip: {
      theme: 'dark',
      style: { fontFamily: 'var(--font-dm-sans)' },
      y: { formatter: (val: number) => `Rank #${val}` },
    },
    legend: { show: false },
  };
}

export default function RankingChart() {
  const [active, setActive] = useState<'u14' | 'u12'>('u14');
  const u12Ref = useRef<HTMLDivElement>(null);
  const u14Ref = useRef<HTMLDivElement>(null);
  const u12Chart = useRef<ApexCharts | null>(null);
  const u14Chart = useRef<ApexCharts | null>(null);

  useEffect(() => {
    let mounted = true;
    const init = async () => {
      const ApexChartsLib = (await import('apexcharts')).default;
      if (!mounted) return;
      if (active === 'u14' && u14Ref.current && !u14Chart.current) {
        u14Chart.current = new ApexChartsLib(u14Ref.current, buildOptions(UNDER_14_DATA, U14_MONTHS));
        u14Chart.current.render();
      } else if (active === 'u12' && u12Ref.current && !u12Chart.current) {
        u12Chart.current = new ApexChartsLib(u12Ref.current, buildOptions(UNDER_12_DATA, U12_MONTHS));
        u12Chart.current.render();
      }
    };
    init();
    return () => { mounted = false; };
  }, [active]);

  useEffect(() => {
    return () => {
      u12Chart.current?.destroy();
      u14Chart.current?.destroy();
      u12Chart.current = null;
      u14Chart.current = null;
    };
  }, []);

  const bestRank = active === 'u14' ? '#7' : '#35';
  const subtitle = active === 'u14' ? 'Nov 2024 – May 2026' : 'Feb 2023 – Jul 2024';

  return (
    <div
      className="w-full h-full flex flex-col"
      style={{ background: '#003d47', minHeight: '440px' }}
    >
      {/* Card header */}
      <div className="flex items-start justify-between px-6 pt-6 pb-4">
        <div>
          <p className="font-body text-[9px] tracking-[0.28em] uppercase text-[#00b1ca]/60 font-semibold mb-1">
            AITA Rankings
          </p>
          <h3 className="font-heading font-bold text-white text-lg leading-tight">
            {active === 'u14' ? 'Under 14 Trajectory' : 'Under 12 Trajectory'}
          </h3>
          <p className="font-body text-[11px] text-white/25 mt-0.5">{subtitle}</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="font-body text-[9px] tracking-[0.2em] uppercase text-white/30">Peak Rank</span>
          <span className="font-heading font-bold text-[#00b1ca] text-2xl leading-none">{bestRank}</span>
        </div>
      </div>

      {/* Toggle */}
      <div className="flex px-6 gap-2 mb-4">
        {(['u14', 'u12'] as const).map((id) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className="font-body text-[11px] tracking-[0.15em] uppercase px-4 py-1.5 transition-all"
            style={{
              background: active === id ? '#00b1ca' : 'rgba(255,255,255,0.07)',
              color: active === id ? '#003d47' : 'rgba(255,255,255,0.45)',
              fontWeight: active === id ? 700 : 400,
            }}
          >
            {id === 'u14' ? 'Under 14' : 'Under 12'}
          </button>
        ))}
      </div>

      {/* Chart area */}
      <div className="flex-1 px-2 pb-4" style={{ minHeight: '280px' }}>
        <div
          ref={u12Ref}
          className="w-full h-full"
          style={{ display: active === 'u12' ? 'block' : 'none', height: '260px' }}
        />
        <div
          ref={u14Ref}
          className="w-full h-full"
          style={{ display: active === 'u14' ? 'block' : 'none', height: '260px' }}
        />
      </div>
    </div>
  );
}
