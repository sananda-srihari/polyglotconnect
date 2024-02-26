import React from "react";
import MUIDataTable from "mui-datatables";
import { Userdata } from "../utils/data";
import AdminLayout from './AdminLayout';

const UserDetails = () => {
  const columns = ["Name", "Place", "City", "State", "Role", "Language"];

  const options = {
    filterType: "checkbox",
    selectableRowsHideCheckboxes: false, // Show checkboxes
  };

  return (
    <AdminLayout>
      <div style={{ marginRight:'50px',marginLeft:'50px'}}>
      <MUIDataTable
        title="User Details List"
        data={Userdata}
        columns={columns}
        options={options}
      />
      </div>
    </AdminLayout>
  );
}

export default UserDetails;
