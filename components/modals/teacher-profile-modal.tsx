"use client";
import React from 'react'
import * as z from 'zod';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { useModal } from '@/hooks/use-modal-store';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { CopyIcon } from 'lucide-react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Textarea } from '../ui/textarea';
import axios from 'axios';

const TeacherProfileModal = () => {

    const formSchema = z.object({
        university: z.string().min(2).max(50),
        college: z.string().min(2).max(50),
        cgpa: z.string(),
        bio: z.string().max(100)
      })

      function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        axios.post('/api/tutors', values)
        .then(() => {
            form.reset()
            alert("Tutor Created")
        })
        .catch((error) => {
            alert(error)
        })

        onClose()
      }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          university: "",
          bio: "",
          cgpa: "",
          college: ""
        },
      })

    const {isOpen, onOpen, onClose}  = useModal();
  return (
    <Dialog open={isOpen} onOpenChange={onClose}> 
        <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create your tutor profile</DialogTitle>
          <DialogDescription>
            complete your profile to schedule a class 
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                control={form.control}
                name="university"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>University</FormLabel>
                    <FormControl>
                        <Input placeholder="your university name" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="college"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>College</FormLabel>
                    <FormControl>
                        <Input placeholder="your college name" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="cgpa"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>CGPA</FormLabel>
                    <FormControl>
                        <Input placeholder="your current cgpa" {...field} type="number" />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                        <Textarea placeholder="tell us something..." {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
        </DialogContent>
    </Dialog>
  )
}

export default TeacherProfileModal;
