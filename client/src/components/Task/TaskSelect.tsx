import { useLocation } from "react-router-dom";
import { useGetListsQuery, useEditTasksMutation } from "@/redux"

import { useToast } from "@/components/ui/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

import { IBoardList } from "@/types/types"
import { FC } from "react";

export const TaskSelect: FC<{ id: number }> = ({id}) => {
    const { state } = useLocation();
    const { toast } = useToast()
    const [ editTasks ] = useEditTasksMutation()
    const { data: lists } = useGetListsQuery(`/lists/${state.boardID}`);
    
    const changeBoard = async (listId: string, id: number) => {
        try {
            const newTask = {
                id: id,
                new_task: {
                    list: listId
                }
            }
            await editTasks(newTask).unwrap()
        } catch (error) {
            toast({
                title: `${error.status}`,
                description: `${JSON.stringify(error.data.message)}`,
            })
        }
    }

    return (
        <Select onValueChange={(values) => changeBoard(values, id)}>
            <SelectTrigger>
                <SelectValue placeholder="Move to" />
            </SelectTrigger>
            <SelectContent position="popper">
                {lists?.map((item: IBoardList) => (
                    <SelectItem key={item.id} value={`${item.id}`}>{item.listName}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
