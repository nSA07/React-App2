import { FC, JSX,useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface IPopoverProps {
    icon: JSX.Element | string,
    placeholder: string,
    textBtm: string,
    handleSubmit: (
        values: { boardName: string },
        form: { reset: () => void },
        setOpen: (arg0: boolean) => void,
    ) => void;
}

export const PopoverMenu: FC<IPopoverProps> = ({icon, placeholder, textBtm, handleSubmit}) => {

    const [open, setOpen] = useState(false)

    const formSchema = z.object({
        boardName: z.string().min(2, {
            message: "Field must be at least 2 characters.",
        }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            boardName: "",
        },
    })

    const onSubmit = (values: { boardName: string }) => {
        handleSubmit(values, form, setOpen)
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger className="cursor-pointer" asChild>
                {icon}
            </PopoverTrigger>
            <PopoverContent className="p-3 w-80">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-start justify-center gap-4">
                        <FormField
                            control={form.control}
                            name="boardName"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input
                                            id="boardName"
                                            placeholder={placeholder}
                                            className="col-span-3 w-full"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">{textBtm}</Button>
                    </form>
                </Form>
            </PopoverContent>
        </Popover>
    )
}

