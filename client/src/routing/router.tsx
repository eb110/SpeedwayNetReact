import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../features/home/HomePage";
import App from "../app/layout/App";
import { AddSpeedwayRacePage } from "../features/addSpeedwayRace/AddSpeedwayRacePage";
import { TotalRecordsPage } from "../features/totalRecords/TotalRecordsPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'addSpeedwayRace', element: <AddSpeedwayRacePage />},
            {path: 'totalRecords', element: <TotalRecordsPage />},
        ]
    }
])
