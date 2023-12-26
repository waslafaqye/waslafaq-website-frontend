export default class HeroData {
    image: string;
    heading: string;
    subHeading: string;
    profileUrl: string;

    constructor(image: string, heading: string, subHeading: string, profileUrl: string) {
        this.image = image;
        this.heading = heading;
        this.subHeading = subHeading;
        this.profileUrl = profileUrl;
    }
}