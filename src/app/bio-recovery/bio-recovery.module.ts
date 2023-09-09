import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioRecoveryComponent } from './bio-recovery.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [BioRecoveryComponent],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class BioRecoveryModule { }
