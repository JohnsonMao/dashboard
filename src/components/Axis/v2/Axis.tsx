import { useMemo, useRef } from 'react';
import { axisBottom, scaleLinear, select } from 'd3';

type AxisProps = {
  domainStart: number;
  domainEnd: number;
  rangeStart: number;
  rangeEnd: number;
};

function Axis({ domainStart, domainEnd, rangeStart, rangeEnd }: AxisProps) {
  const groupRef = useRef<SVGGElement>(null);
  const ticks = useMemo(() => {
    const xScale = scaleLinear()
      .domain([domainStart, domainEnd])
      .range([rangeStart, rangeEnd]);

    const width = rangeEnd - rangeStart;
    const pixelsPerTick = 30;
    const numberOfTicksTarget = Math.max(1, Math.floor(width / pixelsPerTick));

    if (groupRef.current) {
      select(groupRef.current)
        .transition()
        .duration(750)
        .call(axisBottom(xScale));
    }

    return xScale.ticks(numberOfTicksTarget).map((value) => ({
      value,
      xOffset: xScale(value),
    }));
  }, [domainStart, domainEnd, rangeStart, rangeEnd]);

  return (
    <g ref={groupRef}>
      <path d={`M ${rangeStart} 0.5 H ${rangeEnd}`} stroke="currentColor" />
      {ticks.map(({ value, xOffset }) => (
        <g key={value} transform={`translate(${xOffset} 0)`}>
          <line y2="6" stroke="currentColor" />
          <text fontSize="0.75em" textAnchor="middle" dy="1.5em">
            {value}
          </text>
        </g>
      ))}
    </g>
  );
}

export default Axis;
