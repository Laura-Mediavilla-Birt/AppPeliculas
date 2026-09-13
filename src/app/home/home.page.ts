import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonLabel, IonButton, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  ToastController, IonFooter } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Elemento } from 'src/app/models/elemento.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  //TODO añade los componentes de Ionic y FormsModule a imports
  imports: [IonFooter, IonInput, IonHeader, IonToolbar, IonTitle, IonContent, 
    FormsModule, IonInput, IonItem, IonLabel, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardContent
  ],
})
export class HomePage {

  // (Apartado 3 – Two-way Binding): Variable enlazada al campo de búsqueda
  busqueda: string = '';

  // (Apartado 1): Añade al menos 5 elementos a este array
  // Añadimos 5 películas, su nombre, descripción y categoría
  elementos: Elemento[] = [
    {
      id: 1,
      nombre: 'Interestelar',
      descripcion: 'Una película de ciencia ficción sobre el espacio y los viajes interestelares.',
      categoria: 'Ciencia ficción'
    },
    {
      id: 2,
      nombre: 'Titanic',
      descripcion: 'Historia de amor ambientada durante el viaje del famoso transatlántico.',
      categoria: 'Drama'
    },
    {
      id: 3,
      nombre: 'El Rey León',
      descripcion: 'Un joven león debe encontrar su lugar en el ciclo de la vida.',
      categoria: 'Animación'
    },
    {
      id: 4,
      nombre: 'Matrix',
      descripcion: 'Un hacker descubre que la realidad no es lo que parece.',
      categoria: 'Ciencia ficción'
    },
    {
      id: 5,
      nombre: 'Toy Story',
      descripcion: 'Los juguetes cobran vida cuando los humanos no están presentes.',
      categoria: 'Animación'
    }
  ];

  // (Apartado 3 – Property Binding): Devuelve true si hay elementos en la lista
  get hayElementos(): boolean {
  return this.elementos.length > 0;
  }

  // (Apartado 3 – Two-way Binding): Filtra los elementos según this.busqueda
  get elementosFiltrados(): Elemento[] {
    // Implementa el filtro (this.elementos.filter): devuelve solo los elementos cuyo nombre
    // incluya el texto de this.busqueda (ignorando mayúsculas/minúsculas -> .toLowerCase())
    return this.elementos.filter(elemento =>
    elemento.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }

  // Modificar el constructor para inyectar Router y ToastController con inject
  constructor(private router: Router, private toastController: ToastController) {}

  // (Apartado 1 + 3 – Event Binding): Mostrar un ion-toast al pulsar el botón
  async mostrarToast(): Promise<void> {
    // Creamos un Toast con el mensaje, la duración y la posición indicadas.
  const toast = await this.toastController.create({
    message: `Lista de ${this.elementos.length} elementos cargada correctamente`,
    duration: 2000,
    position: 'bottom'
  });

  // Mostramos el Toast en pantalla.
  await toast.present();
  }

}
