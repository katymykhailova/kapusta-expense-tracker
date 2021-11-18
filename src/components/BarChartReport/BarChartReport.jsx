import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  CartesianGrid,
  // Tooltip,
  LabelList,
  ResponsiveContainer,
} from 'recharts';
import s from './BarChartReport.module.css';
import { PureComponent } from 'react';

export default function BarChartReport({
  transactions,
  categories,
  chartsCategoryId,
}) {
  const data = chartsCategoryId ? transactions : categories;
  class CustomizedTick extends PureComponent {
    render() {
      const { x, y, payload } = this.props;

      return (
        <g transform={`translate(${x},${y})`}>
          <text
            x={70}
            y={-15}
            dy={-10}
            textAnchor="end"
            fill="grey"
            transform="rotate(-90)"
          >
            {payload.value}
          </text>
        </g>
      );
    }
  }

  const renderCustomizedLabel = props => {
    const { x, y, width, height, value } = props;

    return (
      <g>
        {/* <text x={-50} y={0} dy={350} fill="grey" transform="rotate(-90)"></text> */}
        <text fill="grey" transform="rotate(-90)">
          {value}
        </text>
      </g>
    );
  };

  return (
    <>
      <div className={s.wrap}>
        <ResponsiveContainer width="100%" height={328}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="1" vertical={false} />
            <XAxis
              dataKey={chartsCategoryId ? 'description' : 'category.name'}
              padding={{ left: 77, right: 77 }}
              tickLine={false}
              axisLine={false}
              tick={<CustomizedTick />}
            />
            {/* <Tooltip /> */}
            <Bar
              dataKey={chartsCategoryId ? 'amount' : 'total_amounts'}
              fill={'var(--accent-color-primary)'}
              barSize={38}
              radius={[10, 10, 0, 0]}
            >
              <LabelList
                dataKey={chartsCategoryId ? 'amount' : 'total_amounts'}
                position="inside"
                //margin={5}
                fill="grey"
                angle="-90"

                //content={renderCustomizedLabel}
              />
              />
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    index % 2 !== 0
                      ? 'var(--accent-color-light)'
                      : 'var(--accent-color-primary)'
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className={s.wrapMobile}>
        <BarChart
          width={282}
          height={521}
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey={chartsCategoryId ? 'description' : 'category.name'}
            hide
            mirror
          />
          <CartesianGrid vertical={false} horizontal={false} />
          <Bar
            dataKey={chartsCategoryId ? 'amount' : 'total_amounts'}
            fill={'var(--accent-color-primary)'}
            barSize={18}
            radius={[0, 10, 10, 0]}
          >
            <LabelList
              dataKey={chartsCategoryId ? 'amount' : 'total_amounts'}
              position="bottom"
              fill="grey"
            />
            <LabelList
              dataKey={chartsCategoryId ? 'description' : 'category.name'}
              position="top"
              fill="grey"
            />

            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  index % 2 !== 0
                    ? 'var(--accent-color-light)'
                    : 'var(--accent-color-primary)'
                }
              />
            ))}
          </Bar>
        </BarChart>
      </div>
    </>
  );
}
