import {Locale} from "../../i18n.config";

export async function getInitialInfo({lang}: { lang: Locale }) {
    const response = await fetch('http://website.waslafaq.net/api/settings');

    const data = await response.json();

    console.log(data);
    return data;
}