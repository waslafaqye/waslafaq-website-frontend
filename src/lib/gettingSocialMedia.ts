import {Locale} from "../../i18n.config";
import SocialMediaData from "@/data/SocialMediaData";
import SocialMediaDataItem from "@/data/SocialMediaDataItem";

export async function gettingSocialMedia(locale: Locale): Promise<SocialMediaData> {
    const response = await fetch('http://website.waslafaq.net/api/social-media', {
        method: 'GET',
        cache: 'no-store',
        headers: {
            'content-type': 'application/json',
            'lang': locale,
        },
    });

    const {data, errors} = await response.json()
    if (response.ok) {
        //console.log(data)
        let socialLinks: SocialMediaDataItem[] = [];
        data.map((link: { [x: string]: any; }) => {
            socialLinks.push(new SocialMediaDataItem(link['url'], link['id']))
        })

        return new SocialMediaData(socialLinks);
    } else {
        const error = new Error(errors.map((e: { message: any; }) => e.message).join('\n') ?? "UNKNOWN")
        return Promise.reject(error)
    }

}