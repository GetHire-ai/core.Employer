import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Input,
} from "@mui/material";

const EditProfileImageModal = ({ isOpen, onClose, onUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleUpload = () => {
    onUpload(selectedImage);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Upload Image</DialogTitle>
      <DialogContent>
        <Input type="file" onChange={handleImageChange} fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleUpload} variant="contained" color="primary">
          Upload
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProfileImageModal;
