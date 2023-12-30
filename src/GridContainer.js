import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import GridButtonPanel from "./GridButtonPanel";
import { useState } from "react";

export default function GridContainer() {

    const rows = [
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
      ];

      const columns = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
      ];
    
      const [selectedRows, setSelectedRows] = useState(Array(rows.length).fill(false));
      const [isDeleteEnabled, setIsDeleteEnabled] = useState(false);

      function handleSelectionModelChange(selectionModel) {
        const selection = Array(rows.length).fill(false);
        const newSelection = selectionModel;
        newSelection.forEach((selectedRow) => {
          selection[selectedRow - 1] = true;
        });
        setSelectedRows(selection);
        setIsDeleteEnabled(isAnyRowSelected(selection));
      }

      function isAnyRowSelected(rows) {
        return rows.some((row) => row === true);
    }
      
    return (
        <>
            <Box sx={{ height: 400, width: '100%' }}>
                <GridButtonPanel selectedRows={selectedRows} isDeleteEnabled={isDeleteEnabled} />
                <DataGrid rows={rows} columns={columns} checkboxSelection disableRowSelectionOnClick
                    onRowSelectionModelChange={handleSelectionModelChange}
                />
            </Box>
        </>
    );
}