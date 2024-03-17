import { Button, List, ListItem, ListItemText, Typography } from "@mui/material";
import { TotalRecord } from "../../app/models/TotalRecord";
import { useEffect, useState } from "react";
import { TotalRecordList } from "./TotalRecordList";

interface Props {
  records?: TotalRecord[];
  testF?: () => void;
}

export const TotalRecordsPage = () => {

  const [total, setTotal] = useState<TotalRecord[]>([
    {id: 1, point: 4}
  ])

  useEffect(() => {
    void fetch('http://localhost:5000/api/ridertotalrecords')
    .then(res => res.json())
    .then(data =>setTotal(data as TotalRecord[]))
  },[])

const AddRecord = () => {
  setTotal(prev => [...total, {id: prev[prev.length- 1].id + 1, point: 1 + (prev[prev.length-1].point ?? -1 )}])
}


  return (
    <>
    <Typography variant="h3">Total Records</Typography>

    <TotalRecordList records={total} />

      <Button variant='contained' onClick={AddRecord}>Add</Button>
    </>
  );
};
