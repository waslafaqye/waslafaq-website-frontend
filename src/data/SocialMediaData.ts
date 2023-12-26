import SocialMediaDataItem from "@/data/SocialMediaDataItem";

export default class SocialMediaData {
    socialMediaList: SocialMediaDataItem[];

    constructor(socialMediaItems: SocialMediaDataItem[]) {
        this.socialMediaList = socialMediaItems;
    }
}