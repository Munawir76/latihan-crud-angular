import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

const routes : Routes =[
    // {
    //     path: '', 
    //     redirectTo: 'admin',
    //     pathMatch: "full"
        
    // },
    {
        path: 'admin', component: DashboardComponent
    },
    {
        path: 'home', component: HomeComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers:[]
})

export class AppRoutingModule{}