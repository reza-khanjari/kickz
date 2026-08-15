import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import type { Dayjs } from "dayjs";
interface DatePickerUiProps {
value:Dayjs | null
label:string
onChange:() => void
}
function DatePickerUi({ value, onChange, label }:DatePickerUiProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        format={label}
        value={value}
        onChange={onChange}
        className="py-0"
        slotProps={{
          day: {
            sx: {
              "&.Mui-selected": {
                backgroundColor: "#212121",
              },
            },
          },
          textField: {
            fullWidth: true,

            hiddenLabel: true,
            size: "small",
            sx: {
              "& .MuiSvgIcon-root": {
                color: "#212121",
              },

              "& .MuiPickersOutlinedInput-root": {
                borderRadius: "8px",
              },
              "&.MuiPickersTextField-root": {
                borderRadius: "8px",
                backgroundColor: "#fff",
              },
              "& .MuiPickersOutlinedInput-root.Mui-focused .MuiPickersOutlinedInput-notchedOutline":
                {
                  borderColor: "#262626",
                },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}

export default DatePickerUi;
