import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  results;
  urls;
  res;
  err:boolean = false;
  default_results:boolean = false;
  loader:boolean = false;
  
  constructor(private api: ApiService) {
    this.api=api;
  }
  
  ngOnInit(){

  }
  
  searchResult(e,data){
    if(!data || data.search.trim()==""){
      this.err = true;
      this.default_results = false;
      e.preventDefault();
    }else{
      this.loader = true;
      this.err = false;
      this.default_results = true;
      console.log(data.search);
      this.api.getGiphy(data.search).subscribe((res)=>{
          this.res = res;
          console.log(this.res.data);
          this.results=this.res.data;
          this.loader = false;
      });
    }
  }

}
