import { computable } from 'cx/ui';
import { TextField } from 'cx/widgets';

export const LeftSideMenu = () => (
   <cx>
      <div className="left-container px-2 lg:border-r lg:border-slate-900/10 dark:border-slate-50/[0.06]">
         <TextField
            icon="search"
            placeholder="Search"
            inputClass="bg-white dark:bg-slate-500 rounded border-1 border-gray-200 dark:border-gray-900"
         />
      </div>
   </cx>
);
