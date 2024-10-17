import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendarDays, faChartSimple, faFileCirclePlus, faUser, faCoins } from '@fortawesome/free-solid-svg-icons';
import { WeeklysalesComponent } from '../../components/dashboard/weeklysales/weeklysales.component';
import { SalechartComponent } from '../../components/dashboard/salechart/salechart.component';
import { ProfilechartComponent } from '../../components/dashboard/profilechart/profilechart.component';
import { ProductclassComponent } from '../../components/dashboard/productclass/productclass.component';
import { CustomersatisfactionComponent } from '../../components/dashboard/customersatisfaction/customersatisfaction.component';
import { RecentordersComponent } from '../../components/dashboard/recentorders/recentorders.component';
import { SaletargetComponent } from '../../components/dashboard/saletarget/saletarget.component';
import { totalTypes, weeklySaleTypes } from '../../models/type';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FontAwesomeModule, WeeklysalesComponent, SalechartComponent, 
    ProfilechartComponent,ProductclassComponent,CustomersatisfactionComponent,
  RecentordersComponent,SaletargetComponent, CurrencyPipe],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit{
  faCalendarDays=faCalendarDays; 
  faChartSimple=faChartSimple;
  faFileCirclePlus=faFileCirclePlus;
  faUser=faUser;
  faCoins=faCoins;

  totalLists: totalTypes;
  weeklySales: weeklySaleTypes;

  constructor() {
    this.totalLists = {
      totalSales: 0,
      totalSalePercents: '',
      totalOrders: 0,
      totalOrderPercents: '',
      totalCustomers: 0,
      totalCustomerPercents: '',
      totalEarnings: 0,
      totalEarningsPercents: ''
    };

    this.weeklySales = {
      monday: 0,
      tuesday: 0,
      wednesday: 0,
      thursday: 0,
      friday: 0,
      saturday: 0
    }
  }

  ngOnInit() {
    this.callApiForTotatLists();
    this.callApiForWeeklySales();
  }


  callApiForTotatLists() {

    //call api here to get the data

    this.totalLists = {
      totalSales: 4570.45,
      totalSalePercents: '+13',
      totalOrders: 120,
      totalOrderPercents: '+10',
      totalCustomers: 75,
      totalCustomerPercents: '+7',
      totalEarnings: 20100.10,
      totalEarningsPercents: '+5'
    };
  }


  callApiForWeeklySales() {
    //call api here to get the data for weekly Sales and weekly sale component will use the data

    this.weeklySales = {
      monday: 13,
      tuesday: 15,
      wednesday: 19,
      thursday: 12,
      friday: 9,
      saturday: 18
    };
  }
}
