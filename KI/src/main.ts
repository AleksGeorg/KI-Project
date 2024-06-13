import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient() // provideHttpClient() anstelle von HttpClientModule
  ]
})
.catch(err => console.error(err));
