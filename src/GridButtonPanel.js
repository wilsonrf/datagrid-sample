import { Box, Button } from "@mui/material";

export default function GridButtonPanel({selectedRows, isDeleteEnabled}) {

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Button>Add</Button>
                <Button disabled={!isDeleteEnabled}>Delete</Button>
            </Box>
        </>
    );
}