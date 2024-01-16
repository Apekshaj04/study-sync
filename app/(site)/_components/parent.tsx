"use client"
import React, { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Feed } from './feed';
import { Schedule } from './schedule';



export const Parent = () => {
    type Variant = 'RECENT' | "SCHEDULE"


    const [variant, setVariant] = useState<Variant>('RECENT');
    const [isLoading, setIsLoading] = useState(false);
    const toggleVarient = useCallback(() => {
        if (variant == 'RECENT') {
            setVariant('SCHEDULE');
        } else {
            setVariant('RECENT');
        }
    }, [variant]);

    const setRecent = () => {
        setVariant('RECENT');
    }
    const setSehcdule = () => {
        setVariant('SCHEDULE');
    }
    return (
        <div className='bg-slate-500 h-96 '>
            <div
                className="flex  cursor-pointer bottom-2 justify-center items-center bg-slate-500">

                <div className="inline-flex  hover:bg-green-400  text-3xl ">
                    <button onClick={setRecent}>RECENT</button>
                </div>
                <div className='w-10'></div>
                <div className="inline-flex  hover:bg-red-400  text-3xl">
                    <button onClick={setSehcdule} className="">SCHEDULE</button>
                </div>

            </div>

            <div className='h-10 w-10'></div>
            {variant == 'RECENT' && (<Feed />)}
            {variant == 'SCHEDULE' && (<Schedule />)}
        </div>
    )
}
