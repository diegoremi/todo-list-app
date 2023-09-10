import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { FilterComponent } from './components/filter/filter.component';
import { TableComponent } from './components/table/table.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// ANGULAR MATERIAL
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';

// NGRX
import { StoreModule } from '@ngrx/store';
import * as fromTodos from './store/todo.reducer'
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './store/todo.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { GoogleAuthProvider } from "firebase/auth"
import { environment } from 'environment/environment';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    FilterComponent,
    TableComponent,
    EditDialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSortModule,
    StoreModule.forRoot({ todos: fromTodos.reducer }),
    EffectsModule.forRoot([TodosEffects]),
    StoreDevtoolsModule.instrument(),
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [GoogleAuthProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
