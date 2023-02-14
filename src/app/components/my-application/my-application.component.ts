import { Component } from '@angular/core';
import { myApplication } from '../my-application.module';

@Component({
  selector: 'app-my-application',
  templateUrl: './my-application.component.html',
  styleUrls: ['./my-application.component.css']
})

export class MyApplicationComponent {
    Applications : myApplication[] = [

      new myApplication('../../../assets/unsplash_DBe29bswzpk.png', 'ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, ['figma', 'Sketch', 'Adobe', 'Illustrator', 'Photoshop', 'Imvision'],
       'Applied 3 days ago'),

       new myApplication('../../../assets/unsplash_DBe29bswzpk.png', 'ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, ['figma', 'Sketch', 'Adobe', 'Illustrator', 'Photoshop', 'Imvision'],
       'Applied 3 days ago'),

      new myApplication('../../../assets/unsplash_DBe29bswzpk.png', 'ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, ['figma', 'Sketch', 'Adobe', 'Illustrator', 'Photoshop', 'Imvision'],
       'Applied 3 days ago'),

       new myApplication('../../../assets/unsplash_DBe29bswzpk.png', 'ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, ['figma', 'Sketch', 'Adobe', 'Illustrator', 'Photoshop', 'Imvision'],
       'Applied 3 days ago'),

       new myApplication('../../../assets/unsplash_DBe29bswzpk.png', 'ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, ['figma', 'Sketch', 'Adobe', 'Illustrator', 'Photoshop', 'Imvision'],
       'Applied 3 days ago'),
    ]
}
