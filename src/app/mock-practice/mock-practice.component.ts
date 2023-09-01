import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { apicall } from '../apicall.service';
import { CHARACTERS } from '../mock-characters';
import { Stage } from '../stage';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-mock-practice',
  templateUrl: './mock-practice.component.html',
  styleUrls: ['./mock-practice.component.css']
})
export class MockPracticeComponent {

}
