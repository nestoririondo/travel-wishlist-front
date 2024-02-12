import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useLocation } from "react-router-dom";

export default function Toggle({ onChange }) {
  const handleChange = (newValue) => {
    onChange(newValue);
  };
  const page = location.pathname.substring(1); // Remove the leading '/'

  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        width: "100%",
        marginTop: "2rem",
      }}
    >
      <ToggleButtonGroup
        color="primary"
        value={page}
        exclusive
        onChange={(e, newValue) => handleChange(newValue)}
        aria-label="Platform"
      >
        <ToggleButton value="countries" style={{ color: "#8CB9BD" }}>
          Countries
        </ToggleButton>
        <ToggleButton style={{ color: "#8CB9BD" }} value="students">
          Students
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
