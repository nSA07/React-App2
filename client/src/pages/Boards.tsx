import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { useLocation, useNavigate   } from "react-router-dom";
import { useAddListMutation, useGetListsQuery, useGetBoardsQuery } from "@/redux";
import { IBoardList } from "@/types/types";
import { Lists } from "@/components/Lists/Lists";
import { PopoverMenu } from "@/components/SideBar/PopoverMenu";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { HeaderBoard } from "@/components/Header/HeaderBoard";
import { isEmpty } from "lodash";
import { FC, useEffect } from "react";

export const Boards: FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { data: lists } = useGetListsQuery(`/lists/${state.boardID}`);
  const { data: boardList } = useGetBoardsQuery("boards");
  const [ addBoard ] = useAddListMutation();
  const { toast } = useToast()
  
  useEffect(() => {
    if (isEmpty(boardList)) {
      navigate("/");
    }
  }, [boardList]);
  
  
  const addNewList = async (values: {boardName: string}, form: { reset: () => void; }, setOpen: (arg0: boolean) => void) => {
    try {
      await addBoard({ listName: values.boardName, board: state.boardID }).unwrap()
      form.reset()
      setOpen(false)
    } catch (error) {
      toast({
          title: `${error.status}`,
          description: `${JSON.stringify(error.data.message)}`,
      })
    }   
  }

  const ButtonCreateBoard =                 
    <Button className="flex gap-2 font-medium">
      <Plus />
      Додати список
    </Button>

  return (
    <div className="w-full whitespace-nowrap">
      <div className="p-2 border-b-2">
        <HeaderBoard />
      </div>
      <ScrollArea>
        <div className="flex gap-4 space-x-4 p-4">
          {lists?.map((item: IBoardList) => (
            <Lists
              key={item.id}
              id={item.id}
              listName={item.listName}
              board={item.board}
              tasks={item.tasks}
            />
          ))}
          <div className="flex flex-col gap-4 shrink-0 w-72">
          <PopoverMenu
              icon={ButtonCreateBoard}
              placeholder={'Введіть заголовок для створення дошки'}
              textBtm={'Створити дошку'}
              handleSubmit={addNewList}
          />
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}
