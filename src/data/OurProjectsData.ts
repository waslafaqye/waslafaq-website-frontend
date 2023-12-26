import OurProjectsDataItem from "@/data/OurProjectsDataItem";

export default class OurProjectsData {

    ourProjectList: OurProjectsDataItem[];

    constructor(ourProjectList: OurProjectsDataItem[]) {

        this.ourProjectList = ourProjectList;
    }
}