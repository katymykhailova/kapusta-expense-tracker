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

export default function BarChartReport({ transactions }) {
  return (
    <>
      <div className={s.wrap}>
        <ResponsiveContainer width="100%" height={328}>
          <BarChart
            data={transactions}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="1" vertical={false} />
            <XAxis
              dataKey="description"
              padding={{ left: 77, right: 77 }}
              tickLine={false}
            />
            {/* <Tooltip /> */}
            <Bar
              dataKey="amount"
              fill={'var(--accent-color-primary)'}
              barSize={38}
              radius={[10, 10, 0, 0]}
            >
              <LabelList dataKey="amount" position="top" fill="grey" />

              {transactions.map((_, index) => (
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
          data={transactions}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="description" tickLine={false} hide />
          <CartesianGrid vertical={false} horizontal={false} />
          <Bar
            dataKey="amount"
            fill={'var(--accent-color-primary)'}
            barSize={18}
            radius={[0, 10, 10, 0]}
          >
            <LabelList dataKey="amount" position="top" fill="grey" />

            {transactions.map((_, index) => (
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
