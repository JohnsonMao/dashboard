import * as d3 from 'd3';
import { useEffect, useRef, useState } from 'react';
import mockData from '@/constant/data';

const width = 500;
const height = 300;
const margin = { top: 30, left: 30, bottom: 30, right: 30 };

function BarChart() {
  const [data, setData] = useState(mockData);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = d3.select(wrapperRef.current);

    const svg = wrapper
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value) || 0])
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([margin.bottom, height - margin.top])
      .padding(0.2);

    svg
      .append('g')
      .call(d3.axisLeft(yScale))
      .attr('transform', `translate(${margin.left - 0.5}, 0)`);
    svg
      .append('g')
      .call(d3.axisBottom(xScale))
      .attr('transform', `translate(0, ${height - margin.bottom})`);

    svg
      .append('g')
      .selectAll<SVGRectElement, (typeof data)[number]>('rect')
      .data(data, (d) => d.name)
      .join('rect')
      .attr('x', margin.left)
      .attr('y', (d) => yScale(d.name) || 0)
      .attr('height', yScale.bandwidth())
      .transition()
      .attr('width', (d) => xScale(d.value) - margin.left)
      .attr('fill', 'pink');

    d3.selectAll('.tick text').attr('font-size', '2em');

    const clickHandler = () => {
      setData((pre) =>
        pre.map((item) => ({
          ...item,
          value: item.value + Math.floor(Math.random() * 5),
        }))
      );
    };
    window.addEventListener('click', clickHandler);

    return () => {
      wrapper.select('svg').remove();
      window.removeEventListener('click', clickHandler);
    };
  }, [data]);

  return <div ref={wrapperRef}></div>;
}

export default BarChart;
