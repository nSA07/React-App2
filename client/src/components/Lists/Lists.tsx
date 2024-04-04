import { FC } from "react"
import { Button } from "@/components/ui/button"

import { IBoardList, ITask } from "@/types/types"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useToast } from "@/components/ui/use-toast"

import { Task } from "../Task/Task"

import { EllipsisVertical, FilePenLine, Plus, Trash2 } from 'lucide-react';

import { useDeleteListsMutation, useEditListsMutation, useAddTasksMutation, useGetTasksQuery } from "@/redux"
import { PopoverMenu } from "../SideBar/PopoverMenu"

export const Lists:FC<IBoardList> = ({id, listName, board, tasks}) => {
    const { toast } = useToast()

    const [ editLists ] = useEditListsMutation()
    const [ deleteLists ] = useDeleteListsMutation()
    const [ addTasks ] = useAddTasksMutation()

    const { data: tasksData } = useGetTasksQuery(`tasks?lists=${id}`)

    const renameList = async (
            values: {boardName: string},
            form: { reset: () => void; },
            setOpen: (arg0: boolean) => void
        ) => {
        try {
            const newListName = {
                id: id,
                new_listName: {listName: values.boardName}
            }
            await editLists(newListName).unwrap()
            form.reset()
            setOpen(false)
        } catch (error) {
            toast({
                title: `${error.status}`,
                description: `${JSON.stringify(error.data.message)}`,
            })
        }   
    }

    const addNewTasks = async (id: number, board) => {
        const newTask = {
            title: "Редагувати заголовок",
            description: "Редагувати опис",
            priority: "low",
            list: +id,
            board: board.id
        }
        
        await addTasks(newTask);
    }

    const deleteProduct = async (id: number) => {
        await deleteLists(id)
    }

    const ButtonCreateBoard =                 
        <Button variant="ghost" size="boardBtm" className="flex gap-2 font-medium">
            <FilePenLine />
            Редагувати Список
        </Button>

    return (
        <div className="flex flex-col gap-4 shrink-0 w-72">
            <div className="flex justify-between px-1 py-3 border-y overflow-hidden rounded-md">
                <span>{listName}</span>
                <div className="flex gap-1">
                    <span>{tasks.length}</span>
                    <Popover>
                        <PopoverTrigger>
                            <EllipsisVertical />
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverMenu
                                icon={ButtonCreateBoard}
                                placeholder={'Введіть заголовок для редагування списка'}
                                textBtm={'Редагувати назву списка'}
                                handleSubmit={renameList}
                            />
                            <Button onClick={() => addNewTasks(id, board)} variant="ghost" size="boardBtm" className="w-full">
                                <Plus />
                                Додати нове завдання
                            </Button>
                            <Button onClick={() => deleteProduct(id)} variant="ghost" size="boardBtm" className="text-[#f70202]">
                                <Trash2 color="#f70202" />
                                Видалити
                            </Button>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
            <Button onClick={() => addNewTasks(id, board)} variant="outline" className="w-full">
                <Plus />
                Додати нове завдання
            </Button>
            <ScrollArea className="h-lvh w-full">
                <div className="flex flex-col gap-2">
                    {tasksData?.map((item: ITask) => (
                        <Task
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            createAt={item.createAt}
                            priority={item.priority} 
                            listName={listName}
                        />
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}

