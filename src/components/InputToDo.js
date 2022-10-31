import {
    Grid,
    Container,
    TextField,
    Typography,
    Button
} from '@mui/material'

function InputToDo () {

    const addToDo = () => {
        console.log("Nút thêm được click");
    };

    return(
        <>
            <Container>
                <Grid container xs={12} md={12} lg={12} sx={{backgroundColor: "#EC7272", height: "200px", padding: "30px 80px 50px"}}>
                    <Grid item xs={12} md={12} lg={12}>
                        <Typography sx={{color: "#FFFFFF", marginBottom: "30px"}} textAlign="center" fontWeight="500" fontSize="25px">
                            My To Do List
                        </Typography>
                    </Grid>
                    <Grid item xs={9} md={9} lg={9}>
                        <TextField fullWidth label="Title" sx={{color: "#FFFFFF"}}>
                        </TextField>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <Button fullWidth sx={{height: "100%"}} variant="contained" onClick={addToDo}>
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default InputToDo;