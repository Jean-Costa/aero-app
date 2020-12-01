import React, { useState } from "react";
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    },
    formControl: {
        margin: theme.spacing(1),
        width: "100%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));

  const useStylesClasse = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: "25%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
      },
      root: {
        '& > *': {
          margin: theme.spacing(1),
          width: "25%",
        },
      },
  }));

  const locais = [
    {Id: 1 , nome: "CGH	SBSP Aeroporto Internacional de São Paulo / Congonhas"},
    {Id: 2 , nome: "GIG	SBGL Aeroporto Internacional do Rio de Janeiro / Galeão-Antônio Carlos Jobim"},
    {Id: 3 , nome: "VCP	SBKP Aeroporto Internacional de Viracopos / Campinas"},
    {Id: 4 , nome: "FLN	SBFL Aeroporto Internacional de Florianópolis / Hercílio Luz"},
    {Id: 5 , nome: "REC	SBRF Aeroporto Internacional do Recife/ Guararapes – Gilberto Freyre"},
    {Id: 6 , nome: "CNF	SBCF Aeroporto Internacional de Minas Gerais / Confins – Tancredo Neves"},
  ];

  const classeAviao = [
    {Id: 1 , nome: "Econômica"},
    {Id: 2 , nome: "Executiva"},
    {Id: 3 , nome: "Primeira Classe"},
  ];

export const Inicial = (props) => {
    const classes = useStyles();
    const [origem, setOrigem] = useState("");
    const origemChange = (e) => {
        setOrigem(e.target.value);
        };   
    
    const classesa = useStyles();
    const [destino, setDestino] = useState("");
    const destinoChange = (e) => {
        setDestino(e.target.value);
        };

    const classesb = useStylesClasse();
    const [aviao, setAviao] = useState("");
    const aviaoChange = (e) => {
        setAviao(e.target.value);
        };

return ( <div>
            <Container maxWidth="sm">
                <h1>{props.nomeAplicacao}</h1> 
                <FormControl className={classes.formControl}>
                <InputLabel id="origem">origem</InputLabel>
                <Select
                labelId="origem"
                id="origem"
                value={origem}
                onChange={origemChange}
                >
                {locais.map((item) => (
                    <MenuItem value={item.id}>{item.nome}</MenuItem>
                ))}
                </Select>
            </FormControl>

            <FormControl className={classesa.formControl}>
                <InputLabel id="destino">destino</InputLabel>
                <Select
                labelId="destino"
                id="destino"
                value={destino}
                onChange={destinoChange}
                >
                {locais.map((item) => (
                    <MenuItem value={item.id}>{item.nome}</MenuItem>
                ))}
                </Select>
            </FormControl>

            <form className={classes.container} noValidate>
            <TextField
                id="datetime-local"
                label="Data Ida"
                type="datetime-local"
                defaultValue="2020-11-28T15:05"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
            />
            <TextField
                id="datetime-local"
                label="Data Volta "
                type="datetime-local"
                defaultValue="2020-11-28T15:05"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
            />
            </form>

            <form className={classesb.root} noValidate autoComplete="off">
                <Input defaultValue="Qtd Passageiros " inputProps={{ 'aria-label': 'description' }} />
            </form>

            <FormControl className={classesb.formControl} >
                <InputLabel id="aviao">classe</InputLabel>
                <Select
                labelId="aviao"
                id="aviao"
                value={aviao}
                onChange={aviaoChange}
                >
                {classeAviao.map((item) => (
                    <MenuItem value={item.id}>{item.nome}</MenuItem>
                ))}
                </Select>
            </FormControl>


            <div className={classesb.root}>
            <Button variant="contained" color="primary">
                Procurar
            </Button>
            </div>
            </Container>
        </div>) ;
};