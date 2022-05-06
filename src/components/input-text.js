import { TextField } from "@mui/material";

export default function InputText({
  value,
  label,
  subtitle,
  style_subtitle = "",
  styleContainer,
  sizeInput = "small",
  type = "text",
  onChange,
}) {
  return (
    <div className={styleContainer}>
      <h4 className={style_subtitle}>{subtitle}</h4>
      <TextField
        label={label}
        variant="outlined"
        type={type}
        fullWidth
        color="info"
        className="bg-zinc-300 label:text-black"
        size={sizeInput}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
