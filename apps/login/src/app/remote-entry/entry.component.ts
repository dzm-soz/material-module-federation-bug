import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInput} from "@angular/material/input";
import {MatFormField, MatLabel} from "@angular/material/form-field";

@Component({
  imports: [CommonModule, MatTableModule, MatInput, MatFormField, MatLabel],
  selector: 'ng-mf-login-entry',
  templateUrl: './entry.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoteEntryComponent {
  protected readonly displayedColumns = signal(['position', 'name', 'weight', 'symbol']);
  protected readonly dataSource = signal([
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  ]);
}
