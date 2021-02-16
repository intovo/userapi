import { Grid, Button, LinearProgress } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import Wrapper from "./component/Wrapper";
import PersonAdd from "@material-ui/icons/PersonAdd";
import User from "./component/User";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fectchUser = async () => {
    setLoading(true);
    const response = await fetch("https://randomuser.me/api/");
    const apiData = await response.json();
    setUsers([apiData.results[0], ...users]);
    setLoading(false);
  };

  return (
    <Wrapper>
      <Grid container justify="center" direction="column">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => fectchUser()}
          startIcon={<PersonAdd />}
        >
          Fetch User
        </Button>
        {loading && <LinearProgress />}
      </Grid>
      <Grid container justify="center" direction="column">
        {users.map((u) => {
          return <User key={u.login.uuid} user={u} />;
        })}
      </Grid>
    </Wrapper>
  );
};

export default App;
