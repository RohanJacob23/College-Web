import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MagnifyingGlassIcon,
  HamburgerMenuIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";
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
import SliderContent from "@/components/SliderContent";
import { Menu } from "@/types/types";
import Carousel from "@/components/Carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
              <div className="hideScrollbar h-full overflow-y-scroll">
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
              </div>
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

      {/* carousel section */}
      <section>
        <Carousel />
      </section>

      <section>
        {/* marquee */}
        <div className="bg-[#b31b38] text-white font-semibold text-lg py-2 w-full whitespace-nowrap overflow-hidden">
          <div className="py-3 border border-white">
            <span className="marquee">
              Admissions for the session 2023-24 has started from 7th April,
              2023 ✱ On the Spot Admissions has started from 19th June, 2023 ✱
              Admission Counselling Timings: 9:30 AM to 3:00 PM ✱ Admissions for
              the session 2023-24 has started from 7th April, 2023 ✱ On the Spot
              Admissions has started from 19th June, 2023 ✱ Admission
              Counselling Timings: 9:30 AM to 3:00 PM
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-evenly px-4 py-6 md:px-20 md:py-16 gap-4 md:gap-8">
          <div className="flex flex-col space-y-4 p-4 md:w-2/3">
            <h1 className="text-[#b31b38] font-bold text-4xl">
              Principal&apos;s Message
            </h1>
            <div className="font-medium text-base space-y-4">
              <p>
                Education is the passport to the future, for tomorrow belongs to
                those who prepare for it today.
              </p>
              <p>
                The world today has no dearth of knowledge, data and statistics
                - everything lights up on the screen in a desired format at the
                click of the mouse, yet, ignorance has its tentacles everywhere
                in various. Education is the only tool to combat ignorance and
                provide the required confidence march into a future that is full
                of uncertainty and unknown challenges.
              </p>
              <p>
                St. Xavier&apos;s College Jaipur, believes in empowering young
                minds so that they can be change makers in the society, and in
                turn become instruments of dispelling the darkness of ignorance.
                The college believes in shaping holistic character to enhance
                competence which would be meaningless without compassion in a
                world that is stricken with violence, war, hatred and distrust.
              </p>
            </div>
            <Button className="self-center md:self-start">
              Read More <ExternalLinkIcon className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* father image card */}
          <Card>
            <Image
              src="/Father-Xavier-Photo.png"
              width={500}
              height={500}
              alt="father's photo"
              className="h-full w-full object-cover"
            />
            <CardFooter className="pt-6 font-semibold text-base">
              <p>Prof. Fr. S. Xavier SJ</p>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}
