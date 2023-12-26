import ServicesData from "@/data/ServicesData";
import {Locale} from "../../i18n.config";
import ServiceItemData from "@/data/ServiceItemData";

export async function gettingServices(locale: Locale): Promise<ServicesData> {
    const response = await fetch('http://website.waslafaq.net/api/service', {
        method: 'GET',
        cache: 'no-store',
        headers: {
            'content-type': 'application/json;charset=UTF-8',
            'lang': locale,
        },
    });

    const {data, errors} = await response.json()
    if (response.ok) {
        let servicesList: ServiceItemData[] = [];
        data.map((service: { [x: string]: any; }) => {
            servicesList.push(new ServiceItemData(service['image'], service['title'], service['description']))
        })

        return new ServicesData(servicesList);
    } else {
        const error = new Error(errors.map((e: { message: any; }) => e.message).join('\n') ?? "UNKNOWN")
        return Promise.reject(error)
    }

}