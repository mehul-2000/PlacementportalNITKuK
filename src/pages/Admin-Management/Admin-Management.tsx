import Grid from "@mui/material/Grid";
import AdminCard from "../../components/AdminManagementCards/admincard";

function AdminPanel() {
  return (
    <>
      <div className="admin-panel-wrapper" style={{ padding: "1.2rem" }}>
        <div className="col-md-5 align-self-center">
          <h5 className="text-themecolor" style={{ marginTop: "1rem" }}>
            Admin Management
          </h5>
        </div>
        <Grid container spacing={2}>
          <Grid item sm={12} md={6}>
            <AdminCard
              color="#C21717"
              text="#FFFFFF"
              title="Coordinator Management"
              head="Manage Coordinators and Admin"
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <AdminCard
              color="#C21717"
              text="#FFFFFF"
              title="Students Management"
              head="Manage Registered Students"
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <AdminCard
              color="#C21717"
              text="#FFFFFF"
              title="Red Flags Management"
              head="Manage Students Red Flags"
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <AdminCard
              color="#C21717"
              text="#FFFFFF"
              title="Interview Experiences Management"
              head="Manage Interview Experiences"
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <AdminCard
              color="#C21717"
              text="#FFFFFF"
              title="Email Groups Management"
              head="Manage NITKKR Email Groups"
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <AdminCard
              color="#C21717"
              text="#FFFFFF"
              title="Placement Stats"
              head="Placed Student's Database"
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default AdminPanel;
