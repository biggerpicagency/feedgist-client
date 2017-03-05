import { Injectable } from '@angular/core';

@Injectable()
export class SelectedPagesService {
  pages = [];
  pagesIds = [];

  constructor() { }

  add(page) {
    if (this.pages.indexOf(page) === -1) {
      this.pages.unshift(page);
      page.selected = true;
    }
  }

  remove(page) {
    let pages = this.pages.length;
    for (var i = pages-1; i >= 0; i--) {
      if (this.pages[i].id === page.id) {
        this.pages.splice(i, 1);
        page.selected = false;
      }
    }
  }

  select(page) {
    let index = this.pagesIds.indexOf(page.id);

    if (index > -1) {
      this.pagesIds.splice(index, 1);
      this.remove(page);
    } else {
      this.pagesIds.push(page.id);
      this.add(page);
    }
  }

  init(categories, ids, pages) {
    let categoriesLength = categories.length;
    let pagesIds = [];

    for (var i = categoriesLength-1; i >= 0; i--) {
      if (categories[i].pages.length) {
        let pagesLength = categories[i].pages.length;

        for (var pageI = pagesLength - 1; pageI >= 0; pageI--) {
          let isSelected = ids.indexOf(categories[i].pages[pageI].id) > -1;
          categories[i].pages[pageI].selected = isSelected;

          if (isSelected) {
            this.pages.unshift(categories[i].pages[pageI]);
            pagesIds.push(categories[i].pages[pageI].id);
          }
        }
      }
    }

    if (pages) {
      let pagesLength = pages.length;

      for (var i = pagesLength-1; i >= 0; i--) {
        if (pagesIds.indexOf(pages[i].id) === -1) {
          this.pages.unshift(pages[i]);
        }
      }
    }
  }
}
