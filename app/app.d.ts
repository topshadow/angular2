interface Part {
    part: string;
    width:string;
    height:string;
    left:string;
    top:string;
    zIndex:number;
    position:string;
    transformOrigin:string;
    transform:string;
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