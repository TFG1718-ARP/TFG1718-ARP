import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var Highcharts: any;

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.css'],
})
export class HighchartsComponent implements OnInit {
  port = window.location.port;
  baseURL = this.getUrl();
  public getUrl(): string {
    if (this.port == '4200') {
      this.baseURL = 'http://localhost:8080/api/v1/spain-births';
    } else {
      this.baseURL = '../api/v1/spain-births';
    }
    return this.baseURL;
  }

  constructor(public http: HttpClient) { }

  ngOnInit() {
    console.log("Highcharts initialized");
    this.http.get(this.baseURL)
    .subscribe(
    data => {
      var dataFromServer = data;
      var dataForWidget = [];
      //Tranformación
      for (var i = 0; i < Object.keys(dataFromServer).length; i++) {
          var item = dataFromServer[i];
          //console.log(item);
          var itemForWidget = [item.region, item.totalbirth];
          dataForWidget.push(itemForWidget);
      }
      Highcharts.chart('container', {
          chart: {
              type: 'column'
          },
          title: {
              text: 'Spain births'
          },
          subtitle: {
              text: 'Source: <a href="http://pestadistico.inteligenciadegestion.msssi.es/publicoSNS/comun/Cubo.aspx?IdNodo=6422#no-back-button">Portal Estadístico</a>'
          },
          xAxis: {
              type: 'category',
              labels: {
                  rotation: -45,
                  style: {
                      fontSize: '13px',
                      fontFamily: 'Verdana, sans-serif'
                  }
              }
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Total births'
              }
          },
          legend: {
              enabled: false
          },
          tooltip: {
              pointFormat: 'Total births: <b>{point.y:.1f}</b>'
          },
          series: [{
              name: 'Total births',
              data: dataForWidget,
              dataLabels: {
                  enabled: true,
                  rotation: -90,
                  color: '#FFFFFF',
                  align: 'right',
                  format: '{point.y:.1f}', // one decimal
                  y: 10, // 10 pixels down from the top
                  style: {
                      fontSize: '13px',
                      fontFamily: 'Verdana, sans-serif'
                  }
              }
          }]
      });


    });

  }

}
