import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './loans.component.html'
})
export class LoansComponent implements OnInit {
  materials: any[] = [];
  loans: any[] = [];
  selectedMaterial = '';
  borrower = '';

  constructor(private api: ApiService) {}

  ngOnInit() { this.load(); }

  load() {
    this.api.getMaterials().subscribe(r => this.materials = r as any[]);
    this.api.getLoans().subscribe(r => this.loans = r as any[]);
  }

  makeLoan() {
    if (!this.selectedMaterial || !this.borrower.trim()) return;
    this.api.createLoan({ material_id: this.selectedMaterial, borrower_name: this.borrower })
      .subscribe(() => this.load());
  }

  returnLoan(id: number) {
    this.api.returnLoan(id).subscribe(() => this.load());
  }
}
