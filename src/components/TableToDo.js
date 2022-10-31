import {
    Grid,
    Container,
    TableContainer,
    TableBody,
    TableRow,
    Table,
    TableCell,
    Paper,
    Link,
    Button
} from '@mui/material'

function TableToDo () {


    const deleteToDo = () => {
        console.log("nút xóa được click!");
    };

    return(
        <>
            <Container>
                <Grid container xs={12} md={12} lg={12}>
                    <Grid item xs={12} md={12} lg={12}>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableBody sx={{justifyContent: "center", textAlign: "center"}}>
                                    <TableRow>
                                        <TableCell align="center" sx={{cursor: "pointer"}}>Hit the gym</TableCell><Button onClick={deleteToDo} sx={{paddingTop: "15px"}}>x</Button>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default TableToDo;