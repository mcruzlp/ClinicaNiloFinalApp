import { AuthService } from './auth.service';
import {
  collection,
  collectionData,
  Firestore,
  addDoc,
  deleteDoc,
  doc,
  docData,
  setDoc,
  updateDoc,
  query,
  where,
  getDocs,
  getDoc,
  onSnapshot,
} from '@angular/fire/firestore';
import { Doctor } from './../model/doctor';
import { filter, first, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  userEmail: any = this.auth.getCurrentUser()?.email;
  /*
  Intento de query


  doctorsRef = collection(this.firestore, `doctors`);
  qDoctor = query(this.doctorsRef, where(`dEmail`, `==`, this.userEmail));
  userDoctor = getDoc(this.qDoctor); */

  /*
  Otra opción es obtener las actualizaciones en tiempo real
  */

  constructor(public auth: AuthService, private firestore: Firestore) {
    /* this.unsub = onSnapshot(
      doc(collection(this.firestore, `doctors`), this.userEmail),
      (doc) => {
        console.log('Current data: ', doc.data());
        console.log(this.userEmail);
      }
    ); */
  }

  async addDoctor(doctor: Doctor) {
    try {
      const docRef = await addDoc(
        collection(this.firestore, `doctors`),
        doctor
      );
      await updateDoc(docRef, {
        doctorId: docRef.id,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  getDoctors(): Observable<Doctor[]> {
    console.log(this.userEmail);
    return collectionData(collection(this.firestore, `doctors`), {
      idField: 'doctorId',
    }) as Observable<Doctor[]>;
  }

  getDoctor(id: string): Observable<Doctor> {
    return docData(doc(this.firestore, `doctors/${id}`), {
      idField: 'doctorId',
    }) as Observable<Doctor>;
  }

  async updateDoctor(doctor: Doctor) {
    await setDoc(doc(this.firestore, `doctors/${doctor.doctorId}`), doctor);
  }

  async deleteDoctor(id: string) {
    await deleteDoc(doc(this.firestore, `doctors/${id}`));
  }
}
