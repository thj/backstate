import React from 'react';
import '../App.css';
import { Table } from 'antd';
import 'ant-design-pro/dist/ant-design-pro.css';
import { Pie, yuan } from 'ant-design-pro/lib/Charts';

// 圆形图数据
const salesPieData = [
  {
    x: '家用电器',
    y: 4544,
  },
  {
    x: '食用酒水',
    y: 3321,
  },
  {
    x: '个护健康',
    y: 3113,
  },
  {
    x: '服饰箱包',
    y: 2341,
  },
  {
    x: '母婴产品',
    y: 1231,
  },
  {
    x: '其他',
    y: 1231,
  },
];

// 表格数据
const columns = [
    {
      title: 'Full Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
    },
    {
      title: 'Column 1',
      dataIndex: 'address',
      key: '1',
      width: 150,
    },
    {
      title: 'Column 2',
      dataIndex: 'address',
      key: '2',
      width: 150,
    },
    {
      title: 'Column 3',
      dataIndex: 'address',
      key: '3',
      width: 150,
    },
    {
      title: 'Column 4',
      dataIndex: 'address',
      key: '4',
      width: 150,
    },
    {
      title: 'Column 5',
      dataIndex: 'address',
      key: '5',
      width: 150,
    },
    {
      title: 'Column 6',
      dataIndex: 'address',
      key: '6',
      width: 150,
    },
    {
      title: 'Column 7',
      dataIndex: 'address',
      key: '7',
      width: 150,
    },
    { title: 'Column 8', dataIndex: 'address', key: '8' },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <a>action</a>,
    },
  ];
  
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }

class Info extends React.Component {

    render() {
        return (
            <div className='Info'>
                <Pie
                    hasLegend
                    title="销售额"
                    subTitle="销售额"
                    total={() => (
                    <span
                        dangerouslySetInnerHTML={{
                        __html: yuan(salesPieData.reduce((pre, now) => now.y + pre, 0)),
                        }}
                    />
                    )}
                    data={salesPieData}
                    valueFormat={val => <span dangerouslySetInnerHTML={{ __html: yuan(val) }} />}
                    height={294}
                />

                <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
            </div>
        )
    }
}

export default Info;