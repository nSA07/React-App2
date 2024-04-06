import { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '../sheet'
import { PanelRightClose, Plus, RotateCcw, Trash } from 'lucide-react'
import { ScrollArea } from '@radix-ui/react-scroll-area'
const meta = {
    title: 'Shadcn/sheet',
    component: () => (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className="flex gap-2 font-medium">
                    <RotateCcw />
                    Історія
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetTitle>Історія</SheetTitle>
                <ScrollArea className="w-full h-lvh rounded-md border p-4">
                    <ul className="p-2 flex flex-col gap-3">
                       Some history
                    </ul>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    ),
    parameters: {
        layout: 'centered',
    },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const SheetDemo: Story = {
    args: {},
}

export const SheetSideBoard: Story = {
    args: {},
    render: () => (
        <Sheet>
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
                    <a href='#'>
                    <span className="hover:bg-accent p-2 block">
                            Дошки
                    </span>
                    </a>
                    <div className="p-2 bg-slate-400 text-base text-slate-100 flex justify-between">
                        <span>Мої дошки</span>
                        <Plus />
                    </div>
                    <ul className="pt-3 flex-col flex gap-1">
                        <li
                            className="p-2 hover:bg-slate-200 bg-slate-100 flex justify-between"
                        >
                            <span className="block">
                                Some board
                            </span>
                            <Button variant="ghost" size="sm">
                                <Trash size={18} color="red" />
                            </Button>
                        </li>
                    </ul>
                </div>
            </SheetContent>
        </Sheet>
    ),
}
