import { Menu, MenuItem } from 'cx/widgets';

const navItemStyle = 'p-2 m-1';

export const NavigationBar = () => (
   <cx>
      {/* Navigation */}
      <div class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
         {/* Nav container */}
         <nav class="flex flex-row justify-between p-2">
            {/* Left section */}
            <Menu class="flex flex-row">
               <MenuItem className={navItemStyle} text="CxJS" />
            </Menu>

            {/* Right section */}
            <Menu class="flex flex-row">
               <MenuItem className={navItemStyle} text-expr="{theme.dark}? 'Light':'Dark'" onClick="toggleTheme" />
               <MenuItem className={navItemStyle} text="Codaxy" />
               <MenuItem className={navItemStyle} text="Blog" />
               <MenuItem className={navItemStyle} text="Git" />
            </Menu>
         </nav>
      </div>
   </cx>
);
