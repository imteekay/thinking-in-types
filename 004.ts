type SnackbarStatus = {
  isClosed: boolean;
}

const buildSnackbar = (status: SnackbarStatus) => {
  if (status.isClosed) {
    openSnackbar();
  }
};

buildSnackbar({ isclosed: true });
// Object literal may only specify known properties,
// but 'isclosed' does not exist in type 'SnackbarStatus'.
// Did you mean to write 'isClosed'?
