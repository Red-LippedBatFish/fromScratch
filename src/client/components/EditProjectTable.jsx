import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({

});

const EditProjectTable = (props) => {
  const classes = useStyles();
  const { project } = props;
  const { name, description, tasks } = project;

  const createData = (name, description, tasks) => {
    return { name, description, tasks };
  }
  const rows = [
    createData(name, description, tasks)
  ];
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table, classes.root} style={{ width: 500, margin: 'auto' }} aria-label="EditProjectTable">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name&nbsp;</TableCell>
            <TableCell align="center">Description&nbsp;</TableCell>
            <TableCell align="center">Tasks&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{JSON.stringify(row.tasks)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EditProjectTable;