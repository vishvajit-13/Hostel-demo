import React from 'react'
import MUIDataTable from 'mui-datatables';
import './Home.css'
const Home = () => {
  const columns = ["Name", "Company", "Number", "Price"];

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
  ];

  const options = {
    filterType: "checkbox",
  };

  return (

    <div className='main_div'>
      <div className="App wrapper">
        <h4>This is Mui datatable practice</h4>

        <MUIDataTable
          title={"Employee List"}
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    </div>
  )
}

export default Home