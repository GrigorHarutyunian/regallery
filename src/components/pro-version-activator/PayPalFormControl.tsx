import React from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { SelectChangeEvent } from "@mui/material";
import "./proVersion.css";
interface PayPalFormControlProps {
  onChange: (event: SelectChangeEvent<string>) => void;
  currency: string;
}

const PayPalFormControl: React.FC<PayPalFormControlProps> = ({
  onChange,
  currency,
}) => {
  return (
    <FormControl fullWidth className="pay-pal__formControl">
      <InputLabel id="pay-pal-simple-select-label">Currency</InputLabel>
      <Select
        labelId="pay-pal-simple-select-label"
        id="pay-pal-simple-select"
        value={currency}
        label="Currency"
        onChange={onChange}
      >
        <MenuItem value="USD">
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
            >
              <path d="M20,8V7.313A5.32,5.32,0,0,0,14.687,2H13.5V0h-3V2H9.313A5.313,5.313,0,0,0,7.772,12.4l2.728.746V19H9.313A2.316,2.316,0,0,1,7,16.687V16H4v.687A5.32,5.32,0,0,0,9.313,22H10.5v2h3V22h1.187a5.313,5.313,0,0,0,1.541-10.4L13.5,10.856V5h1.187A2.316,2.316,0,0,1,17,7.313V8Zm-4.618,6.479a2.314,2.314,0,0,1-.7,4.521H13.5V13.965ZM10.5,10.035,8.618,9.521A2.314,2.314,0,0,1,9.313,5H10.5Z" />
            </svg>
            USD
          </span>
        </MenuItem>
        <MenuItem value="EUR">
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
            >
              <path d="M14 21a9 9 0 0 1 -8.05-5h10.05v-3h-10.941a8.5 8.5 0 0 1 0-2h10.941v-3h-10.05a8.989 8.989 0 0 1 14.993-1.727l2.314-1.91a11.989 11.989 0 0 0 -20.557 3.637h-2.7v3h2.051c-.028.331-.051.662-.051 1s.023.669.051 1h-2.051v3h2.7a11.989 11.989 0 0 0 20.557 3.637l-2.314-1.91a8.976 8.976 0 0 1 -6.943 3.273z" />
            </svg>
            Euro
          </span>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default PayPalFormControl;
