import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import SliderContent from "@/components/SliderContent";
import { Menu } from "@/types/types";

export default function Home() {
  const menu: Menu[] = [
    { menuTrigger: "Home" },
    {
      menuTrigger: "About",
      menuItems: [
        { menubarItem: "About the college" },
        { menubarItem: "Jesuite & Education" },
        { menubarItem: "Our Patron" },
        { menubarItem: "Our Founder" },
        { menubarItem: "Vision, Mission & Objectives" },
        { menubarItem: "Organogram" },
        { menubarItem: "Administration" },
        { menubarItem: "Contact Us" },
      ],
    },
    {
      menuTrigger: "Academics",
      menuItems: [
        {
          menubarItem: "Departments",
          subMenu: [
            { subMenuTrigger: "Department of Arts" },
            { subMenuTrigger: "Department of Commerce" },
            { subMenuTrigger: "Department of Business" },
            { subMenuTrigger: "Department of Science & Technology" },
          ],
        },
        { menubarItem: "Programs" },
        { menubarItem: "Courses" },
      ],
    },
    {
      menuTrigger: "IQAC",
      menuItems: [
        { menubarItem: "Structure of IQAC" },
        { menubarItem: "Strategies of IQAC according to Naac" },
        { menubarItem: "Best Practices (UBA & MOOC/Swayam Courses)" },
        { menubarItem: "Institutional Distinctiveness" },
        { menubarItem: "Quality Indicator Framework" },
        { menubarItem: "Minutes of the Meeting" },
        { menubarItem: "AQAR" },
        { menubarItem: "Documentation" },
      ],
    },
    { menuTrigger: "Admission" },
    { menuTrigger: "Library" },
    { menuTrigger: "RDC" },
    { menuTrigger: "Student Support" },
    {
      menuTrigger: "Services",
      menuItems: [
        { menubarItem: "Hostel and Accomodation" },
        { menubarItem: "Transport Facility" },
        { menubarItem: "Training and Placement Cell" },
        { menubarItem: "Sports and Yoga" },
        { menubarItem: "Canteen" },
      ],
    },
    { menuTrigger: "Campus Life" },
    {
      menuTrigger: "Bulletin",
      menuItems: [
        { menubarItem: "Notice Board" },
        { menubarItem: "Announcements" },
        { menubarItem: "Seminars, Conferences & Events" },
        { menubarItem: "Xpress" },
        { menubarItem: "Impetus" },
        { menubarItem: "Gallary" },
      ],
    },
  ];
  return (
    <main className="">
      {/* header section */}
      <section className="flex items-center justify-start md:justify-center lg:space-x-72 bg-[#F2D9DF] px-3 md:px-8 py-4">
        <div className="flex items-center space-x-4 w-full">
          <Image
            src="/logo/xavier-logo.png"
            width={200}
            height={200}
            alt="logo"
            className="w-14 h-14 lg:w-28 lg:h-28"
          />
          <div className="flex flex-col justify-center text-start space-y-2 md:space-y-0 grow lg:grow-0 lg:w-96">
            <h1 className="font-bold text-xl lg:text-3xl">
              St. Xavier&apos;s College Jaipur
            </h1>
            <p className="text-xs">
              Nevta-Mahapura Road, Near Nevta Dam, Tehsil Sanganer, Jaipur -
              302029
            </p>
          </div>
          {/* sheet */}
          <Sheet>
            <SheetTrigger className="lg:hidden">
              <HamburgerMenuIcon className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent>
              <ScrollArea className="h-full">
                <div className="flex flex-col space-y-6 mt-8">
                  <Image
                    src="/logo/xavier-logo.png"
                    width={200}
                    height={200}
                    alt="logo"
                    className="w-28 h-28 self-center"
                  />

                  <SliderContent menu={menu} />
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>

        <div className="relative hidden lg:block">
          <Input
            type="text"
            id="search"
            className="rounded-3xl bg-white"
            placeholder="search for..."
          />
          <Button className="absolute top-0 right-0 rounded-full w-9 h-9">
            <MagnifyingGlassIcon className="min-h-[1rem] min-w-[1rem]" />
          </Button>
        </div>
      </section>

      {/* navigation menu */}
      <section className="hidden lg:flex bg-primary justify-center">
        <Menubar className="bg-transparent text-white border-none h-14">
          {menu.map((item, index) => (
            <MenubarMenu key={index}>
              <MenubarTrigger className="h-10 cursor-pointer">
                {item.menuTrigger}
              </MenubarTrigger>
              {item.menuItems && (
                <MenubarContent>
                  {item.menuItems.map((subItem, index) => {
                    if (subItem.subMenu) {
                      return (
                        <MenubarSub key={index}>
                          <MenubarSubTrigger>
                            {subItem.menubarItem}
                          </MenubarSubTrigger>
                          <MenubarSubContent>
                            {subItem.subMenu.map((subItem, index) => (
                              <MenubarItem key={index}>
                                {subItem.subMenuTrigger}
                              </MenubarItem>
                            ))}
                          </MenubarSubContent>
                        </MenubarSub>
                      );
                    } else {
                      return (
                        <MenubarItem key={index}>
                          {subItem.menubarItem}
                        </MenubarItem>
                      );
                    }
                  })}
                </MenubarContent>
              )}
            </MenubarMenu>
          ))}
        </Menubar>
      </section>
    </main>
  );
}
