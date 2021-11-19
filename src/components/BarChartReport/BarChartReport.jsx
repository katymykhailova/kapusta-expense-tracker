import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  CartesianGrid,
  Tooltip,
  LabelList,
  ResponsiveContainer,
} from 'recharts';
import s from './BarChartReport.module.css';

export default function BarChartReport({
  transactions,
  categories,
  chartsCategoryId,
}) {
  const data = chartsCategoryId ? transactions : categories;

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
            />
            <YAxis hide={true} tickCount={9} />
            <Tooltip />
            <Bar
              dataKey={chartsCategoryId ? 'amount' : 'total_amounts'}
              fill={'var(--accent-color-primary)'}
              barSize={38}
              radius={[10, 10, 0, 0]}
            >
              <LabelList
                dataKey={chartsCategoryId ? 'amount' : 'total_amounts'}
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
        </ResponsiveContainer>
      </div>

      <div className={s.wrapMobile}>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} layout="vertical">
            <YAxis
              type={'category'}
              dataKey={chartsCategoryId ? 'description' : 'category.name'}
              hide={true}
            />
            <XAxis hide={true} scale="auto" width="50%" />
            <CartesianGrid vertical={false} horizontal={false} />
            <Bar
              dataKey={chartsCategoryId ? 'description' : 'category.name'}
              fill="white"
              barSize={10}
            >
              <LabelList position="insideLeft" fill="grey" />
              <LabelList
                dataKey={chartsCategoryId ? 'amount' : 'total_amounts'}
                position="right"
                offset="100"
                fill="grey"
              />
            </Bar>
            <Bar
              dataKey={chartsCategoryId ? 'amount' : 'total_amounts'}
              fill={'var(--accent-color-primary)'}
              barSize={15}
              radius={[0, 10, 10, 0]}
            >
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
    </>
  );
}
