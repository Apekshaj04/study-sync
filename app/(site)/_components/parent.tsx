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
        <div>
            <div
                className="flex  cursor-pointer flex justify-center items-center">

                <div className="inline-flex bg-gray-100 hover:bg-green-400  text-lg">
                    <button onClick={setRecent}>RECENT</button>
                </div>
                <div className='w-10'></div>
                <div className="inline-flex bg-gray-100 hover:bg-red-400  text-lg">
                    <button onClick={setSehcdule} className="">SCHEDULE</button>
                </div>

            </div>

            <div className='h-10 w-10'></div>
            {variant == 'RECENT' && (<Feed />)}
            {variant == 'SCHEDULE' && (<Schedule />)}
        </div>
    )
}
