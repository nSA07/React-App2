import { FC } from 'react'
import { Dot, Disc2  } from 'lucide-react'

import { IHistoryItem } from '@/types/types';

import { formattedData } from '@/helpers/formattedData';


export const Priority: FC<IHistoryItem> = ({prev, next, taskName, dueData}) =>     
    {
        const {createDate} = formattedData(dueData);
    
        return <li data-testid="type-priority" key={dueData} className="text-slate-500 text-xs flex flex-col gap-2">
            <div className="text-slate-500 text-xs flex gap-1 items-center flex-wrap">
                <Dot size={16} />
                You changed property <Disc2 size={10} strokeWidth={4} /> <span className="font-bold">{taskName}</span> from <span className="font-medium">{prev}</span> to <span className="font-medium">{next}</span>
            </div>
            <span className="pl-5 italic">{createDate}</span>
        </li>;
    }