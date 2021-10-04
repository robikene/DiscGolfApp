import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ChooseCourse() {



    return (
        <div>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={[{label: 'Roosi Discgolfi park', id: 1}]}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Rada" />}
            />        
        </div>
    )
}
