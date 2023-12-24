class ServicesData {
    content: string;
    servicesList: ServiceItemData[];

    constructor(content: string, serviceList: ServiceItemData[]) {
        this.content = content;
        this.servicesList = serviceList;
    }

}