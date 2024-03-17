import { Typography } from "@mui/material";
import { SpeedwayMatch } from "../../types/speedwayRacingTypes";

interface Props {
  speedwayMatch: SpeedwayMatch;
  index: number;
}

export const RaceTeam = ({ speedwayMatch, index }: Props) => {
  console.log(speedwayMatch.teamSquad[index])
  return (
    <>
      <Typography variant="h4">{speedwayMatch.teamName[index]}</Typography>
      {speedwayMatch.teamSquad[index].map((rider, i) => (
        <Typography key={i} variant="h6">{rider.startingNumber} {rider.name}.{rider.surname} {rider.pointsRecord}</Typography>
      ))}
    </>
  );
};