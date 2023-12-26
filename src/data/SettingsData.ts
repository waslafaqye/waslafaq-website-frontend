import HeroData from "@/data/HeroData";

export default class SettingsData {
    hero: HeroData;
    logo: string;
    contactUsTitle: string;
    contactUsSubtitle: string;
    visionTitle: string;
    visionSubtitle: string;
    goalTitle: string;
    goalSubtitle: string;
    messageTitle: string;
    messageSubtitle: string;
    aboutUsTitle: string;
    aboutUsSubtitle: string;
    servicesTitle: string;
    servicesSubtitle: string;
    projectsTitle: string;
    projectsSubtitle: string;
    locationTitle: string;
    locationSubtitle: string;
    phoneTitle: string;
    phoneSubtitle: string;
    emailTitle: string;
    emailSubTitle: string;
    clientTitle: string;

    constructor(
        hero: HeroData,
        logo: string,
        contactUsTitle: string,
        contactUsSubtitle: string,
        visionTitle: string,
        visionSubtitle: string,
        goalTitle: string,
        goalSubtitle: string,
        messageTitle: string,
        messageSubtitle: string,
        aboutUsTitle: string,
        aboutUsSubtitle: string,
        servicesTitle: string,
        servicesSubtitle: string,
        projectsTitle: string,
        projectsSubtitle: string,
        locationTitle: string,
        locationSubtitle: string,
        phoneTitle: string,
        phoneSubtitle: string,
        emailTitle: string,
        emailSubTitle: string,
        clientTitle: string,
    ) {
        this.hero = hero;
        this.logo = logo;
        this.contactUsTitle = contactUsTitle;
        this.contactUsSubtitle = contactUsSubtitle;
        this.visionTitle = visionTitle;
        this.visionSubtitle = visionSubtitle;
        this.goalTitle = goalTitle;
        this.goalSubtitle = goalSubtitle;
        this.clientTitle = clientTitle;
        this.messageTitle = messageTitle;
        this.messageSubtitle = messageSubtitle;
        this.aboutUsTitle = aboutUsTitle;
        this.aboutUsSubtitle = aboutUsSubtitle;
        this.servicesTitle = servicesTitle;
        this.servicesSubtitle = servicesSubtitle;
        this.projectsTitle = projectsTitle;
        this.projectsSubtitle = projectsSubtitle;
        this.locationTitle = locationTitle;
        this.locationSubtitle = locationSubtitle;
        this.phoneTitle = phoneTitle;
        this.phoneSubtitle = phoneSubtitle;
        this.emailTitle = emailTitle;
        this.emailSubTitle = emailSubTitle;
    }
}