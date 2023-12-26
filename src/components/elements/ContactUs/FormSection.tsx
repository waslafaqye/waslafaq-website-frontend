'use client'
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import * as z from "zod"
import {Form,} from "@/components/ui/form"
import {InputForm} from "@/components/elements/ContactUs/Input";
import {Button} from "@/components/ui/button";
import * as React from "react";
import {useTransition} from "react";
import postRequest, {FormSchema} from "@/app/actions";


export function FormSection({page}: { page: any }) {


    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
            title: ""
        },
    })
    const [isPending, startTransition] = useTransition()

    // async function onSubmit(data: z.infer<typeof FormSchema>) {
    //     // await postRequest(data);
    // }
    //
    //

    function onSubmit() {
        startTransition(() => {
            postRequest(page);
        })
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
                    className={`w-full !p-6 mt-6 !justify-center rounded-xl text-xl  shadow-none  flex items-center `}>
                    {page.Send}
                </Button>
            </form>
        </Form>
    )
}
