import { Component } from '@angular/core';
import { myApplication } from '../../Models/my-application.module';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  Applications : myApplication[] = [

    new myApplication('../../../assets/unsplash_DBe29bswzpk.png', 'ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, ['figma', 'Sketch', 'Adobe', 'Illustrator', 'Photoshop', 'Imvision'],
     'Posted 8 hours ago'),

     new myApplication('../../../assets/unsplash_DBe29bswzpk.png', 'ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, ['figma', 'Sketch', 'Adobe', 'Illustrator', 'Photoshop', 'Imvision'],
     'Posted 8 hours ago'),

    new myApplication('../../../assets/unsplash_DBe29bswzpk.png', 'ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, ['figma', 'Sketch', 'Adobe', 'Illustrator', 'Photoshop', 'Imvision'],
     'Posted 8 hours ago'),

     new myApplication('../../../assets/unsplash_DBe29bswzpk.png', 'ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, ['figma', 'Sketch', 'Adobe', 'Illustrator', 'Photoshop', 'Imvision'],
     'Posted 8 hours ago'),

     new myApplication('../../../assets/unsplash_DBe29bswzpk.png', 'ABC Company', 'Senior Level Product Designer', 'United Arab Emirates', 1000000, ['figma', 'Sketch', 'Adobe', 'Illustrator', 'Photoshop', 'Imvision'],
     'Posted 8 hours ago'),
  ]
}
