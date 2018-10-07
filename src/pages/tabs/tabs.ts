import { Component } from '@angular/core';

import { UserFeedPage } from '../userFeed/userFeed';
import { SearchPage } from '../search/search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = UserFeedPage;
  tab2Root = SearchPage;


  constructor() {

  }
}
