import { FC } from 'react'

import { useGetBoardsQuery,useAddBoardMutation } from "@/redux"

import { useToast } from "@/components/ui/use-toast"
import { PopoverMenu } from '@/components/SideBar/PopoverMenu';
import { Link } from 'react-router-dom';

export const ListOfBoards: FC = () => {

  const { data: boardList } = useGetBoardsQuery("boards");
  const { toast } = useToast();
  const [ addBoard ] = useAddBoardMutation();

  const addNewBoard = async (
    values: {boardName: string},
    form: { reset: () => void; },
    setOpen: (arg: boolean) => void
    ) => {
    try {
        await addBoard({ boardName: values.boardName }).unwrap()
        form.reset();
        setOpen(false);
    } catch (error) {
        toast({
            title: `${error.status}`,
            description: `${JSON.stringify(error.data.message)}`,
        })
    } 
  }

  const ButtonCreateBoard = <span className='w-full h-full flex justify-center items-center'>Створити борду</span>

  return (
    <div className='p-3 bg-zinc-50 w-full'>
      <ul className='flex gap-1 flex-wrap'>
        <li
          className='h-28 w-[270px] bg-slate-400 text-white rounded cursor-pointer'
        >
          <PopoverMenu
            icon={ButtonCreateBoard}
            placeholder={'Введіть заголовок для створення дошки'}
            textBtm={'Створити дошку'}
            handleSubmit={addNewBoard}
          />
        </li>
        {boardList?.map((board) => (
          <Link key={board.id} to={`board/${board.boardName}`} state={{ boardID: `${board.id}` }}>
            <li
              className='w-[270px] h-28 bg-slate-500 text-white rounded'
            >
                <span className='pl-3 pt-3 block'>{board.boardName}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
