import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AddDocumentComponent } from "./add-document/add-document.component";
import { EditDocumentComponent } from "./edit-document/edit-document.component";
import { ListDocumentComponent } from "./list-document/list-document.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DocumentRoutes } from "./document.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DocumentRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AddDocumentComponent,
    EditDocumentComponent,
    ListDocumentComponent,
  ],
})
export class DocumentModule {}
