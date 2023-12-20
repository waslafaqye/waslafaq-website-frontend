// @flow
import * as React from 'react';
import {SectionHeader} from "@/components/ui/SectionHeader";
import {PrimaryButton} from "@/components/ui/PrimaryButton";
import Image from "next/image";

type Props = {
    id: string
};
export const AboutUs = (props: Props) => {
    return (
        <section id={props.id}
                 className={'flex mb-40  flex-col lg:flex-row justify-center items-center gap-6 lg:justify-end '}>

            <div>
                <Image src={'/images/aboutUs.svg'} alt={''} height={50} width={50}
                       className={'h-full  w-full'}/>
            </div>
            <div className={' text-center lg:text-start  mt-10 justify-center  flex flex-col  lg:w-1/2 '}>
                <SectionHeader className={'lg:!m-0'}>
                    من نحن
                </SectionHeader>
                <p className={'my-10'}> شركة برمجية متخصصة في تقديم خدمات القيمة المضافة ورسائل الـ(Bulk) عبر شركات
                    الاتصالات اليمنية
                    وتطوير البرمجيات ومواقع الويب وتطبيقات الجوال بجودة عالية ودعم فني متواصل على مدار الساعة مما يضعنا
                    في مقدمة الشركات الرائدة في هذا المجال.</p>
                <PrimaryButton className={'!w-fit mx-auto lg:mx-0'} title={'رؤية الخدمات'}/>
            </div>

        </section>
    );
};