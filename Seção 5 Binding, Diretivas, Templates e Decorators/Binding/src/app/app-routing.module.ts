import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { PropertyEventsBindingComponent } from './property-events-binding/property-events-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';

const routes: Routes = [
  { path: '', component: PropertyEventsBindingComponent },
  { path: 'attribute-binding', component: AttributeBindingComponent },
  { path: 'style-binding', component: StyleBindingComponent },
  { path: 'class-binding', component: ClassBindingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
