import { Component } from './components/component.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { Composable, PageComponent } from './components/page/page.js';

class App {
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent('image', 'https://picsum.photos/600/300');
    this.page.addChild(image);

    const note = new NoteComponent('note title', 'noteeeeee~~~');
    this.page.addChild(note);

    const todo = new TodoComponent('todo title', 'todododo');
    this.page.addChild(todo);

    const video = new VideoComponent(
      'https://www.youtube.com/watch?v=YbLXavSS-iI',
      'stella jang~~'
    );
    this.page.addChild(video);
  }
}

new App(document.querySelector('.document')! as HTMLElement);
