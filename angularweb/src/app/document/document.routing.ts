import { Routes } from "@angular/router";

import { AddDocumentComponent } from "./add-document/add-document.component";
import { EditDocumentComponent } from "./edit-document/edit-document.component";
import { ListDocumentComponent } from "./list-document/list-document.component";

export const DocumentRoutes: Routes = [
  { path: "add-document", component: AddDocumentComponent },
  { path: "edit-document/:id", component: EditDocumentComponent },
  { path: "list-document", component: ListDocumentComponent },
];
