import ClientsItemData from "@/data/ClientsItemData";

export default class ClientsData {
    clientsList: ClientsItemData[];

    constructor(clientsList: ClientsItemData[]) {
        this.clientsList = clientsList;

    }

}