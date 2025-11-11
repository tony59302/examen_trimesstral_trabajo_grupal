import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-materials',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './materials.component.html'
})
export class MaterialsComponent implements OnInit {
  materials: any[] = [];
  newMaterial = { name: '', quantity: 1 };

  constructor(private api: ApiService) {}

  ngOnInit() { this.load(); }

  load() { this.api.getMaterials().subscribe(r => this.materials = r as any[]); }

  add() {
    if (!this.newMaterial.name.trim()) return;
    this.api.addMaterial(this.newMaterial).subscribe(() => {
      this.newMaterial = { name: '', quantity: 1 };
      this.load();
    });
  }
}
