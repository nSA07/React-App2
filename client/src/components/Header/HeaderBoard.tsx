import { FC } from 'react'
import { HeaderSideBar } from "./HeaderSideBar";
import { useLocation } from "react-router-dom";
import { useGetHistoryQuery } from "@/redux"

export const HeaderBoard: FC = () => {
    const { state } = useLocation();
    const { data: history, error, isLoading } = useGetHistoryQuery(`history/?lists=${state.boardID}`)     

    return (
        <>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : history ? (
                <HeaderSideBar history={history} />
            ) : null}
      </>
    )
}
