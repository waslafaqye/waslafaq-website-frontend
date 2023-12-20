// @flow
import * as React from 'react';
import {FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {FieldValue} from "react-hook-form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

type Props = {
    control: FieldValue<any>,
    name: string,
    placeholder: string,
    isTextArea?: boolean,
};
export const InputForm = (props: Props) => {
    return (
        props.isTextArea ? <FormField
                control={props.control}
                name={props.name}
                render={({field}) => (
                    <FormItem className={'mt-4'}>
                        <FormControl>
                            <Textarea
                                placeholder={props.placeholder}
                                className={'border-none rounded-2xl resize-none shadow-none peer h-full min-h-[137px] w-full  p-4 text-lg focus-visible:ring-0  autofill:caret-blue-800 bg-appbarLinksBackground placeholder:text-inputPlaceHolderColor'}
                                {...field}
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
            :
            <FormField
                control={props.control}
                name={props.name}
                render={({field}) => (

                    <FormItem className={'w-full  '}>
                        <FormControl>
                            <Input
                                className={'border-none rounded-2xl shadow-none  h-14 p-4 text-lg focus-visible:ring-0  autofill:caret-blue-800 bg-appbarLinksBackground placeholder:text-inputPlaceHolderColor'}
                                placeholder={props.placeholder} {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
    );
};