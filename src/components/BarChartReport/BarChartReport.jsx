// import React, { PureComponent } from 'react';
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

const data = [
  {
    total_amounts: 900,
    group: {
      description: 'Рыба',
      category: '6187067abf1429c9355ba882',
      type: false,
    },
  },
  {
    total_amounts: 800,
    group: {
      description: 'Мясо',
      category: '6187067abf1429c9355ba882',
      type: false,
    },
  },
  {
    total_amounts: 900,
    group: {
      description: 'Путевка в Рим',
      category: '6187067abf1429c9355ba882',
      type: false,
    },
  },
  {
    total_amounts: 600,
    group: {
      description: 'Корм кота',
      category: '6187067abf1429c9355ba882',
      type: false,
    },
  },
  {
    total_amounts: 500,
    group: {
      description: 'Бензин',
      category: '6187067abf1429c9355ba882',
      type: false,
    },
  },
  {
    total_amounts: 200,
    group: {
      description: 'Печеньки',
      category: '6187067abf1429c9355ba882',
      type: false,
    },
  },
];

export default function BarChartReport() {
  return (
    <>
      <div className={s.wrap}>
        <ResponsiveContainer width="100%" height={328}>
          <BarChart
            // width={758}
            // height={328}
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
              dataKey="group.description"
              padding={{ left: 77, right: 77 }}
              tickLine={false}
            />
            <Tooltip />
            <Bar
              dataKey="total_amounts"
              fill={'var(--accent-color-primary)'}
              barSize={38}
              radius={[10, 10, 0, 0]}
            >
              <LabelList dataKey="total_amounts" position="top" fill="grey" />

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
          <YAxis type="category" dataKey="group.description" tickLine={false} />
          <CartesianGrid vertical={false} horizontal={false} />
          <Bar
            dataKey="total_amounts"
            fill={'var(--accent-color-primary)'}
            barSize={18}
            radius={[0, 10, 10, 0]}
          >
            <LabelList dataKey="total_amounts" position="top" fill="grey" />

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
