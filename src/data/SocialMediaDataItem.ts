export default class SocialMediaDataItem {
    url: string;
    id: number;

    constructor(url: string, id: number) {
        this.id = id;
        this.url = url;
    }
}