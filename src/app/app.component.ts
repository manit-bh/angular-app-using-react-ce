import { Component } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from '../app/react/src/App.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<div [id]="rootId"></div>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'splunk-ng';

  ngAfterViewInit() {
    // this.loadScripts()
  }

  rootId = 'rootId';

  loadScripts() {
    // const divElement = document.createElement('div');
    // divElement.id = 'root';
    // console.log(document.getElementsByTagName('app-root')[0])
    // document.getElementsByTagName('app-root')[0].appendChild(divElement);
    // const customElement = document.createElement('test-app');
    // if(document.getElementsByTagName('app-root')[0].children.length) {
    //   document.getElementsByTagName('app-root')[0].children[0].appendChild(customElement);
    // }
    // document.getElementsByTagName('app-root')[0].getElementById('root').appendChild(customElement);
    const dynamicScripts = [
      // 'http://localhost:3000/static/js/5.bdc0e695.chunk.js',
      'assets/build/static/js/2.7a251538.chunk.js',
      'assets/build/static/js/main.bd08684f.chunk.js',
      'assets/build/static/js/runtime~main.9d872232.js'
      // 'assets/build/static/js/runtime~main.9d872232.js',
      // 'assets/build/static/js/2.7a251538.chunk.js',
      // 'assets/build/static/js/precache-manifest.18e477e273a3a7a7afebf23814b71f30.js'
      // 'assets/build/custom-script.js',
      // '../../../src/App.js'
      // 'http://localhost:3000/static/js/main.f660a71f.chunk.js',
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'application/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('body')[0].appendChild(node);
    }
  }
}
