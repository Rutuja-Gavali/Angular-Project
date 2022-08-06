import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/';

import { Project } from './project.model';
import { Book } from '../shared/Book.model';
import { BookShoppingListService } from '../book-list/bookshopping-list.service';

@Injectable()
export class ProjectService 
{
  projectChanged = new Subject<Project[]>();

  private projects: Project[] = [
    new Project(
      'Virtual File System',
      'This project Simulate Linux File System on any platform. We implement all file subsystems system calls and its coresponding data structures.',
      'https://i2.wp.com/catchhow.com/wp-content/uploads/2017/05/file-system.png?resize=640%2C313&ssl=1',
      [
        new Book('UNIX Internals - Bach',430),
        new Book('UNIX Internals - Bach',430)
      ]),

    new Project(
      'Institute Automation System',
      'We automate every administartive process of institute using this project. We implement web based application of this purpose. We use PHP for server side technology and we use html and css to design the frontend. We store the data on server side by using mysql.',
      'data:image/jpeg;base64,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',
      [
        new Book('Learning PHP', 870)
      ]),

      new Project(
        'Character Device Driver',
        'This device driver implements all functionality of devices. In this device driver we consider virtual device for testing purpose. We implement our own open,close,read, write system call. This device driver works onLinux operating system',
        'https://c1.staticflickr.com/8/7289/26775594584_d2fe7483f9_c.jpg',
        [
          new Book('Linux Kernel Module Programming Guide - Salzmen', 560),
          new Book('Linux Device Driver - Robert Love', 720)
        ]),

        new Project(
          'Cliboard Manager',
          'As clipboard is used for communication between the applications. We design Windows application which recevies message when there is any change in clipboard. We accept that message and display that data on editor. As well as we preserve the data in file for administrative purpose.',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQulOq6lK9GTBuJOeeayKYr9P6WkSjm6wFtv3WnfI7MssnuSZLy',
          [
            new Book('Windows Application Programming Soloman', 1200),
            new Book('Windows Internals', 820)
          ]),

          new Project(
            'ProcMon - Process Monitoring Tool',
            'This project maintains record of each running process in RAM. We maintain process name, number of threads,its size,attahed DLL to the process. We  aintain per day log of this inpformation which can be used for analytical purpose.',
            'https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2016/06/proclist-7.png?resize=600%2C360&quality=100&ssl=1',
            [
              new Book('Process Subsystems Guide', 320)
            ]),

            new Project(
              'Registry Editor',
              'In windows every application saves its important settings in Clipboard. Clipboard is considered as Operating systems database. NBy using our project we can add , remove or update any registry entry.',
              'data:image/png;base64,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',
              [
                new Book('Meat', 1),
                new Book('French Fries', 20)
              ])
  ];

  constructor(private slService:BookShoppingListService) 
  {}

  // Functionality provided by service

  getProjects() 
  {
    return this.projects.slice();
  }

  getProject(index: number) {
    return this.projects[index];
  }

  addBooksToShoppingList(Books: Book[]) 
  {
    this.slService.addBooks(Books);
  }

  addProject(recipe: Project) 
  {
    this.projects.push(recipe);
    this.projectChanged.next(this.projects.slice());
  }

  updateProject(index: number, newRecipe: Project) 
  {
    this.projects[index] = newRecipe;
    this.projectChanged.next(this.projects.slice());
  }

  deleteProject(index: number) 
  {
    this.projects.splice(index, 1);
    this.projectChanged.next(this.projects.slice());
  }
}
