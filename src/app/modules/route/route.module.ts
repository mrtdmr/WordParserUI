import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocumentComponent } from '../../components/document/document.component';

const routes: Routes = [
    { path: '', component: DocumentComponent },
    { path: 'document/:process', component: DocumentComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RouteModule { }