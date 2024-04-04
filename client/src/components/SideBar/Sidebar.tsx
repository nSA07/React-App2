import { FC, useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useToast } from "@/components/ui/use-toast"

import { PopoverMenu } from "./PopoverMenu"

import { PanelRightClose, Plus, Trash } from "lucide-react"

import { useDeleteBoardMutation, useAddBoardMutation, useGetBoardsQuery } from "@/redux"
import { Button } from "../ui/button"


export const Sidebar: FC = () => {

    const [openSheet, setOpenSheet] = useState(false)
    const location = useLocation();
    const { toast } = useToast();
    const [ addBoard ] = useAddBoardMutation();
    const [ deleteBoard ] = useDeleteBoardMutation()
    const { data: boardList } = useGetBoardsQuery("boards");
    
    useEffect(() => {
        setOpenSheet(false);
      }, [location]);
    
    const addNewBoard = async (
            values: {boardName: string},
            form: { reset: () => void; },
            setOpen: (arg: boolean) => void
        ) => {
        try {
            await addBoard({ boardName: values.boardName }).unwrap()
            form.reset();
            setOpen(false);
            setOpenSheet(false);
        } catch (error) {
            toast({
                title: `${error.status}`,
                description: `${JSON.stringify(error.data.message)}`,
            })
        } 
    }

    const deleteBoardByID = async (id: number) => {
        await deleteBoard(id)
    }

    return (
        <Sheet open={openSheet} onOpenChange={setOpenSheet}>
            <SheetTrigger asChild>
                <div className="cursor-pointer p-2 border-r bg-gray-100 min-h-screen">
                    <PanelRightClose size={24} strokeWidth={1.5} />
                </div>
            </SheetTrigger>
            <SheetContent side={'left'}>
                <SheetHeader>
                    <SheetTitle>Робоча область</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col py-2">
                    <Link to='/'>
                    <span className="hover:bg-accent p-2 block">
                            Дошки
                    </span>
                    </Link>
                    <div className="p-2 bg-slate-400 text-base text-slate-100 flex justify-between">
                        <span>Мої дошки</span>
                        <PopoverMenu
                            icon={<Plus />}
                            placeholder={'Введіть заголовок для створення дошки'}
                            textBtm={'Створити дошку'}
                            handleSubmit={addNewBoard}
                        />
                    </div>
                    <ul className="pt-3 flex-col flex gap-1">
                        {boardList?.map((board) => (
                            <Link key={board.id} to={`board/${board.boardName}`} state={{ boardID: `${board.id}` }}>
                                <li
                                    key={board.id}
                                    className="p-2 hover:bg-slate-200 bg-slate-100 flex justify-between"
                                >
                                    <span className="block">
                                        {board.boardName}
                                    </span>
                                    <Button onClick={() => deleteBoardByID(+board.id)} variant="ghost" size="sm">
                                        <Trash size={18} color="red" />
                                    </Button>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </SheetContent>
        </Sheet>
    )
}

