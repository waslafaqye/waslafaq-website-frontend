class ContactUsData {
    content: string;
    contactUsInfoList: ContactUsInfoData[];

    constructor(content: string, contactUsInfoList: ContactUsInfoData[]) {
        this.content = content;
        this.contactUsInfoList = contactUsInfoList;
    }

}