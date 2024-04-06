import { Meta, StoryObj } from '@storybook/react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { CalendarIcon, EllipsisVertical, Eye } from 'lucide-react'
import { Badge } from '../badge'

const meta = {
    title: 'Shadcn/card',
    component: () => (
        <Card className="w-72 pointer">
            <CardHeader>
                <div className="absolute contents">
                    <div className="relative top-[25px] left-[85%] flex gap-1">
                        <Eye className="pointer" />
                        <EllipsisVertical />
                    </div>
                    <CardTitle className="text-base text-wrap">
                        Some Title
                    </CardTitle>
                    <CardDescription className="text-wrap">Some descriptions</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex justify-start items-center text-sm font-medium">
                    <CalendarIcon className="mr-2" size={24} />
                    Today
                </div>
                <Badge variant="secondary">
                    Low
                </Badge>
            </CardContent>
            <CardFooter className="w-full">
                <div className="flex flex-col space-y-1.5 w-full">
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Move to" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="board">Some Board</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </CardFooter>
        </Card>
    ),
    parameters: {
        layout: 'centered',
    },
} satisfies Meta

type Story = StoryObj<typeof meta>

export const CardWithFormDemo: Story = {
    args: {},
}
export default meta