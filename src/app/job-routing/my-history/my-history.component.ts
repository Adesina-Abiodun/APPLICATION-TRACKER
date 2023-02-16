import { Component } from '@angular/core';
import { myApplication } from '../my-application/my-application.module';

@Component({
  selector: 'app-my-history',
  templateUrl: './my-history.component.html',
  styleUrls: ['./my-history.component.css']
})
export class MyHistoryComponent {
  Applications : myApplication[] = [

    new myApplication('../../../assets/unsplash_DBe29bswzpk.png', 'ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, ['figma', 'Sketch', 'Adobe', 'Illustrator', 'Photoshop', 'Imvision'],
     'Applied 25 days ago'),

     new myApplication('../../../assets/unsplash_DBe29bswzpk.png', 'ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, ['figma', 'Sketch', 'Adobe', 'Illustrator', 'Photoshop', 'Imvision'],
     'Applied 25 days ago'),

    new myApplication('../../../assets/unsplash_DBe29bswzpk.png', 'ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, ['figma', 'Sketch', 'Adobe', 'Illustrator', 'Photoshop', 'Imvision'],
     'Applied 25 days ago'),

     new myApplication('../../../assets/unsplash_DBe29bswzpk.png', 'ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, ['figma', 'Sketch', 'Adobe', 'Illustrator', 'Photoshop', 'Imvision'],
     'Applied 25 days ago'),

     new myApplication('../../../assets/unsplash_DBe29bswzpk.png', 'ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, ['figma', 'Sketch', 'Adobe', 'Illustrator', 'Photoshop', 'Imvision'],
     'Applied 25 days ago'),
  ]
}
