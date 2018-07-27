import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { GabosComponent } from './gabos/gabos.component';
import { FuentesComponent } from './fuentes/fuentes.component';
import { GpuComponent } from './gpu/gpu.component';
import { MemoriasComponent } from './memorias/memorias.component';
import { MotherboardComponent } from './motherboard/motherboard.component';
import { ProcesadoresComponent } from './procesadores/procesadores.component';
import { OchentaplusComponent } from './ochentaplus/ochentaplus.component';
import { OchentaplusBronzeComponent } from './ochentaplus-bronze/ochentaplus-bronze.component';
import { OchentaplusSilverComponent } from './ochentaplus-silver/ochentaplus-silver.component';
import { OchentaplusGoldComponent } from './ochentaplus-gold/ochentaplus-gold.component';
import { GpuintelComponent } from './gpuintel/gpuintel.component';
import { GpuamdComponent } from './gpuamd/gpuamd.component';
import { ProcesadoresIntelComponent } from './procesadores-intel/procesadores-intel.component';
import { ProcesadoresAmdComponent } from './procesadores-amd/procesadores-amd.component';

const routes: Routes = [
  {path: "", component: CategoriasComponent},
  {
    path: "categorias", component: CategoriasComponent,
    children: [
      {path: "gabos", component: GabosComponent},
      //Rutas anidadas para fuentes de poder
      {path: "fuentes", component: FuentesComponent,
      children: [
        {path: "ochentaplus", component: OchentaplusComponent},
        {path: "ochentaplus-bronze", component: OchentaplusBronzeComponent},
        {path: "ochentaplussilver", component: OchentaplusSilverComponent},
        {path: "ochentaplusgold", component: OchentaplusGoldComponent}
      ]},
      //Rutas anidadas en gpus
      {path: "gpu", component: GpuComponent, 
      children: [
        {path: "gpuIntel", component: GpuintelComponent},
        {path: "gpuAmd", component: GpuamdComponent}
      ]},

      {path: "memorias", component: MemoriasComponent},
      {path: "motherboard", component: MotherboardComponent},
      //Rutas anidadas en procesadores
      {path: "procesadores", component: ProcesadoresComponent,
      children:[
        {path: "procesadoresIntel", component: ProcesadoresIntelComponent},
        {path: "procesadoresAmd", component: ProcesadoresAmdComponent}
      ]}      
    ]
  }, 
  {path: "**", component: CategoriasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
