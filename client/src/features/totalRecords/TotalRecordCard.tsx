import { Avatar, ListItem, ListItemText, Typography } from "@mui/material";
import { TotalRecord } from "../../app/models/TotalRecord";

interface Props {
  record: TotalRecord;
  testF?: () => void;
}

export const TotalRecordCard = ({ record }: Props) => {
  return (
    <>
      <ListItem>
        <Avatar></Avatar>
        <ListItemText>
          id:{record.id} points:{record.point}
        </ListItemText>
      </ListItem>
    </>
  );
};
