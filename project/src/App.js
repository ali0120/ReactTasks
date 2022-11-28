import { Table, Button } from 'antd';
import React from 'react';

const data = [];
function startWith() {
   for (let i = 0; i < 10; i++){
        data.push({
                key: `${i}`,
                name: `Student ${i}`,
                age: `${i + 20}`
              });
  };
};

function addStudent() {
    data.push({
      key: `10`,
      name: `esraa`,
      age: `64536`
    });
  };
function removeStudent() {
    data.shift();
  };
  function App() {
    const [dataSource, setDataSource] = React.useState([]);
    React.useEffect(() => {
      startWith();
      setDataSource(data);
    }, []);
  const columns = [
    {
      title: "Name",
      dataIndex:"name",
    },
    {
      title: "Age",
      dataIndex:"age",
    },
    {
      title: "Action",
      render: (_, record) => {
        return <>
          <Button danger  type="primary" onClick={removeStudent()} >Delete</Button>
          </>
      },
    },
  ];
 
  return (
    <div className="App">
      
        <br />
        <Button type="primary" onClick={addStudent()} >Add</Button>
        <br/>
        <Table    id='Table' columns={columns} dataSource={dataSource}></Table>
    {/* <button>Primary Button</button> */}


    </div>
  );
}

export default App;
