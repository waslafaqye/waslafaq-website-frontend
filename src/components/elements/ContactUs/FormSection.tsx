'use client'
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import * as z from "zod"
import {Form,} from "@/components/ui/form"
import {InputForm} from "@/components/elements/ContactUs/Input";
import {Button} from "@/components/ui/button";
import * as React from "react";
import {useState} from "react";
import {BeatLoader} from "react-spinners";
import {toast} from "@/components/ui/use-toast";


export function FormSection({page, action}: { page: any; action: any }) {

    const [isLoading, setIsLoading] = useState(false);

    const FormSchema = z.object({
        name: z.string().min(3, {
            message: "يجب ان يكون الاسم على الاقل مكون من 3 احرف",
        }),
        email: z.string().email('البريد الالكتروني غير صحيح').min(1, {message: 'البريد الالكتروني غير صحيح'}),

        message: z.string().min(20, {
            message: 'يجب ان لا يقل نص الطلب عن 20 حرف',
        }),
        title: z.string(),
    })


    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
        },
    })


    async function onSubmit() {
        setIsLoading(true)

        const data = {
            name: form.getValues('name'),
            email: form.getValues('email'),
            message: form.getValues('message'),
            title: form.getValues('title')
        }

        if (await action(data)) {
            form.setValue('name', '')
            form.setValue('email', '')
            form.setValue('message', '')
            form.setValue('title', '')

            toast({
                color: 'white',
                className: 'bg-white !text-2xl ',
                title: page.success,
                description: page.successMessage,
            })
        } else {
            toast({

                    className: 'bg-[red] !text-2xl border-none text-white',
                    title: page.error,
                    description: page.errorMessage,
                }
            )
        }
        setIsLoading(false)
    }

    return (
        <Form  {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full lg:ms-10">
                <div className={'flex mt-6 mb-4 flex-col lg:flex-row gap-4'}>
                    <InputForm control={form.control} name={'name'} placeholder={page.Name}/>
                    <InputForm control={form.control} name={'email'} placeholder={page.Email}/>
                </div>
                <InputForm control={form.control} name={'title'} placeholder={page.Address}/>
                <InputForm control={form.control} isTextArea={true} name={'message'}
                           placeholder={page.RequestContent}/>
                <Button
                    type={'submit'}
                    className={`w-full  !p-6 mt-6 !justify-center rounded-xl text-xl  shadow-none  flex items-center `}>
                    {isLoading &&
                        <BeatLoader size={10} color={'white'}/>}
                    {!isLoading && page.Send}
                </Button>

            </form>
        </Form>
    )
}
