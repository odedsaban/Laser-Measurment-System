import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import TablePagination from "@material-ui/core/TablePagination";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPageIcon from "@material-ui/icons/LastPage";
import PropTypes from "prop-types";
import axios from "../../axios";
import { Container } from "@material-ui/core";

import "../../style/pages/usersDataPage.scss";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    background: "white",
  },
  tableCell: {
    color: "#3c4b64",
  },
  tableHeadCell: {
    color: "#eceff1",
  },
});
const navigationText = [
  {
    text: "ראשי",
    link: "/",
  },
  {
    text: "משתמשים",
    link: "/users/allUsers",
  },
  {
    text: "משתמשים קיימים",
    link: "/users/allUsers",
  },
];
const UsersDataPage = ({ setNavigationText }) => {
  setNavigationText(navigationText);
  const classes = useStyles();
  //all users state
  const [usersList, setUsersList] = useState([]);

  //state for table paging
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, usersList.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //Fetching the users list from db
  useEffect(() => {
    const fecthUsers = async () => {
      try {
        let { data } = await axios.get("/api/users");
        setUsersList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthUsers();
  }, []);

  return (
    <div className="whiteBlock fullWidth basicTables usersDataPage">
      <div className="top">
        פרטי משתמש קיימים
      </div>
      <div class="innerContainer basicBlockSpaces">
        <Container>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHeadCell} align="right">
                    עיר
                  </TableCell>
                  <TableCell className={classes.tableHeadCell} align="right">
                    תפקיד
                  </TableCell>
                  <TableCell className={classes.tableHeadCell} align="right">
                    ארגון
                  </TableCell>
                  <TableCell className={classes.tableHeadCell} align="right">
                    שם משפחה
                  </TableCell>
                  <TableCell className={classes.tableHeadCell} align="right">
                    שם פרטי
                  </TableCell>
                  <TableCell className={classes.tableHeadCell} align="right">
                    כינוי
                  </TableCell>
                  <TableCell className={classes.tableHeadCell} align="right">
                    מייל
                  </TableCell>
                  <TableCell className={classes.tableHeadCell} align="right">
                    מזהה משתמש
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsPerPage > 0
                  ? usersList
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => (
                        <TableRow key={row.user_id}>
                          <TableCell className={classes.tableCell} align="right">
                            {row.city}
                          </TableCell>
                          <TableCell className={classes.tableCell} align="right">
                            {row.role}
                          </TableCell>
                          <TableCell className={classes.tableCell} align="right">
                            {row.organization}
                          </TableCell>
                          <TableCell className={classes.tableCell} align="right">
                            {row.last_name}
                          </TableCell>
                          <TableCell className={classes.tableCell} align="right">
                            {row.first_name}
                          </TableCell>
                          <TableCell className={classes.tableCell} align="right">
                            {row.username}
                          </TableCell>
                          <TableCell className={classes.tableCell} align="right">
                            {row.email}
                          </TableCell>
                          <TableCell className={classes.tableCell} align="right">
                            {row.user_id}
                          </TableCell>
                        </TableRow>
                      ))
                  : ""}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    className={classes.tableCell}
                    rowsPerPageOptions={[5, 10]}
                    colSpan={8}
                    count={usersList.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: { "aria-label": "rows per page" },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                    labelRowsPerPage={":שורות לעמוד"}

                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Container>
      </div>
    </div>
  );
};

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
  icons: {
    color: "white",
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
        className={classes.icons}
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
        className={classes.icons}
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        className={classes.icons}
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        className={classes.icons}
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}
TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default UsersDataPage;
