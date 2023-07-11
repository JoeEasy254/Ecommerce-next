import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import CategoriesListView from "@/components/core/categoriesListView";
export default function menuLinks() {
  return (
    <div className="flex justify-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Spirits</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <CategoriesListView />
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Wines</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <CategoriesListView />
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Beers</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <CategoriesListView />
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Extras</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <CategoriesListView />
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
