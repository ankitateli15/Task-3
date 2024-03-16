import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AccordionModule } from 'primeng/accordion';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [AppComponent,
       

        
   
        
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        AccordionModule,
        BrowserAnimationsModule,
        FormsModule

     

    
      
     
        
        
    ],
    providers: [
       
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    
}