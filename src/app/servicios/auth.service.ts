import { Injectable, inject } from '@angular/core';
import { Auth, UserCredential, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';

export interface CredencialI {
email:string,
password:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  readonly authState$ = authState(this.auth)


  constructor() { }

 signUpWithEmailAndpassword(credencial:CredencialI): Promise<UserCredential>{
  return createUserWithEmailAndPassword(
    this.auth, 
    credencial.email, 
    credencial.password
  )
 }


logInWithEmailAndPassword(credencial: CredencialI): Promise<UserCredential> {
  return signInWithEmailAndPassword(this.auth, credencial.email, credencial.password);
}

}


