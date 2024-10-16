import React from "react";
import { Drawer, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

const OnboardingDocuments = ({ isOpen, toggleDrawer, content }) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
      <div className="w-[500px] p-4 ">
        <IconButton
          onClick={toggleDrawer(false)}
          style={{ marginBottom: "16px" }}
        >
          <CloseIcon />
        </IconButton>
        <div className="pt-36">{content.StudentId.Name}</div>
      </div>
    </Drawer>
  );
};

export default OnboardingDocuments;
