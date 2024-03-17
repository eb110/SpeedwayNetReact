import { Avatar, List, ListItem, ListItemText } from "@mui/material";
import { TotalRecord } from "../../app/models/TotalRecord";
import { TotalRecordCard } from "./TotalRecordCard";

interface Props {
    records: TotalRecord[];
    testF?: () => void;
  }

export const TotalRecordList = ({records}: Props) => {
  return (
    <>
      <List>
        {records.map((record: TotalRecord, i: number) => (
            <TotalRecordCard key={i} record={record}/>
        ))}
      </List>
    </>
  );
};
