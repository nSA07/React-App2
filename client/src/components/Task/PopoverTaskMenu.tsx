import { FC } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useToast } from "@/components/ui/use-toast"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { useEditTasksMutation } from "@/redux"
import { FilePenLine } from "lucide-react"

interface ITaskDialogProps {
    id: number;
    title: string;
    description: string;
    priority: string;
    setOpen: (arg0: boolean) => void;
}

export const PopoverTaskMenu: FC<ITaskDialogProps> = ({id, title, description, priority, setOpen}) => {

    const { toast } = useToast()
    const [ editTasks ] = useEditTasksMutation()

    const formSchema = z.object({
        title: z.string().min(2, {
        message: "Field must be at least 2 characters.",
        }),
        description: z.string(),
        priority: z.string({ required_error: "Please select an priority to display.",}),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: `${title}`,
            description: `${description}`,
            priority: `${priority.toLowerCase()}`,
        },
    })

    const onSubmit = async (values) => {        
        try {
            const newTask = {
                id: id,
                new_task: {
                    title: values.title,
                    description: values.description,
                    priority: values.priority,
                }
            }
            await editTasks(newTask).unwrap()
            form.reset()
            setOpen(false)
        } catch (error) {
            toast({
                title: `${error.status}`,
                description: `${JSON.stringify(error.data.message)}`,
            })
        } 
    }

    return (
        <Popover>
            <PopoverTrigger className="cursor-pointer" asChild>
                <Button variant={'ghost'} size={'boardBtm'} className="w-full">
                    <FilePenLine />
                    Редагувати
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-3 w-80">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-start justify-center gap-4">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <Label htmlFor="title" className="text-right">
                                        Заголовок
                                    </Label>
                                    <FormControl>
                                        <Input
                                            id="title"
                                            placeholder={"Title"}
                                            className="col-span-3 w-full"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <Label htmlFor="description" className="text-right">
                                        Опис
                                    </Label>
                                    <FormControl>
                                        <Input
                                            id="description"
                                            placeholder={"Description"}
                                            className="col-span-3 w-full"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="priority"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <Label  className="text-right">
                                        Пріоритет
                                    </Label>
                                    <FormControl>
                                        <Select onValueChange={field.onChange}>
                                            <SelectTrigger id="priority">
                                                <SelectValue placeholder="Low" />
                                            </SelectTrigger>
                                            <SelectContent position="popper">
                                                <SelectItem value="low">Low</SelectItem>
                                                <SelectItem value="medium">Medium</SelectItem>
                                                <SelectItem value="high">Hight</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Зберегти</Button>
                    </form>
                </Form>
            </PopoverContent>
        </Popover>
    )
}

