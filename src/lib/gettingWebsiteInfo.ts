import {Locale} from "../../i18n.config";
import SettingsData from "@/data/SettingsData";
import HeroData from "@/data/HeroData";

export async function getInitialInfo(locale: Locale): Promise<SettingsData> {

    const response = await fetch('http://website.waslafaq.net/api/settings', {
        method: 'GET',
        cache: 'no-store',

        headers: {
            'content-type': 'application/json;charset=UTF-8',
            'lang': locale,
        },
    });

    const {data, errors} = await response.json()

    if (response.ok) {
        //  console.log(data);

        return new SettingsData(
            new HeroData(data['hero_image'], data['hero_text'], data['hero_detail_text'], data['file']),
            data['logo'],
            data['title_contactus'],
            data['description_contactus'],
            data['title_vision'],
            data['description_vision'],
            data['title_goals'],
            data['description_goals'],
            data['title_message'],
            data['description_message'],
            data['title_aboutus'],
            data['description_aboutus'],
            data['title_service'],
            data['description_service'],
            data['title_project'],
            data['description_project'],
            data['location_title'],
            data['location_text'],
            data['phone_title'],
            data['phone'],
            data['email_title'],
            data['email'],
            data['client_title']
        );
    } else {
        const error = new Error(errors.map((e: { message: any; }) => e.message).join('\n') ?? "UNKNOWN")
        return Promise.reject(error)
    }

}