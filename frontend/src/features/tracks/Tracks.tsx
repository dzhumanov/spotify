import { Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { fetchTracks } from "./tracksThunk";
import OneTrack from "./OneTrack";
import { selectTracks } from "./tracksSlice";

interface Props {
  albumId: string;
}

const Tracks: React.FC<Props> = ({ albumId }) => {
  const dispatch = useAppDispatch();
  const tracks = useAppSelector(selectTracks);

  useEffect(() => {
    dispatch(fetchTracks(albumId));
  }, [dispatch]);

  return (
    <>
      <Grid container direction="column">
        {tracks.map((track) => (
          <OneTrack track={track} key={track.name} />
        ))}
      </Grid>
    </>
  );
};

export default Tracks;