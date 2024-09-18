import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Corrigido: Importar Router, não Route
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  id: string = '';
  senha: string = '';

  constructor(private apiService: ApiService, private router: Router) { }

  irParaRecibos() {
    const idNumber = Number(this.id); // Converte o ID para número
    this.apiService.verifyUser(idNumber, this.senha).subscribe(isValid => {
      console.log('Resultado da verificação:', isValid); // Adicione este log
      if (isValid) {
        this.router.navigate(['/recibos']); // Navega para a página de recibos
      } else {
        alert('ID ou senha inválidos'); // Mostra um alerta em vez de um erro no console
      }
    }, error => {
      console.error('Erro na verificação do usuário:', error);
    });
  }
}

