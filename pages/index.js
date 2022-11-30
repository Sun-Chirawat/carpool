import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useSession } from "next-auth/react";
import * as React from "react";

export default function Home() {
  const { data: session } = useSession();
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  if (session) {
    return (
      <div className="content">
        <h1>Pick Me UP!</h1>
        <Container maxWidth="lg">
          <TextField
            id="standard-basic"
            label="จุดเริ้มต้น"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="จุดสิ้นสุด"
            variant="standard"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
          label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} variant="standard"/>}
        />
          </LocalizationProvider>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="content">
        <h1>Me Pick UP!</h1>
        <Container maxWidth="lg">
          <TextField
            id="standard-basic"
            label="จุดเริ้มต้น"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="จุดสิ้นสุด"
            variant="standard"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
          label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} variant="standard"/>}
        />
          </LocalizationProvider>
        </Container>
      </div>
    );
  }
}
