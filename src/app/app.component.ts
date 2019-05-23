import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-td';
  

posts=[
  {
    title: "Mon premier post",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a turpis velit. Duis posuere condimentum vestibulum. Phasellus molestie ornare dapibus. Sed quam sem, consequat eu lacinia sit amet, lacinia vitae ligula. Fusce dictum quam non sem imperdiet vulputate nec non ipsum. Morbi lectus felis, vestibulum quis nisl id, fringilla facilisis sapien. Sed rhoncus tempor ultricies. Fusce porta pulvinar dolor, eu dapibus metus mollis sit amet.",
    loveIts: 1,
    created_at: Date
  },
  {
    title: "Mon deuxième post",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a turpis velit. Duis posuere condimentum vestibulum. Phasellus molestie ornare dapibus. Sed quam sem, consequat eu lacinia sit amet, lacinia vitae ligula. Fusce dictum quam non sem imperdiet vulputate nec non ipsum. Morbi lectus felis, vestibulum quis nisl id, fringilla facilisis sapien. Sed rhoncus tempor ultricies. Fusce porta pulvinar dolor, eu dapibus metus mollis sit amet.",
    loveIts: -1,
    created_at: Date
  },
  {
    title: "Mon troisième post",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a turpis velit. Duis posuere condimentum vestibulum. Phasellus molestie ornare dapibus. Sed quam sem, consequat eu lacinia sit amet, lacinia vitae ligula. Fusce dictum quam non sem imperdiet vulputate nec non ipsum. Morbi lectus felis, vestibulum quis nisl id, fringilla facilisis sapien. Sed rhoncus tempor ultricies. Fusce porta pulvinar dolor, eu dapibus metus mollis sit amet.",
    loveIts: 0,
    created_at: Date
  }
]

}