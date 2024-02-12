import { Component } from '@angular/core';

@Component({
  selector: 'app-what-ido',
  templateUrl: './what-ido.component.html',
  styleUrls: ['./what-ido.component.scss'],
})
export class WhatIDoComponent {
  public mainTools = [
    {
      name: 'Angular',
      icon: 'angular.svg',
      description: `I specialize in using Angular to create dynamic and responsive  user interfaces. I ensure that every aspect of the web application enhances the user experience. Whether it's creating custom components, optimizing performance,or integrating with backend services, I bring creativity and precision to every project.`,
    },
    {
      name: 'AWS',
      icon: 'aws.svg',
      description:
        'I use AWS Amplify to architect serverless backends for different projects, enabling scalability and cost efficiency. With GraphQL API and DynamoDB, I can design and implement multiple data models and tables, ensuring robustness and flexibility in translating complex business logic into efficient database structures. AWS Cognito helps me to manage multiple pools to set up user authentication processes. Finally Lambda allows me to run Javascript on the backend side to handle business logic functionalities',
    },
    {
      name: 'TypeScript',
      icon: 'typescript.svg',
      description:
        'As a web developer fluent in TypeScript, I bring a level of precision and reliability to my projects. Using typescript I can mix the flexibility of JavaScript with the robustness of static typing, resulting in code that is not only more maintainable but also less prone to errors. ',
    },
    {
      name: 'Jest',
      icon: 'jest.svg',
      description:
        'In my development workflow, I rely on Jest testing framework to ensure the quality and reliability of both front-end and back-end code. In Angular projects, I use Jest to precisely test components and services, validating their functionality and behavior to guarantee a great user experience. Additionally, I  use Jest to test AWS Lambda functions, verifying their accuracy in executing business logic.',
    },
  ];

  public sideTools = [
    {
      icon: '',
    },
    {
      icon: '',
    },
    {
      icon: '',
    },
    {
      icon: '',
    },
    {
      icon: '',
    },
  ];
}
