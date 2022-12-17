// obrigatórias para o router funcionar
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmitterComponent } from "./components/emitter/emitter.component";
import { EventsComponent } from "./components/events/events.component";

//importadas automaticamente ao declarar a const do bloco abaixo
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { PipesComponent } from "./components/pipes/pipes.component";
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component";

const routes: Routes = [
    {path: 'first', component: FirstComponentComponent},
    {path: 'if-render', component: IfRenderComponent},
    {path: 'events', component: EventsComponent},
    {path: 'emitter', component: EmitterComponent},
    {path: 'list-render', component: ListRenderComponent},
    {path: 'pipes', component: PipesComponent},
    {path: 'binding', component: TwoWayBindingComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],    //indica que as rotas começam do root (do site)
    exports: [RouterModule],
}) export class AppRoutingModule {} //exportação da classe contendo minhas rotas