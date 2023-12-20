"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import * as z from "zod"
import {Form,} from "@/components/ui/form"
import {toast} from "@/components/ui/use-toast"
import {InputForm} from "@/components/elements/ContactUs/Input";
import {PrimaryButton} from "@/components/ui/PrimaryButton";

const FormSchema = z.object({
    username: z.string().min(3, {
        message: "يجب ان يكون الاسم على الاقل مكون من 3 احرف",
    }),
    email: z.string().email('البريد الالكتروني غير صحيح').min(1, {message: 'البريد الالكتروني غير صحيح'}),

    messageText: z.string().min(20, {
        message: 'يجب ان لا يقل نص الطلب عن 20 حرف',
    }),
})

export function FormSection() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
            ),
        })
    }

    return (
        <Form  {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full lg:ms-10">
                <div className={'flex mt-6 mb-4 flex-col lg:flex-row gap-4'}>
                    <InputForm control={form.control} name={'username'} placeholder={'الإسم'}/>
                    <InputForm control={form.control} name={'email'} placeholder={'البريد الإلكتروني'}/>
                </div>
                <InputForm control={form.control} name={'title'} placeholder={'عنوان الطلب'}/>
                <InputForm control={form.control} isTextArea={true} name={'messageText'} placeholder={'نص الطلب'}/>

                <PrimaryButton className={'w-full !p-6 mt-6 !justify-center'} title={'ارسال'}/>
            </form>
        </Form>
    )
}
