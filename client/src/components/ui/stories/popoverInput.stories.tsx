import { Meta, StoryObj } from '@storybook/react'
import { PopoverMenu } from '@/components/SideBar/PopoverMenu'
import { Plus } from 'lucide-react'
import { Button } from '../button'

const meta = {
    title: 'Shadcn/popover',
    component: PopoverMenu,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof PopoverMenu>

export default meta

type Story = StoryObj<typeof meta>

export const PopoverDemoInput: Story = {
    args: {
        icon: <Plus />,
        placeholder: 'Введіть заголовок для створення дошки',
        textBtm: 'Створити дошку',
        handleSubmit: () => null,
    },
}

export const PopoverDemoListInput: Story = {
    args: {
        icon:<Button className="flex gap-2 font-medium">
                <Plus />
                Додати список
            </Button>,
        placeholder: 'Введіть заголовок для редагування списка',
        textBtm: 'Редагувати назву списка',
        handleSubmit: () => null,
    },
}
