import { Dot, Disc2  } from 'lucide-react'
import { formattedData } from '@/helpers/formattedData';

export const typeFunction = {
    'added': (prev: string, next: string, taskName: string, dueData: string) =>     
    {
        const {createDate} = formattedData(dueData);
    
        if(!prev) {
            return <li key={dueData} className="text-slate-500 text-xs flex flex-col gap-2">
                <div className="text-slate-500 text-xs flex gap-1 items-center flex-wrap">
                    <Dot size={16} />
                    You added <Disc2 size={10} strokeWidth={4} /> <span className="font-bold">{next}</span> to <span className="font-medium">{taskName}</span>
                </div>
                <span className="pl-5 italic">{createDate}</span>
            </li>;
        } else null;
    },
    'title': (prev: string, next: string, _taskName: string, dueData: string) =>
    {
        const {createDate} = formattedData(dueData);

        return <li key={dueData} className="text-slate-500 text-xs flex flex-col gap-2">
            <div className="text-slate-500 text-xs flex gap-1 items-center flex-wrap">
                <Dot size={16} />
                You renamed <Disc2 size={10} strokeWidth={4} /> <span className="font-bold">{prev}</span> to <Disc2 size={10} strokeWidth={4} /> <span className="font-bold">{next}</span>
            </div>
            <span className="pl-5 italic">{createDate}</span>
        </li>;
    },
    'description': (prev: string, next: string, taskName: string, dueData: string) => 
    {
        const {createDate} = formattedData(dueData);

        return <li key={dueData} className="text-slate-500 text-xs flex flex-col gap-2">
            <div className="text-slate-500 text-xs flex gap-1 items-center flex-wrap">
                <Dot size={16} />
                You changed description <Disc2 size={10} strokeWidth={4} /> <span className="font-bold">{taskName}</span> from <span className="font-medium">{prev}</span> to <span className="font-medium">{next}</span>
            </div>
            <span className="pl-5 italic">{createDate}</span>
        </li>;
    },
    'priority': (prev: string, next: string, taskName: string, dueData: string) => 
    {
        const {createDate} = formattedData(dueData);

        return <li key={dueData} className="text-slate-500 text-xs flex flex-col gap-2">
            <div className="text-slate-500 text-xs flex gap-1 items-center flex-wrap">
                <Dot size={16} />
                You changed property <Disc2 size={10} strokeWidth={4} /> <span className="font-bold">{taskName}</span> from <span className="font-medium">{prev}</span> to <span className="font-medium">{next}</span>
            </div>
            <span className="pl-5 italic">{createDate}</span>
        </li>;
    },
    'list': (prev: string, next: string, taskName: string, dueData: string) => 
    {
        
        const {createDate} = formattedData(dueData);

        return <li key={dueData} className="text-slate-500 text-xs flex flex-col gap-2">
            <div className="text-slate-500 text-xs flex gap-1 items-center flex-wrap">
                <Dot size={16} />
                You moved <Disc2 size={10} strokeWidth={4} /> <span className="font-bold">{taskName}</span> from <span className="font-medium">{prev}</span> to <span className="font-medium">{next}</span>
            </div>
            <span className="pl-5 italic">{createDate}</span>
        </li>;
    },
    'remove': (prev: string, next: string, taskName: string, dueData: string) => 
    {   
        const {createDate} = formattedData(dueData);

        if(!next) {
            return <li key={dueData} className="text-slate-500 text-xs flex flex-col gap-2">
                <div className="text-slate-500 text-xs flex gap-1 items-center flex-wrap">
                    <Dot size={16} />
                    You delete <Disc2 size={10} strokeWidth={4} /> <span className="font-bold">{prev}</span> from <span className="font-medium">{taskName}</span>
                </div>
                <span className="pl-5 italic">{createDate}</span>
            </li>;
        } else null;
    },
}