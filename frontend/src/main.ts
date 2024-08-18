import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NCaF1cWWhBYVJxWmFZfVpgdVVMZVxbQXVPMyBoS35RckVrWH9fcHFVQ2NaUUZy');

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
