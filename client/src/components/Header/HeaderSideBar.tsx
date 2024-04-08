import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"

import { RotateCcw  } from 'lucide-react'
import { IHistory } from "@/types/types";
import { History } from "@/components/History/History";

export const HeaderSideBar = ({history}) => {  
           
    const data = [];
    function historyItem (item: IHistory) {
        item?.map(({ changes }) => {           
            changes?.map(({field, prev, next, taskName, dueData}) => { 

                data.push({field, prev, next, taskName, dueData})
            })
        });
    }
    
    historyItem(history);    

    return (
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
                        {data?.map((item) => (
                            <History key={item.field} type={item.field} prev={item.prev} next={item.next} taskName={item.taskName} dueData={item.dueData} />
                        ))}
                    </ul>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}
