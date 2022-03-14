import { ContentResolver } from 'cx/ui';
import { DocumentTitle } from 'cx/widgets';
import { DocumentationLayout } from '../layout/DocumentationLayout';

export default () => (
   <cx>
      <DocumentationLayout></DocumentationLayout>
      {/* <RedirectRoute route="~/" redirect="~/dashboard" url-bind="url" />

      <CheckerLayout>
         <SandboxedRoute route="~/">
            <HomePage />
         </SandboxedRoute>
         <SandboxedRoute route="~/dashboard">
               <Dashboard />
            </SandboxedRoute>
            <Route route="~/customers" url-bind="url" prefix>
               <PageNotImplemented />
            </Route>
            <Route route="~/settings" url-bind="url" prefix>
               <PageNotImplemented />
            </Route>
            <Route route="~/users" url-bind="url" prefix>
               <PageNotImplemented />
            </Route>
            {InvoiceRoutes}
            <Route route="~/widgets" url-bind="url" prefix>
               <Widgets />
            </Route>
            <Route route="~/about" url-bind="url">
               <About />
            </Route>
      </CheckerLayout> */}

      <ContentResolver
         params={1}
         onResolve={() => import(/* webpackChunkName: "overlays" */ '../overlays').then((x) => x.default)}
      />
      <DocumentTitle append text="Demo App" separator=" | " />
   </cx>
);
