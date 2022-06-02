import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  items: MenuItem[] = [
    {
      label: 'Citas',
      icon: 'pi pi-fw pi-calendar',
      command: () => {
        this.goToAppnts();
      },
    },
    {
      label: 'Pacientes',
      icon: 'pi pi-fw pi-pencil',
      command: () => {
        this.goToPatients();
      },
    },
    /* {
      label: 'Facturas',
      icon: 'pi pi-fw pi-euro',
      command: () => {
        this.goToBills();
      },
    }, */
    {
      label: 'Configuración',
      icon: 'pi pi-fw pi-cog',
      items: [
        {
          label: 'Perfil',
          routerLink: ['/profile'],
          icon: 'pi pi-user',
        },
        { separator: true },
        {
          label: 'Cerrar sesión',
          command: () => {
            this.logout();
          },
          icon: 'pi pi-power-off',
        },
      ],
    },
  ];

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {}

  goToAppnts() {}

  goToPatients() {}

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/welcome');
  }
}
