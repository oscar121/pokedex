import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//Routes
import {POKE_ROUNTING} from './app.routes';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

//Services
import { SearchService } from './services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule ,
    POKE_ROUNTING,
    HttpClientModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
