import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// Componentes
import Inferior from '../../componentes/inferior';
import Superior from '../../componentes/Zsuperior';
import Barcode from '../../componentes/barcode';
import ReactToPrint from 'react-to-print';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    fontWeight: 'initial'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250
  }
}));

function GridMain() {
  const componentRef = useRef();
  const classes = useStyles();
  const [values, setValues] = React.useState({
    parte: '',
    descripcion: '',
    cantidad: 1,
    ubicacion: '',
    marca: 'SAMSUNG',
    origen: 'KOREA'
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="idnombre"
            label="Nro. de Parte"
            className={classes.textField}
            onChange={handleChange('parte')}
            value={values.parte.toUpperCase()}
            margin="normal"
          />
          <TextField
            id="iddescripcion"
            label="Descripción"
            className={classes.textField}
            onChange={handleChange('descripcion')}
            value={values.descripcion.toUpperCase()}
            margin="normal"
          />
          <TextField
            id="idcantidad"
            label="Cantidad"
            value={values.cantidad}
            onChange={handleChange('cantidad')}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
          <TextField
            id="idubicacion"
            label="Ubicación"
            className={classes.textField}
            onChange={handleChange('ubicacion')}
            value={values.ubicacion.toUpperCase()}
            margin="normal"
          />
          <TextField
            id="idmarca"
            label="Marca"
            className={classes.textField}
            onChange={handleChange('marca')}
            value={values.marca}
            margin="normal"
          />
          <TextField
            id="idorigen"
            label="Origen"
            className={classes.textField}
            onChange={handleChange('origen')}
            value={values.origen}
            margin="normal"
          />
        </form>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
            <Barcode ref={componentRef} />
        </Paper>
        <ReactToPrint
          trigger={() => (
            <Button color="secondary" variant="contained" style={{ margin: '2rem 0'}}>
              Imprimir
            </Button>
          )}
          content={() => componentRef.current}
        />
      </Grid>
    </Grid>
  );
}

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Superior />
      <Container component="main" className={classes.main} maxWidth="md">
        <GridMain />
      </Container>
      <Inferior />
    </div>
  );
}