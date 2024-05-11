import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-threejs-test',
  standalone: true,
  imports: [],
  templateUrl: './threejs-test.component.html',
  styleUrl: './threejs-test.component.scss',
  providers: [
    { provide: Window, useValue: window }
  ]
})
export class ThreejsTestComponent implements AfterViewInit{
  title = 'bike_3js';
  constructor(private window: Window) {} 
  ngAfterViewInit(): void {
    const width = window.innerWidth, height = window.innerHeight;

    // init

    const camera = new THREE.PerspectiveCamera( 70, width / height, 0.1, 1000 );
    camera.position.z = 30; //move along z axis as without this, cam is positioned in middle of the screen

    const scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry( 20, 20, 20 ); //our shape in threejs
    const material = new THREE.MeshNormalMaterial(); //wrapping paper for geometry

    const mesh = new THREE.Mesh( geometry, material ); //combine geometry to material
    scene.add( mesh ); //add to the scene

    const renderer = new THREE.WebGLRenderer( { antialias: true } ); //render actual graphics to scene
    renderer.setSize( width, height ); //full screen canvas 
    renderer.setAnimationLoop( animation );
    document.body.appendChild( renderer.domElement );

    // animation

    function animation( time: number ) {

      mesh.rotation.x = time / 2000;
      mesh.rotation.y = time / 1000;

      renderer.render( scene, camera ); //render the scene and camera

    }

  }

}
