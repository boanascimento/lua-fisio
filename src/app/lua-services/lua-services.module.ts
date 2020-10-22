import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LuaServicesRoutingModule } from './lua-services-routing.module';
import { LuaServicesComponent } from './lua-services.component';

@NgModule({
  declarations: [
    LuaServicesComponent
  ],
  imports: [
    BrowserModule,
    LuaServicesRoutingModule
  ],
  providers: [],
  bootstrap: [LuaServicesComponent]
})
export class LuaServicesModule { }
