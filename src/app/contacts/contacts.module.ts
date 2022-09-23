import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { DeleteComponentComponent } from './delete-component/delete-component.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { ViewComponentComponent } from './view-component/view-component.component';



@NgModule({
  declarations: [
    AddContactComponent,
    EditContactComponent,
    EditComponentComponent,
    DeleteComponentComponent,
    ListComponentComponent,
    ViewComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }
