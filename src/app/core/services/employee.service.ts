import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  docData,
  updateDoc,
  deleteDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Employee } from '../../features/employees/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private collectionName = 'employees';

  constructor(private firestore: Firestore) {}

  // GET ALL
  getAll(): Observable<Employee[]> {
    const ref = collection(this.firestore, this.collectionName);
    return collectionData(ref, { idField: 'id' }) as Observable<Employee[]>;
  }

  // GET BY ID (FIX FOR EDIT)
  getById(id: string): Observable<Employee> {
    const ref = doc(this.firestore, `${this.collectionName}/${id}`);
    return docData(ref, { idField: 'id' }) as Observable<Employee>;
  }

  // ADD
  add(emp: Employee) {
    const ref = collection(this.firestore, this.collectionName);
    return addDoc(ref, emp);
  }

  // UPDATE
  update(emp: Employee) {
    const ref = doc(this.firestore, `${this.collectionName}/${emp.id}`);
    return updateDoc(ref, { ...emp });
  }

  // DELETE
  delete(id: string) {
    const ref = doc(this.firestore, `${this.collectionName}/${id}`);
    return deleteDoc(ref);
  }
}