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
      routerLink: ['/appnts'],
    },
    {
      label: 'Pacientes',
      icon: 'pi pi-fw pi-users',
      routerLink: ['/patients'],
    },
    /* {
      label: 'Facturas',
      icon: 'pi pi-fw pi-euro',
      routerLink: ['/bills'],
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
          routerLink: ['/welcome'],
          command: () => {
            this.authService.logout();
          },
          icon: 'pi pi-power-off',
        },
      ],
    },
  ];

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {}
}
