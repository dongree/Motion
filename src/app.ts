import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { PageComponent } from './components/page/page.js';

class App {
  private readonly page: PageComponent;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
    const image = new ImageComponent('image', 'https://picsum.photos/600/300');
    image.attachTo(appRoot, 'beforeend');
    const note = new NoteComponent('note title', 'noteeeeee~~~');
    note.attachTo(appRoot, 'beforeend');
    const todo = new TodoComponent('todo title', 'todododo');
    todo.attachTo(appRoot, 'beforeend');
  }
}

new App(document.querySelector('.document')! as HTMLElement);
