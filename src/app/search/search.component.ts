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
  noResults:boolean = false;
  
  constructor(private api: ApiService) {
    this.api=api;
  }
  
  ngOnInit(){
  }

  // Enter key detection for searching
  submitResult(e){
    if (e.key === "Enter") {
      document.getElementById('search_btn').click();
    }
  }

  // Search GIF by user query
  searchResult(e,data){
    if(!data || data.search.trim()==""){
      this.err = true;
      this.default_results = false;
      this.noResults = false;
      e.preventDefault();
    }else{
      this.noResults = false;
      this.loader = true;
      this.err = false;
      this.default_results = true;
      // API call to giphy to get gifs
      this.api.getGiphy(data.search).subscribe((res)=>{
          this.res = res;
          this.results=this.res.data;
          this.loader = false;
          if(this.results.length==0){
            this.noResults = true;
          }else{
            this.noResults = false;
          }
      });
    }
  }
}
