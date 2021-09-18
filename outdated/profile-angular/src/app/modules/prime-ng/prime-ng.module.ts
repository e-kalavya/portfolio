import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FieldsetModule } from 'primeng/fieldset';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SliderModule } from 'primeng/slider';

@NgModule({
  imports: [
    CommonModule,
    InputTextareaModule,
    SelectButtonModule,
    FieldsetModule,
    ScrollPanelModule,
    SliderModule
  ],
  exports: [
    InputTextareaModule,
    SelectButtonModule,
    FieldsetModule,
    ScrollPanelModule,
    SliderModule
  ],
  declarations: []
})
export class PrimeNgModule { }
