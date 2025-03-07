import { Component } from '@angular/core';
import { FashionAPIService } from '../fashion-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fashion } from '../classes/fashion';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-fashion-update',
  standalone: false,
  templateUrl: './fashion-update.component.html',
  styleUrl: './fashion-update.component.css'
})
export class FashionUpdateComponent {
  public Editor = ClassicEditor
  fashion = new Fashion();
  fashions: any;
  errMessage: string = ''
  constructor(private _service: FashionAPIService, private router: Router, private activateRoute: ActivatedRoute) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.searchFashion(id);
      }
    });
  }
  public setFashion(f: Fashion) {
    this.fashion = f
  }
  searchFashion(Id: string) {
    this._service.getFashion(Id).subscribe({
      next: (data) => {
        this.fashion = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  putFashion() {
    this._service.putFashion(this.fashion).subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err }
    })
    alert('Update fashion success');
    this.goBack();
  }
  goBack() {
    this.router.navigate(['admin-fashion']);
  }
  onFileSelected(event: any, fashion: Fashion) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      fashion.fashion_image = reader.result!.toString();
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
}