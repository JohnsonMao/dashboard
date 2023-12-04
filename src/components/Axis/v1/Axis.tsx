import { useEffect, useRef } from 'react';
import { axisBottom, scaleLinear, select } from 'd3';

type AxisProps = {
  domainStart: number;
  domainEnd: number;
  rangeStart: number;
  rangeEnd: number;
};

function Axis({ domainStart, domainEnd, rangeStart, rangeEnd }: AxisProps) {
  const groupRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!groupRef.current) return;

    const xScale = scaleLinear()
      .domain([domainStart, domainEnd])
      .range([rangeStart, rangeEnd]);

    const width = rangeEnd - rangeStart;
    const pixelsPerTick = 30;
    const numberOfTicksTarget = Math.max(1, Math.floor(width / pixelsPerTick));

    select(groupRef.current)
      .transition()
      .duration(750)
      .call(axisBottom(xScale).ticks(numberOfTicksTarget));

    select(groupRef.current).attr('font-size', '.5em');
  }, [domainStart, domainEnd, rangeStart, rangeEnd]);

  return <g ref={groupRef}></g>;
}

export default Axis;
