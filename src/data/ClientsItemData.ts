export default class ClientsItemData {
    id: number;
    logo: string;
    url: string;

    constructor(id: number, logo: string, url: string) {
        this.id = id;
        this.url = url;
        this.logo = logo;
    }
}