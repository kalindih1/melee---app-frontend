import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Character } from './character';
import { CHARACTERS } from './mock-characters'
import { Stage } from './stage';
import { STAGES } from './mock-stages';

@Injectable({
  providedIn: 'root'
})
export class apicall {

  constructor(private http:HttpClient) { }
  private localHostNumber = 44369;
  private baseUri: string = `https://localhost:${this.localHostNumber}/Home/GetKillPercent`
  //https://localhost:44369/Home/GetKillPercent?MeleeCharacter=Sheik&MeleeStage=Battlefield


  getCharacters() :Observable<Character[]> {
    const characters = of (CHARACTERS);
    return characters;
  
  }

  getStages() :Observable<Stage[]> {
    const stages = of (STAGES);
    return stages;
  }

  getKillPercent (CharacterName: string, StageName: string): Observable<any>
  {
    return this.http.get(`${this.baseUri}?MeleeCharacter=${CharacterName}&MeleeStage=${StageName}`);
  }
  
}



