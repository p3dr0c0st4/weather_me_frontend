import { Col, Row } from 'antd';
import {useState, useRef, useEffect} from 'react';
import * as d3 from 'd3';


export default () =>{
  const [data] = useState([
    [12, 20],
    [13, 78],
    [15, 36],
    [12, 13],
    [8, 99],
    [5,80],
  ] )

  const svgRef:any = useRef();


  useEffect (() => {
    // setting up container
    const w = 400;
    const h = 400;
    const svg = d3.select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .style('overflow', 'visible')
      .style('margin-top', '5em')
      .style('margin-bottom','6.5em')

    // setting up scaling
    const xScale = d3.scaleLinear()
      .domain([0, 60])
      .range([0, w]);
    const yScale = d3.scaleLinear()
      .domain([0,100])
      .range([h,0]);

    // setting up axis
    const xAxis = d3.axisBottom(xScale).ticks(data.length);
    const yAxis = d3.axisLeft(yScale).ticks(10);
    svg.append('g')
      .call(xAxis)
      .attr('transform', `translate(0, ${h})`);
    svg.append('g')
      .call(yAxis);

    // setting up axis labeling 
    svg.append('text')
      .attr('x', w/2)
      .attr('y', h + 50)
      .text('Time');
    svg.append('text')
      .attr('y', h/2)
      .attr('x', -100)
      .text('Humidity');

    // setting up svg data (circle points)
    svg.selectAll()
      .data(data)
      .enter()
      .append('circle')
        .attr('cx', d => xScale(d[0])) //index 0 of data
        .attr('cy', d => yScale(d[1])) //index 1 of data
        .attr('r', 2); //pointer size
  }, [data]);

  
  return (
    <>
    <Row>
      <Col span={8}></Col>

       <Col span={8} style={{textAlign:'center'}}>
          <svg ref={svgRef}> </svg>
       </Col>

       <Col span={8}></Col>
    </Row>
    </>
  )
}