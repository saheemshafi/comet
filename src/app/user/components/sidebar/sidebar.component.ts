import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Category } from 'src/app/interfaces/category';
import { CategoryInfoService } from 'src/app/services/category-info.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  categories: Category[] = [];
  constructor(
    private categoryService: CategoryInfoService,
    public sidebarService: SidebarService,
  ) {}

  ngOnInit(): void {
      this.categoryService.getCategories().subscribe((categories) => {
        this.categories = categories;
      });
    }
  }
