import { useTheme } from "@emotion/react";
import {
  Add,
  EmojiEmotionsSharp,
  GroupAdd,
  ImageAspectRatio,
  InsertPhoto,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const AddPosts = () => {
  const theem = useTheme();
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Add post"
        sx={{ position: "fixed", bottom: "10px", left: "22px" }}
      >

        <Fab onClick={() => {
          setisOpen(true);
        }} size="medium" color="primary">
          <Add />
        </Fab>

      </Tooltip>


      <Modal
        open={isOpen}
        onClose={() => {
          setisOpen(false);
        }}
      >
        <Box
          className="modalBox"
          sx={{ backgroundColor: theem.palette.background.default, width: { xs: "300px", md: "360px" } }}
        >
          <Typography sx={{ textAlign: "center" }} variant="h6" component="h2">
            Create a post{" "}
          </Typography>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <Avatar
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <span>Layla Hassan</span>
          </div>

          <TextField
            fullWidth
            sx={{ margin: "20px 0" }}
            multiline
            placeholder="what is in your mind.."
            rows={2}
            variant="standard"
          />

          <Stack direction={"row"} gap={"5px"} mb={3}>
            <EmojiEmotionsSharp color="primary" />
            <InsertPhoto color="secondary" />
            <VideoCameraBack color="success" />
            <GroupAdd color="warning" />
          </Stack>

          <Box>
            <ButtonGroup sx={{ width: "100%" }} variant="contained">
              <Button sx={{ flexGrow: 1 }}>POST</Button>

              <Button>
                <ImageAspectRatio />
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AddPosts;
