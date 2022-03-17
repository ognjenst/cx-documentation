import { bind } from 'cx/ui';
import { NavigationBar } from '../components/navigation-bar';
import { LeftSideMenu } from '../components/sidemenu-left';
import { RightSideMenu } from '../components/sidemenu-right';

const LayoutController = {
   onInit() {
      let darkTheme = localStorage.getItem('theme');
      this.store.set('theme.dark', darkTheme == 'dark' ? true : false);
   },
   toggleTheme() {
      let darkTheme = this.store.get('theme');
      this.store.toggle('theme.dark');
      localStorage.setItem('theme', darkTheme ? 'dark' : 'light');
   },
};
export const DocumentationLayout = ({ children }) => (
   <cx>
      <div class={{ 'h-full': true, dark: bind('theme.dark') }} controller={LayoutController}>
         <div
            class={{
               'h-full ': true,
               'bg-white dark:bg-gray-800': true,
               'dark:bg-gradient-to-tr dark:from-slate-900 dark:to-slate-800': true,
               'bg-gradient-to-tr from-white to-blue-200': true,
               'text-black dark:text-white': true,
               'transition-colors': true,
            }}
         >
            <div class="max-w-screen-2xl mx-auto">
               <NavigationBar />
               <div class="flex flex-row justify-between pt-2">
                  <LeftSideMenu />
                  <div className="center-container w-full p-2">{children}</div>
                  <RightSideMenu />
               </div>
            </div>
         </div>
      </div>
   </cx>
);
