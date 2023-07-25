import React, { useRef } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
import { Box, Checkbox, Menu, MenuItem } from "@mui/material";
import { useTheme } from "@emotion/react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Cards = () => {
  const theeme = useTheme();
  const reff = useRef();

  const cardArry = [
    {
      userName: "Gufran haciakil",
      avatarColor: "#f44336",
      avatarLatter: "G",
      imgLink:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      userName: "yasmiin Ella",
      avatarColor: "#cfb646",
      avatarLatter: "Y",
      imgLink:
        "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      userName: "musa mustafa",
      avatarColor: "#9a62cf",
      avatarLatter: "M",
      imgLink:
        "https://images.pexels.com/photos/671956/pexels-photo-671956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box component="main"
      sx={{
        flexGrow: "3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {cardArry.map((item) => {
        return (
          <Card key={item.imgLink} sx={{ maxWidth: { xs: "96%", sm: '444px' }, m: "20px 0", overflow: null }}>
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    color: theeme.palette.getContrastText(item.avatarColor),
                    bgcolor: item.avatarColor,
                  }}
                >
                  {item.avatarLatter}
                </Avatar>
              }
              action={
                <IconButton ref={reff} onClick={handleClick}>
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.userName}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={item.imgLink}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <Checkbox
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />

              <IconButton>
                <ShareIcon />
              </IconButton>
              <Box flexGrow={2} />
              <Checkbox
                {...label}
                icon={<BookmarkBorder />}
                checkedIcon={<Bookmark />}
              />
            </CardActions>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Card>
        );
      })}
    </Box>
  );
};

export default Cards;
