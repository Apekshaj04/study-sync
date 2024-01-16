"use client";

import React, { useEffect, useState } from 'react'
import TeacherProfileModal from '../modals/teacher-profile-modal';

const ModalProvider  = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    })

    if(!isMounted) {
        return null;
    }
  return (
    <>
     <TeacherProfileModal /> 
    </>
  )
}

export default ModalProvider 