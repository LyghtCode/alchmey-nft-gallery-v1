import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { OwnedNft } from "../models";
import PlaceholderImage from "../assets/icons/gdao.gif";

interface Props {
  ownedNft: OwnedNft;
}

const NftCard: React.FC<Props> = ({ ownedNft }: Props) => {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: "none" }}>
      <CardActionArea
        onClick={() =>
          ownedNft?.tokenUri?.gateway &&
          window.open(ownedNft?.tokenUri?.gateway)
        }
      >
        <CardMedia
          component="img"
          alt="green iguana"
          image={ownedNft?.media?.[0].gateway}
          onError={({ currentTarget }: any) => {
            currentTarget.onerror = null;
            currentTarget.src = PlaceholderImage;
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            width="100%"
          >
            {ownedNft?.title || ownedNft?.contractMetadata?.name || "Unnamed"}
          </Typography>
          <Typography variant="body2">
            {ownedNft?.contractMetadata?.name || "-"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NftCard;
