class OurProjectsData {
    content: string;
    ourProjectList: OurProjectsDataItem[];

    constructor(content: string, ourProjectList: OurProjectsDataItem[]) {
        this.content = content;
        this.ourProjectList = ourProjectList;
    }
}