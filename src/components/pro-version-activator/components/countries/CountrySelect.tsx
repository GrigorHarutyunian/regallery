import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { getCountries, Country } from "./countries";

interface CountrySelectProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  label?: string;
  placeholder?: string;
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  value,
  onChange,
  className,
  label = "",
  placeholder = "Search and select country",
}) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const data = await getCountries();
        setCountries(data);
        setError(null);
      } catch (err) {
        setError("Failed to load countries");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const selectedCountry = countries.find((c) => c.code === value) || null;

  return (
    <Autocomplete
      className={className}
      value={selectedCountry}
      onChange={(_, newValue) => {
        onChange(newValue ? newValue.code : "");
      }}
      options={countries}
      getOptionLabel={(option) => option.name}
      loading={loading}
      disabled={loading || !!error}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          error={!!error}
          helperText={error}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      isOptionEqualToValue={(option, value) => option.code === value.code}
      noOptionsText="No countries found"
      filterOptions={(options, { inputValue }) => {
        const searchTerm = inputValue.toLowerCase();
        return options.filter(
          (option) =>
            option.name.toLowerCase().includes(searchTerm) ||
            option.code.toLowerCase().includes(searchTerm)
        );
      }}
    />
  );
};

export default CountrySelect;
