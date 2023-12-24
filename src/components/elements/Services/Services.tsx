'use client'
// @flow
import * as React from 'react';
import {SectionHeader} from "@/components/ui/SectionHeader";
import {ServiceCard} from "@/components/elements/Services/ServiceCard";

type Props = {
    id: string,
    page: any,
};
export const Services = (props: Props) => {

    return (
        <section id={props.id} className={'text-center my-24'}>

            <SectionHeader>{props.page.Services}</SectionHeader>
            <p className={' w-full lg:w-1/2 mx-auto  mt-7'}>يمكنك الاطلاع على مختلف الخدمات التي نقدمها من أجلك، اختر
                ماتريد
                واطلب
                من
                خلال التوصل
                معنا</p>

            <div className={"mt-9  lg:flex   h-full  gap-5 text-start"}>

                <div className={'lg:flex  lg:flex-col gap-5  '}>
                    <div className=' lg:flex  gap-5'>
                        <ServiceCard image={'/images/mobile.png'}
                                     description={'نحن نقدم دورة كاملة من تصميم تطبيقات الهاتف المحمول. توجيه عملية تطوير تطبيقات الهاتف المحمول بأكملها بدءًا من التفكير والمفهوم وحتى التسليم والدعم المستمر'}
                                     title={'تطوير تطبيقات الموبايل'}/>

                        <ServiceCard image={'/images/web.png'}
                                     description={'نحن نفخر بقدرتنا على إنشاء مواقع الويب التي تولد أعمالًا تجارية بمزيج رائع من الخبرة التقنية. بدءًا من تصميم التطبيقات عالية الجودة والعلامات التجارية وحتى أحدث تقنيات البرمجة والوظائف، لدينا القدرة على تقديم أفضل الحلول'}
                                     title={'تطوير المواقع الالكترونية'}/>

                    </div>
                    <div className={'h-auto'}>
                        <ServiceCard horizontal={true} image={'/images/web.png'}
                                     description={'نحن نفخر بقدرتنا على إنشاء مواقع الويب التي تولد أعمالًا تجارية بمزيج رائع من الخبرة التقنية. بدءًا من تصميم التطبيقات عالية الجودة والعلامات التجارية وحتى أحدث تقنيات البرمجة والوظائف، لدينا القدرة على تقديم أفضل الحلول'}
                                     title={' رسائل (Bulk SMS)'}/>

                    </div>
                </div>

                <div>
                    <ServiceCard image={'/images/bulk.png'}
                                 description={'تعد الرسائل النصية القصيرة المجمعة أداة قوية يمكن استخدامها للوصول إلى العملاء وإشراكهم بعدة طرق. إنها طريقة فعالة من حيث التكلفة وفعالة لإرسال الرسائل إلى عدد كبير من الأشخاص بسرعة وسهولة.'}
                                 title={'خدمات الرسائل القصيرة (VAS)'}/>
                </div>


            </div>
        </section>
    );
};