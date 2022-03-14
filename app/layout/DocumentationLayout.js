import { bind, expr } from 'cx/ui';
import { Menu, MenuItem, TextField } from 'cx/widgets';

const navItemStyle = 'p-2 m-1';

let LayoutController = {
   onInit() {
      this.store.set('theme.dark', true);
   },
   toggleTheme() {
      this.store.toggle('theme.dark');
   },
};
export const DocumentationLayout = ({ children }) => (
   <cx>
      <div class={{ 'h-full': true, dark: bind('theme.dark') }} controller={LayoutController}>
         <div class="max-w-8xl h-full mx-auto px-4 sm:px-6 md:px-8 bg-white dark:bg-gray-800 transition-colors text-black dark:text-white">
            {/* Navigation */}
            <div class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
               {/* Nav container */}
               <nav class="flex flex-row justify-between p-2">
                  {/* Left section */}
                  <Menu class="flex flex-row">
                     <MenuItem className={navItemStyle} text="CxJS" />
                  </Menu>

                  {/* Right section */}
                  <Menu class="flex flex-row">
                     <MenuItem
                        className={navItemStyle}
                        text-expr="{theme.dark}? 'Light':'Dark'"
                        onClick="toggleTheme"
                     />
                     <MenuItem className={navItemStyle} text="Codaxy" />
                     <MenuItem className={navItemStyle} text="Blog" />
                     <MenuItem className={navItemStyle} text="Git" />
                  </Menu>
               </nav>
            </div>
            <div class="main-container">
               <div className="left-container">
                  <TextField />
               </div>
               <div className="center-container">Center</div>
               <div className="right-container">Right menu</div>
            </div>
            <div>{children}</div>
         </div>
      </div>
   </cx>
);
