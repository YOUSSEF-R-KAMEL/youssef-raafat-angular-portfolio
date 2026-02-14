import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

@Component({
  selector: 'app-vanta-bg',
  templateUrl: './vanta-bg.component.html',
  styleUrls: ['./vanta-bg.component.scss']
})
export class VantaBgComponent implements OnInit, OnDestroy {

  @ViewChild('vantaRef', { static: true }) vantaRef!: ElementRef;
  vantaEffect: any;

  ngOnInit(): void {
    this.initVanta();
  }

  initVanta() {
    this.vantaEffect = NET({
      el: this.vantaRef.nativeElement,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: window.innerHeight,
      minWidth: window.innerWidth,
      scale: 1.5,
      scaleMobile: 2,
      color: 0x2724d4,
      maxDistance: 0
    });
  }

  ngOnDestroy(): void {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
}
