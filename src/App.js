import './App.scss';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '3px solid orange',
  },
  paper: {
    height: 120,
    width: 100,
  },
}));

function App() {

  const classes = useStyles();


  return (
    <div className="App">
      <h1>xsjiadowrun</h1>
      <Grid
        container
        className={classes.root}
        spacing={9}
        justify={"center"}
      >
        <Grid item>
          <span>4345</span>
        </Grid>
        <Grid item>
          <span>40987097</span>
        </Grid>
        <Grid item>
          <span>hlkjhlkj</span>
        </Grid>
        <Grid item>
          <span>983u</span>
        </Grid>
      </Grid>
      <Button className="override" variant="contained" color="primary">
        <span>BEGIN</span>
      </Button>

    </div>
  );
}

export default App;
