import {Locale} from "../../i18n.config";
import OurProjectsData from "@/data/OurProjectsData";
import OurProjectsDataItem from "@/data/OurProjectsDataItem";

export async function gettingProjects(locale: Locale): Promise<OurProjectsData> {
    const response = await fetch('http://website.waslafaq.net/api/our-project', {
        method: 'GET',
        cache: 'no-store',
        headers: {
            'content-type': 'application/json;charset=UTF-8',
            'lang': locale,
        },
    });

    const {data, errors} = await response.json()

    if (response.ok) {
        let projects: OurProjectsDataItem[] = [];
        data.map((project: { [x: string]: any; }) => {
            projects.push(new OurProjectsDataItem(project['id'], project['image'], project['title'], project['description']))
        })

        return new OurProjectsData(projects);
    } else {
        const error = new Error(errors.map((e: { message: any; }) => e.message).join('\n') ?? "UNKNOWN")
        return Promise.reject(error)
    }

}