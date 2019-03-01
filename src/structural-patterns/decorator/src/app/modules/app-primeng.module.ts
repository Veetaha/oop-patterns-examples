import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button'
import { NgModule } from '@angular/core';

@NgModule({ 
    exports: [
        EditorModule,
        ButtonModule
    ]
})
export class AppPrimeNGModule {

}