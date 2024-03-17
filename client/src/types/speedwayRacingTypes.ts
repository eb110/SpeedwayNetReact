export interface SpeedwayMatch{
    teamName: string[];
    matchDate: string;
    teamSquad: SpeedwayRiderGameStats[][];
}

export interface SpeedwayRiderGameStats{
    startingNumber: string;
    name: string;
    surname: string;
    ns: boolean;
    pointsRecord : string
    date: string
}