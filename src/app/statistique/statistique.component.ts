import { Component, OnInit } from '@angular/core';
import {EtudiantService} from '../services/etudiant.service';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  option: typeof Highcharts;
  chartOptions1: Highcharts.Options;
  salaire: typeof Highcharts;
  chartsOptions2: Highcharts.Options;
  constructor(public etudServ: EtudiantService) { }

  ngOnInit() {

    const optionres = [
      {name: 'ICC', y: 0 },
      {name: 'IA', y: 0 },
      {name: 'IMSI', y: 0}
  ];
    const salaireres = [
      {salaire : 0, lieux: 'Toulouse', nb : 0},
      {salaire : 0, lieux: 'pau', nb : 0}
    ];
    const tab = this.etudServ.etudiant;
    for (let i of tab ) {
      if (i.droit==='2') {
        switch (i.option) {
          case 'ICC' :
            optionres[0].y += 1;
            break;
          case 'IA' :
            optionres[1].y += 1;
            break;
          case 'IMSI' :
            optionres[2].y += 1;
            break;
        }
        switch (i.lieux) {
          case 'Toulouse':
            salaireres[0].salaire += i.salaire;
            salaireres[0].nb += 1;
            break;
          case 'pau' :
            salaireres[1].salaire += i.salaire;
            salaireres[1].nb += 1;
            break;
        }
      }
    }
    for (let e of optionres) {
      e.y = (e.y / optionres.length) * 100;
    }
    for (let s of salaireres) {
      s.salaire = s.salaire / s.nb;
    } ;
    console.log(optionres);
    console.log(salaireres);

    this.option = Highcharts;
    this.chartOptions1 = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Repartition des élèves suivant les Options de 3ème année'
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'Pourcentage d\'élève'
        }

      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f} %'
          }
        }
      },

      series: [
        {
          type: 'column',
          name: 'Option',
          data : optionres
      }
      ]
  };

    this.salaire = Highcharts;
    this.chartsOptions2 = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Salaire moyen en fonction de la ville'
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'Salaire moyen (€)'
        }

      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f} €'
          }
        }
      },

      series: [
        {
          type: 'line',
          name: 'Salaire',
          data : salaireres
        }
      ]
    };
  }
}
