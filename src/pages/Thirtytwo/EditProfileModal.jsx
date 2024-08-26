import React, { useState } from "react";
import { Modal, TextField, Button, Box, Typography, Chip } from "@mui/material";

const EditProfileModal = ({ open, profile, onChange, onSave, onClose }) => {
  const [newLocation, setNewLocation] = useState("");
  const handleLocationKeyPress = (event) => {
    if (event.key === "Enter" && newLocation.trim() !== "") {
      const updatedLocations = [
        ...(profile?.Location || []),
        newLocation.trim(),
      ];
      onChange("Location", updatedLocations);
      setNewLocation("");
    }
  };

  const handleDeleteLocation = (locationToDelete) => {
    const updatedLocations = profile.Location.filter(
      (location) => location !== locationToDelete
    );
    onChange("Location", updatedLocations);
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          width: 600,
          maxHeight: "80vh",
          overflowY: "auto",
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          outline: "none",
        }}
      >
        <Typography variant="h6" component="h2">
          Edit Company Details
        </Typography>
        <TextField
          fullWidth
          label={"Name"}
          value={profile?.Name}
          onChange={(e) => onChange("Name", e.target.value)}
          margin="normal"
        />
        <div className="flex gap-3 justify-between">
          <TextField
            disabled
            label={"Number"}
            value={profile?.Number}
            onChange={(e) => onChange("Number", e.target.value)}
            margin="normal"
          />
          <TextField
            disabled
            label={"Email"}
            value={profile?.Email}
            onChange={(e) => onChange("Email", e.target.value)}
            margin="normal"
          />
        </div>
        <div className="flex gap-3 justify-between">
          <div className="flex flex-col">
            <TextField
              label={"Location"}
              value={newLocation}
              // onChange={(e) => onChange("Location", e.target.value)}
              margin="normal"
              onChange={(e) => setNewLocation(e.target.value)}
              onKeyPress={handleLocationKeyPress}
            />
            <Box sx={{ display: "flex", flexWrap: "wrap", mt: 1 }}>
              {profile.Location?.map((location, index) => (
                <Chip
                  key={index}
                  label={location}
                  onDelete={() => handleDeleteLocation(location)}
                  sx={{ m: 0.5 }}
                />
              ))}
            </Box>
          </div>
          <TextField
            label={"Title"}
            value={profile?.Title}
            onChange={(e) => onChange("Title", e.target.value)}
            margin="normal"
          />
        </div>
        <div className="flex gap-3 justify-between">
          <TextField
            label={"Discription"}
            value={profile?.Discription}
            onChange={(e) => onChange("Discription", e.target.value)}
            margin="normal"
          />
          <TextField
            label={"About"}
            value={profile?.About}
            onChange={(e) => onChange("About", e.target.value)}
            margin="normal"
          />
        </div>
        <div className="flex gap-3 justify-between">
          <TextField
            label={"Industry"}
            value={profile?.Industry}
            onChange={(e) => onChange("Industry", e.target.value)}
            margin="normal"
          />
          <TextField
            label={"Websitelink"}
            value={profile?.Websitelink}
            onChange={(e) => onChange("Websitelink", e.target.value)}
            margin="normal"
          />
        </div>
        <div className="flex gap-3 justify-between">
          <TextField
            label={"Facebooklink"}
            value={profile?.Facebooklink}
            onChange={(e) => onChange("Facebooklink", e.target.value)}
            margin="normal"
          />
          <TextField
            label={"Instagramlink"}
            value={profile?.Instagramlink}
            onChange={(e) => onChange("Instagramlink", e.target.value)}
            margin="normal"
          />
        </div>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button variant="contained" color="primary" onClick={onSave}>
            Save
          </Button>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditProfileModal;
