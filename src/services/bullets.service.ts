import { Injectable } from '@angular/core';

@Injectable()
export class BulletsService {
    bullets = [
        {
          id: 1, 
          title: `minigun bullet 1`,
          description: 'A bullet'
        },
        {
          id: 2, 
          title: `minigun bullet 2`,
          description: 'A bullet'
        },
        {
          id: 3, 
          title: `minigun bullet 3`,
          description: 'A bullet'
        }
      ];

    public getBullets() {
        return this.bullets;
    }
}