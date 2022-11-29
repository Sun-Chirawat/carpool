import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import NotificationsIcon from '@mui/icons-material/Notifications';




export default function Home() {
  return (
    <div className='content'>
      <h1>Pick Me UP!</h1>
      

      <Container maxWidth="lg">
         <TextField id="standard-basic" label="จุดเริ้มต้น" variant="standard" />
        <TextField id="standard-basic" label="จุดสิ้นสุด" variant="standard" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <TextField id="standard-basic" label="เวลา" variant="standard" />
      </Container>
       
        <Container maxWidth="lg" >
            <IconButton aria-label=" " >
          <NotificationsIcon/>
        </IconButton>
        </Container>
      


    </div>
  );
}
