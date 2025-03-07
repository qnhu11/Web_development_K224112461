import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fashion } from '../../classes/fashion';
import { FashionClientApiService } from '../fashion-client-api.service';

@Component({
  selector: 'app-fashion-detail-client',
  standalone: false,
  templateUrl: './fashion-detail-client.component.html',
  styleUrl: './fashion-detail-client.component.css'
})
export class FashionDetailClientComponent {
 fashion = new Fashion() // fashion data to show
  id: string = '' // fashion id
  errMessage: string = ''

  constructor(private _service: FashionClientApiService, private _router: Router, private _activeroute: ActivatedRoute) {
    this._activeroute.params.subscribe(params => {
      this.id = params['id'] //
      if (this.id != null) {
        this.searchFashion(this.id) // get fashionselected
      }
      else {
        window.alert('Invalid fashion id to show')
        this._router.navigate(['fashion-client'])
      }
    })
  }

  searchFashion(fashionId: string) {
    this._service.getFashion(fashionId).subscribe({
      next: (data) => { this.fashion = data },
      error: (err) => { this.errMessage = err },
    })
  }


}
