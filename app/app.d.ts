interface Part {
    part: string;

}

interface Page {
    path: string;
    parts: Part[];
}


interface WebSiteData {
    pages: Page[];
}

interface Menu {
    path: string;
    title: string;
    subMenu: any[];
}

interface Nav{
    menuList:Menu[];
    
}