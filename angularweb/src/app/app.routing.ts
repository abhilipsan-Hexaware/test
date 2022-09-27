import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AddDocumentComponent } from "./document/add-document/add-document.component";
import { EditDocumentComponent } from "./document/edit-document/edit-document.component";
import { ListDocumentComponent } from "./document/list-document/list-document.component";
import { AddDocumentComponent } from "./document/add-document/add-document.component";
import { EditDocumentComponent } from "./document/edit-document/edit-document.component";
import { ListDocumentComponent } from "./document/list-document/list-document.component";

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
        { path: 'add-document', component: AddDocumentComponent },
        { path: 'edit-document/:id', component: EditDocumentComponent },
        { path: 'list-document', component: ListDocumentComponent },
        { path: 'add-document', component: AddDocumentComponent },
        { path: 'edit-document/:id', component: EditDocumentComponent },
        { path: 'list-document', component: ListDocumentComponent },
    ]
  }
];
