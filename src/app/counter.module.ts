import { counterReducer } from './counter/state/counter.reducer';
import { StoreModule } from '@ngrx/store';
import { CounterInputComponent } from './counter/counter-input/counter-input.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterComponent } from './counter/counter/counter.component';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


const routes:Routes = [
    {path : '', component:CounterComponent}
]

@NgModule({
    declarations:[
        CounterComponent,
        CounterOutputComponent,
        CounterButtonsComponent,
        CounterInputComponent,
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('counter',counterReducer), 
        FormsModule]
})

export class CounterModule{

}