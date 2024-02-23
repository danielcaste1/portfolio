import { Component } from '@angular/core';

interface Company {
  logo: string;
  url: string;
}

@Component({
  selector: 'companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent {
  public companies: Company[] = [
    {
      logo: 'terrenta.svg',
      url: 'https://www.terrenta.co',
    },
  ];

  public visitCompany(url: string) {
    window.open(url, '_blank');
  }
}
