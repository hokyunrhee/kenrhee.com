import { makeAutoObservable } from 'mobx';

class Theme {
  currentTheme = 'light';

  constructor() {
    makeAutoObservable(this);
  }

  toggleTheme = () => {
    if (this.currentTheme === 'light') {
      this.currentTheme = 'dark';
    } else {
      this.currentTheme = 'light';
    }
  };
}

const themeStore = new Theme();

export default themeStore;
