import { Store } from 'cx/data';
import { enableCultureSensitiveFormatting, History, startHotAppLoop, Widget } from 'cx/ui';
import { Debug, Timing } from 'cx/util';
import './data/mock-api-service-worker';
//app loop
import Routes from './routes';

enableCultureSensitiveFormatting();

//store
const store = new Store();

//Remove in the latter stage of the project
window.store = store;

//routing
//Url.setBaseFromScript("app*.js");
History.connect(store, 'url');

//debug
Widget.resetCounter();
Timing.enable('app-loop');
Debug.enable('app-data');

startHotAppLoop(module, document.getElementById('app'), store, Routes);
