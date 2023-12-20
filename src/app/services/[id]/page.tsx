import * as React from 'react';
import Image from "next/image";
import {SectionHeader} from "@/components/ui/SectionHeader";
import {PrimaryButton} from "@/components/ui/PrimaryButton";
import {Button} from "@/components/ui/button";

type props = {
    id: string,
}

export default function ServiceDetails(props: props) {
    const id = props.id;
    return (
        <div>
            <div className={'bg-appbarLinksBackground p-8 rounded-3xl'}>
                <Image src={'/images/mobile.png'} alt={''}
                       className={'w-screen object-cover object-center rounded-2xl h-64'}
                       width={400}
                       height={400}/>

            </div>
            <SectionHeader className={'!mx-0 my-10'}>
                تطوير تطبيقات الموبايل
            </SectionHeader>
            <p>
                نحن نقدم دورة كاملة من تصميم تطبيقات الهاتف المحمول. توجيه عملية تطوير تطبيقات الهاتف المحمول بأكملها
                بدءًا من التفكير والمفهوم وحتى التسليم والدعم المستمر نحن نقدم دورة كاملة من تصميم تطبيقات الهاتف
                المحمول. توجيه عملية تطوير تطبيقات الهاتف المحمول بأكملها بدءًا من التفكير والمفهوم وحتى التسليم والدعم
                المستمر نحن نقدم دورة كاملة من تصميم تطبيقات الهاتف المحمول. توجيه عملية تطوير تطبيقات الهاتف المحمول
                بأكملها بدءًا من التفكير والمفهوم وحتى التسليم والدعم المستمر نحن نقدم دورة كاملة من تصميم تطبيقات
                الهاتف المحمول. توجيه عملية تطوير تطبيقات الهاتف المحمول بأكملها بدءًا من التفكير والمفهوم وحتى التسليم
                والدعم المستمر نحن نقدم دورة كاملة من تصميم تطبيقات الهاتف المحمول. توجيه عملية تطوير تطبيقات الهاتف
                المحمول بأكملها بدءًا من التفكير والمفهوم وحتى التسليم والدعم المستمر
            </p>
            <div className={'flex flex-col md:flex-row gap-6 mt-6 w-fit mx-auto lg:mx-0 '}>
                <PrimaryButton className={'!text-center !justify-center lg:justify-between'}
                               title={'اطلب الخدمة'}/>
                <Button
                    className={` rounded-xl text-lg bg-transparent border-[2px] border-primary  shadow-none p-[22px] flex items-center justify-between`}>
                    <span className={'me-3'}>رؤية بقية الخدمات</span>

                </Button>
            </div>

        </div>
    );

}
