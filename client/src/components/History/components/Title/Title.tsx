import { FC } from 'react'
import { Dot, Disc2  } from 'lucide-react'

import { IHistoryItem } from '@/types/types';

import { formattedData } from '@/helpers/formattedData';

export const Title: FC<IHistoryItem> = ({prev, next, dueData}) =>
    {
        const {createDate} = formattedData(dueData);
    
        return <li data-testid="type-title" key={dueData} className="text-slate-500 text-xs flex flex-col gap-2">
            <div className="text-slate-500 text-xs flex gap-1 items-center flex-wrap">
                <Dot size={16} />
                You renamed <Disc2 size={10} strokeWidth={4} /> <span className="font-bold">{prev}</span> to <Disc2 size={10} strokeWidth={4} /> <span className="font-bold">{next}</span>
            </div>
            <span className="pl-5 italic">{createDate}</span>
        </li>;
    }
