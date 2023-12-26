import {Locale} from "../../i18n.config";

import ClientsData from "@/data/ClientsData";
import ClientsItemData from "@/data/ClientsItemData";

export async function gettingClients(locale: Locale): Promise<ClientsData> {
    const response = await fetch('http://website.waslafaq.net/api/our-client', {
        method: 'GET',
        cache: 'no-store',
        headers: {
            'content-type': 'application/json;charset=UTF-8',
            'lang': locale,
        },
    });

    const {data, errors} = await response.json()
    if (response.ok) {
        let clients: ClientsItemData[] = [];
        data.map((client: { [x: string]: any; }) => {
            clients.push(new ClientsItemData(client['id'], client['logo'], client['url'],))
        })

        return new ClientsData(clients);
    } else {
        const error = new Error(errors.map((e: { message: any; }) => e.message).join('\n') ?? "UNKNOWN")
        return Promise.reject(error)
    }

}