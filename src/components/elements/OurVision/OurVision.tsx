import React from 'react';
import {icons} from "lucide-react";
import OurVisionCard from "@/components/elements/OurVision/OurVisionCard";

interface props {
    id: string,
}

function OurVision(props: props) {
    return (
        <section id={props.id}>
            <div className={'flex flex-col md:flex-row gap-10'}>
                <OurVisionCard icon={icons['Eye']} title={'الرؤية'}
                               description={'تحقيق الريادة في مجال تقديم خدمات القيمة المضافة ورسائل الـ(Bulk) والحلول البرمجية'}/>
                <OurVisionCard icon={icons['Target']} title={'الهدف'}
                               description={'تسهيل الوصل الى وخدمات القيمة المضافة والى خدمات رسائل الـ(Bulk) وتقديم خدمات برمجية بمعايير عالمية'}/>
            </div>
            <div className={'mt-10 md:w-1/2 flex mx-auto'}>
                <OurVisionCard icon={icons['MessageCircle']} title={'الرسالة'}
                               description={'تسهيل الوصل الى وخدمات القيمة المضافة والى خدمات رسائل الـ(Bulk) وتقديم خدمات برمجية بمعايير عالمية'}/>
            </div>
        </section>
    );
}

export default OurVision;