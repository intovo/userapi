import { Paper, Avatar, Grid } from "@material-ui/core";

const User = ({ user }) => {
  const { name } = user;

  return (
    <Paper>
      <Grid container justify="center">
        <Avatar
          alt={name.title + " " + name.first + " " + name.last}
          src={user.picture.medium}
        ></Avatar>
      </Grid>
      <h3>Name : {user.name.first}</h3>
    </Paper>
  );
};

export default User;
