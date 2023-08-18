export interface Menu {
  menuTrigger: string;
  menuItems?: {
    menubarItem: string;
    subMenu?: {
      subMenuTrigger: string;
    }[];
  }[];
}
