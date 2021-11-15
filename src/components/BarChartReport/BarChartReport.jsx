// import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, Cell, CartesianGrid, Tooltip } from 'recharts';
import s from './BarChartReport.module.css';

const data = [
  {
    total_amounts: 1000,
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
    total_amounts: 1200,
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
    <div className={s.wrap}>
      <BarChart
        width={605}
        height={328}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="1" vertical={false} />
        <XAxis dataKey="group.description" />
        <Tooltip />
        <Bar
          dataKey="total_amounts"
          fill={'var(--accent-color-primary)'}
          barSize={38}
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
    </div>
  );
}
