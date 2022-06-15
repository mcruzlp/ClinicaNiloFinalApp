import { AuthService } from './auth.service';
import {
  collection,
  collectionData,
  Firestore,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  docData,
} from '@angular/fire/firestore';
import { Doctor } from './../model/doctor';
import { filter, first, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  pathToDoctorUserId = `doctors/${this.auth.getCurrentUser()?.uid}`;
  userEmail = this.auth.getCurrentUser()?.email;

  constructor(public auth: AuthService, private firestore: Firestore) {}

  async addDoctor(doctor: Doctor) {
    try {
      const docRef = await addDoc(
        collection(this.firestore, `doctors`),
        doctor
      );
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  getDoctors(): Observable<Doctor[]> {
    return collectionData(collection(this.firestore, `doctors`), {
      idField: 'doctorId',
    }) as Observable<Doctor[]>;
  }

  getDoctor(id: string): Observable<Doctor> {
    return docData(doc(this.firestore, `doctors/${id}`), {
      idField: 'doctorId',
    }) as Observable<Doctor>;
  }

  getDoctorByUser(): Observable<Doctor[]> {
    return docData(doc(this.firestore, this.pathToDoctorUserId), {
      idField: 'doctorId',
    }) as Observable<Doctor[]>;
  }

  theLostArk = this.getDoctorByUser();

  /* getUserDoctor(): Promise<Doctor> {
    return this.getDoctors().pipe(
      filter((doctor: Doctor) => doctor.dEmail === this.userEmail)
    );
  } */

  userDoctor = this.getDoctors().pipe(
    filter((doctor: any) => doctor.dEmail === this.userEmail)
  );

  async deleteDoctor(id: string) {
    await deleteDoc(doc(this.firestore, `doctors/${id}`));
  }
  async updateDoctor(doctor: Doctor) {
    await setDoc(doc(this.firestore, `doctors/${doctor.doctorId}`), doctor);
  }
}
