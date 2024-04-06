import { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { EllipsisVertical, FilePenLine, Plus, Trash2 } from 'lucide-react'
import { PopoverMenu } from '@/components/SideBar/PopoverMenu'

const ButtonCreateBoard =                 
<Button variant="ghost" size="boardBtm" className="flex gap-2 font-medium">
    <FilePenLine />
    Редагувати Список
</Button>

const meta = {
    title: 'Shadcn/popover',
    component: () => (
        <Popover>
            <PopoverTrigger>
                <EllipsisVertical />
            </PopoverTrigger>
            <PopoverContent>
                <PopoverMenu
                    icon={ButtonCreateBoard}
                    placeholder={'Введіть заголовок для редагування списка'}
                    textBtm={'Редагувати назву списка'}
                    handleSubmit={()=>null}
                />
                <Button onClick={() => null} variant="ghost" size="boardBtm" className="w-full">
                    <Plus />
                    Додати нове завдання
                </Button>
                <Button onClick={() => null} variant="ghost" size="boardBtm" className="text-[#f70202]">
                    <Trash2 color="#f70202" />
                    Видалити
                </Button>
            </PopoverContent>
        </Popover>
    ),
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof PopoverMenu>

export default meta

type Story = StoryObj<typeof meta>

export const PopoverDemo: Story = {
    args: {},
}