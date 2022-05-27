import React from "react";
import { Redirect } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import AddEmployee from "../Components/Employees/Add/AddEmployee";
import ViewEmployee from "../Components/Employees/View/ViewEmployee";
import EditEmployee from "../Components/Employees/Edit/EditEmployee";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <div>Home</div>
      </Route>
      <Route path="/employees" exact>
        <ViewEmployee />
      </Route>
      <Route path="/employees/add" exact>
        <AddEmployee />
      </Route>
      <Route path="/employees/edit/:eid" exact>
        <EditEmployee />
      </Route>
      <Route path="/error" exact>
        <div>Error</div>
      </Route>

      <Redirect to="/error" />
    </Switch>
  );
}

export default Routes;
