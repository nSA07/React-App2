import { FC, useState } from "react"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { TaskSelect } from "./TaskSelect"
import { TaskModal } from "./TaskModal"

import { CalendarIcon, EllipsisVertical, Trash2  } from "lucide-react"

import { formattedData } from "@/helpers/formattedData"
import { useDeleteTasksMutation, useGetAllHistoryByIdQuery } from "@/redux"
import { ITask } from "@/types/types"
import { PopoverTaskMenu } from "./PopoverTaskMenu"

export const Task: FC<ITask> = ({id, title, description, createAt, priority, listName}) => {

    const [ deleteTasks ] = useDeleteTasksMutation()
    const [ open, setOpen ] = useState(false)
    const { createDate } = formattedData(createAt)
    const { data: historyById } = useGetAllHistoryByIdQuery(`history/${id}`)
    
    const deleteProduct = async (id: number) => {
        await deleteTasks(id)
    }

    return (
        <Card className="w-72 pointer">
            <CardHeader>
                <div className="absolute contents">
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger className="relative top-[25px] left-[95%]">
                            <EllipsisVertical />
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverTaskMenu
                                id={id}
                                setOpen={setOpen}
                                title={title}
                                description={description}
                                priority={priority}
                            />
                            <Button onClick={() => deleteProduct(id)} variant="ghost" size="boardBtm" className="text-[#f70202]">
                                <Trash2 color="#f70202" />
                                Видалити
                            </Button>
                        </PopoverContent>
                    </Popover>
                    <TaskModal
                        id={id}
                        boardName={listName} 
                        historyById={historyById}
                        title={title}
                        description={description}
                        priority={priority}
                        createDate={createDate}
                    />
                    <CardTitle className="text-base text-wrap">
                        {title}
                    </CardTitle>
                    <CardDescription className="text-wrap">{description}</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex justify-start items-center text-sm font-medium">
                    <CalendarIcon className="mr-2" size={24} />
                    {createDate}
                </div>
                <Badge
                    className="text-sm px-6 py-2 mt-3"
                    variant="secondary"
                >
                    {priority}
                </Badge>
            </CardContent>
            <CardFooter className="w-full">
                <div className="flex flex-col space-y-1.5 w-full">
                    <TaskSelect id={id} />
                </div>
            </CardFooter>
        </Card>
    )
}
