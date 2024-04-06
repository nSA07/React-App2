import { Meta, StoryObj } from '@storybook/react'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from '../dialog'
import { CalendarIcon, Crosshair, Tag, Eye, FilePenLine } from 'lucide-react'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { Button } from '../button'

const meta = {
    title: 'Shadcn/dialog',
    component: () => (
        <Dialog>
        <DialogTrigger asChild className="relative top-[1px] left-[85%]">
            <Eye className="pointer" />
        </DialogTrigger>
        <DialogContent className="max-w-[90%] h-[90%] m-4 p-0 ">
            <div className="left-[65%] md:left-[35%] md:top5 top-8 fixed rounded-sm border px-4">
                <Button variant={'ghost'} size={'boardBtm'} className="w-full">
                    <FilePenLine />
                    Редагувати
                </Button>
            </div>
            <div className="md:flex justify-center">
                <div className="flex flex-col gap-5 p-8 md:w-[50%] w-full">
                    <h2 className="font-bold text-3xl leading-none tracking-tight">Some title</h2>
                    <div className="flex flex-col gap-3">
                        <div className="flex w-full md:w-[300px] justify-between">
                            <p className="text-[#c9c5c5] flex gap-1 text-center">
                                <Crosshair size={20} color="#c9c5c5" />
                                <span>Статус</span>
                            </p>
                            <p className="font-semibold">Board</p>
                        </div>
                        <div className="flex w-full md:w-[300px]  justify-between">
                            <p className="text-[#c9c5c5] flex gap-1 text-center">
                                <CalendarIcon size={20} color="#c9c5c5" />
                                <span>Дата</span>
                            </p>
                            <p className="font-semibold">Some Data</p>
                        </div>
                        <div className="flex w-full md:w-[300px]  justify-between">
                            <p className="text-[#c9c5c5] flex gap-1 text-center">
                                <Tag size={20} color="#c9c5c5" />
                                <span>Пріоритет</span>
                            </p>
                            <p className="font-semibold">Low</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-xl">Description</span>
                        <p className="text-[#c9c5c5] text-sm">Some Description</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5 md:w-[50%] w-full bg-slate-100 p-8">
                    <span className="text-xl font-bold">Activity</span>
                    <ScrollArea className="w-full h-full p-4">
                        <ul className="p-2 flex flex-col gap-3">
                            Some story
                        </ul>
                    </ScrollArea>
                </div>
            </div>
        </DialogContent>
    </Dialog>
    ),
    parameters: {
        layout: 'centered',
    },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const DialogDemo: Story = {
    args: {},
}