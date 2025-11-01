import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent
} from "@mui/material";

export const DKMutliSelect = ({
  label,
  values,
  handleChange,
  selectItems
}: {
  label: string;
  values: string[];
  handleChange: Function;
  selectItems: string[];
}) => {
  const styles = {
    menu: {
      MenuProps: {
        MenuListProps: {
          sx: {
            color: "#fff",
            backgroundColor: "#212121"
          }
        },
        PaperProps: {
          style: {
            maxHeight: 200
          }
        }
      }
    }
  };

  const handle = (event: SelectChangeEvent<typeof values>) => {
    const {
      target: { value }
    } = event;
    if (value.includes("all")) {
      handleChange(values.length > 0 ? [] : [...selectItems]);
    } else {
      handleChange(typeof value === "string" ? value.split(",") : value);
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        multiple
        value={values}
        onChange={handle}
        inputProps={styles.menu}
        renderValue={(selected) => selected.join(", ")}
      >
        <MenuItem value="all">Select/Deselect All</MenuItem>
        {selectItems.map((item: string) => (
          <MenuItem value={item}>
            <Checkbox checked={values.includes(item)} />
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
