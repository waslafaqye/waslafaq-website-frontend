import ServiceItemData from "@/data/ServiceItemData";

export default class ServicesData {
    servicesList: ServiceItemData[];

    constructor(serviceList: ServiceItemData[]) {
        this.servicesList = serviceList;
    }

}