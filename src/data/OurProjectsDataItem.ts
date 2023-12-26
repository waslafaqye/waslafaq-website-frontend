export default class OurProjectsDataItem {
    id: number;
    image: string;
    title: string;
    description: string;

    constructor(id: number, image: string, title: string, description: string) {
        this.id = id;
        this.description = description;
        this.image = image;
        this.title = title;
    }

}