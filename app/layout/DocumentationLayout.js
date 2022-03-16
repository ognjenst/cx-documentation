import { bind } from 'cx/ui';
import { NavigationBar } from '../components/navigation-bar';
import { LeftSideMenu } from '../components/sidemenu-left';
import { RightSideMenu } from '../components/sidemenu-right';

const LayoutController = {
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
         <div
            class={{
               'max-w-8xl h-full mx-auto': true,
               'bg-white dark:bg-gray-800': true,
               'dark:bg-gradient-to-tr dark:from-slate-900 dark:to-slate-800': true,
               'bg-gradient-to-tr from-white to-blue-200': true,
               'text-black dark:text-white': true,
               'transition-colors': true,
            }}
         >
            <NavigationBar />
            <div class="flex flex-row justify-between pt-2">
               <LeftSideMenu />
               <div className="center-container w-full p-2">{children}</div>
               <RightSideMenu />
            </div>
            <div></div>
         </div>
      </div>
   </cx>
);
