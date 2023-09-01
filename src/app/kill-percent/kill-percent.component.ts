import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { apicall } from '../apicall.service';
import { CHARACTERS } from '../mock-characters';
import { Stage } from '../stage';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-Kill-percent',
  templateUrl: './kill-percent.component.html',
  styleUrls: ['./kill-percent.component.css']
})
export class KillPercentComponent implements OnInit {
  
  
  // characters = CHARACTERS;
  selectedCharacter?: Character;

  characters: Character[] = [];

  selectedStage?: Stage;

  stages: Stage[] = [];

  killPercent: any ="";
  //figure out how to make this show the number






  
  
  
  constructor(private apicall: apicall) {}


  ngOnInit(): void {
    this.getCharacters();
    this.getStages();
    
  }

getStages(): void{
  this.apicall.getStages()
  .subscribe(stages => this.stages = stages);
}


  getCharacters(): void{
    this.apicall.getCharacters()
    .subscribe(characters => this.characters = characters);
  }

  onCharacterSelect(character: Character): void {
    this.selectedCharacter = character;
  }

  onStageSelect(stage: Stage): void {
    this.selectedStage = stage;
  }

  getKillPercent(): void{


    let nonNullableCharacterName: string = this.selectedCharacter?.CharacterName!;
    let nonNullableStageName: string = this.selectedStage?.StageName!;
    console.log(nonNullableCharacterName)
    console.log(nonNullableStageName)
    
    this.apicall.getKillPercent(nonNullableCharacterName, nonNullableStageName)
    .subscribe(killPercent => {
      console.log("pls work")
      console.log(nonNullableCharacterName, nonNullableStageName)
      
      this.killPercent = killPercent
    
      alert(this.killPercent);
      
      
      console.log(killPercent);
    })

    
    
  }


  // getKillPercent(): void{
  //   if (this.selectedCharacter && this.selectedStage)
  //   {
  //   console.log(this.selectedCharacter?.CharacterName,this.selectedStage?.StageName)
  //   }
  //  else {
  //   window.alert("please select a character and stage")
  //  }
  // }

  
}

