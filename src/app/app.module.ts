import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasComponent } from './categorias/categorias.component';
import { FuentesComponent } from './fuentes/fuentes.component';
import { MemoriasComponent } from './memorias/memorias.component';
import { ProcesadoresComponent } from './procesadores/procesadores.component';
import { MotherboardComponent } from './motherboard/motherboard.component';
import { GpuComponent } from './gpu/gpu.component';
import { GabosComponent } from './gabos/gabos.component';
import { OchentaplusComponent } from './ochentaplus/ochentaplus.component';
import { OchentaplusBronzeComponent } from './ochentaplus-bronze/ochentaplus-bronze.component';
import { OchentaplusSilverComponent } from './ochentaplus-silver/ochentaplus-silver.component';
import { OchentaplusGoldComponent } from './ochentaplus-gold/ochentaplus-gold.component';
import { GpuintelComponent } from './gpuintel/gpuintel.component';
import { GpuamdComponent } from './gpuamd/gpuamd.component';
import { ProcesadoresIntelComponent } from './procesadores-intel/procesadores-intel.component';
import { ProcesadoresAmdComponent } from './procesadores-amd/procesadores-amd.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    FuentesComponent,
    MemoriasComponent,
    ProcesadoresComponent,
    MotherboardComponent,
    GpuComponent,
    GabosComponent,
    OchentaplusComponent,
    OchentaplusBronzeComponent,
    OchentaplusSilverComponent,
    OchentaplusGoldComponent,
    GpuintelComponent,
    GpuamdComponent,
    ProcesadoresIntelComponent,
    ProcesadoresAmdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
