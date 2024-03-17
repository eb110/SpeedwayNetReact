import { Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { RaceTeam } from "./RaceTeam";
import { SpeedwayMatch } from "../../types/speedwayRacingTypes";
import { convert } from "../../tools/convertBinaryStringToRace";
import { saveAs } from 'file-saver';
import game from '../../game.txt'


export const SpeedwayRace = () => {

  const [speedwayMatch, setSpeedwayMatch] = useState<SpeedwayMatch>({teamName: [], matchDate: '', teamSquad: []});
  const [test, setTest] = useState('')

  useEffect(() => {
    void fetch(game)
    .then((res) => toJSON(res.body))
  }, []);

  // useEffect(() => {
  //   void fetch("http://speedwayw.pl/dmp/1993/wrby_1.htm")
  //   .then((res) => toJSON(res.body)
  //   );
  // }, []);

    const handleDownload = (txt: string) => {
      const file = new Blob([txt], { type: 'text/plain;charset=utf-8' });
      saveAs(file, 'game.txt');
    }
  

  async function toJSON(body: ReadableStream<Uint8Array> | null) {
    const reader = body!.getReader();
    let wss = "";
    await reader
      .read()
      .then((res) =>
        res.value?.forEach((ele) => (wss += String.fromCharCode(ele)))
      )
    //  .then(() => handleDownload(wss))
      .then(() => {setTest(wss); setSpeedwayMatch(convert(wss))});
  }

  return (
    <>
      <Typography variant="h4">Tabela Meczowa</Typography>
      <Container>
        <Typography>{test}</Typography>
        <Typography variant="h1">{speedwayMatch.matchDate}</Typography>
      </Container>
      <Grid container spacing={2}>
        {speedwayMatch.teamName.map((_, i) => (
          <Grid item xs={6} key={i}>
            <RaceTeam speedwayMatch={speedwayMatch} index={i}/>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
