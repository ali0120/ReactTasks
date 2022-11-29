import React from 'react';
import { Table, Button } from 'antd';

const data = [
  { id: Math.trunc((Math.random() * 100) + 1), name: 'Student 1', age: '29' },
  { id: Math.trunc((Math.random() * 100) + 1), name: 'Student 2', age: '29' },
  { id: Math.trunc((Math.random() * 100 + 1)), name: 'Student 3', age: '29' },
];

function App() {
  const [dataSource, setDataSource] = React.useState(data);

  function addStudent() {
    setDataSource((prev) => [...prev, {
      id: Math.floor(1 + Math.random() * 100),
      name: `esraa ${Math.trunc(1 + Math.random() * 100)}`,
      age: Math.trunc(1 + Math.random() * 100)
    }])
  };

  console.log(data);

  function removeStudent(e) {
    const filterData = dataSource.filter((item) => item.id !== e.id)
    setDataSource(filterData);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Action",
      render: (_, record) => {
        return <>
          <Button danger type="primary" onClick={() => removeStudent(record)} >Delete</Button>
        </>
      },
    },
  ];

  return (
    <div className="App">

      <br />
      <Button type="primary" onClick={addStudent} >Add</Button>
      <br />
      <Table id='Table' columns={columns} dataSource={dataSource}></Table>
      {/* <button>Primary Button</button> */}


    </div>
  );
}

export default App;
