import 'reflect-metadata';
import '@src/polyfills';
import { BrowserModule    } from '@angular/platform-browser';
import { NgModule         } from '@angular/core';
import { FormsModule      } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '@modules/app-routing';
import { AppPrimeNGModule } from '@modules/app-primeng';

import { ElectronService  } from '@services/electron';

import { AppComponent       } from '@components/app';
import { HomeComponent      } from '@components/windows/home';
import { ChatComponent      } from '@components/composites/chat';
import { TextInputComponent } from '@components/composites/text-input';


// AoT requires an exported function for factories
// export function HttpLoaderFactory(http: HttpClient) {
//    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ChatComponent,
        TextInputComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        AppPrimeNGModule
        // TranslateModule.forRoot({
        //   loader: {
        //     provide: TranslateLoader,
        //     useFactory: (HttpLoaderFactory),
        //     deps: [HttpClient]
        //   }
        // })
    ],
    providers: [ElectronService],
    bootstrap: [AppComponent]
})
export class AppModule { }
