import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { MediaCapture, MediaFile, CaptureError, 
  ConfigurationData,CaptureAudioOptions} from '@ionic-native/media-capture/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { Storage } from '@ionic/storage';



const MEDIA_FILES_KEY = 'mediaFiles';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  mediaFiles = [];  
  //tipo:string ="audio/wav";

  constructor(private router: Router,private mediaCapture: MediaCapture, private storage: Storage, 
    private file: File, private media: Media) {}
    
  
  ionViewDidLoad() {
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      this.mediaFiles = JSON.parse(res) || [];
    })
  }

  GrabarAudio() {                         //Captura archivos de audio   
    //const tipo_formato: CaptureAudioOptions = { type: '.wav' }
    //this.mediaCapture.captureAudio(tipo_formato).then(res => {
    this.mediaCapture.captureAudio().then(res => {
      this.GuardaMediaFiles(res);
    }, (err: CaptureError) => console.error(err));
  }

  Reproducir(miAudio) {                   //Reproduce archivos de audio
    //if (myFile.name.indexOf('.wav') > -1) {
      const audioFile: MediaObject = this.media.create(miAudio.localURL);
      audioFile.play();
    //} 
  }
 
  GuardaMediaFiles(archivos) {            //Almacena archivos multimedia
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      if (res) {
        let arr = JSON.parse(res);
        arr = arr.concat(archivos);
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
      } else {
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(archivos))
      }
      this.mediaFiles = this.mediaFiles.concat(archivos);
    })
  }

  PushTab2(){
    this.router.navigateByUrl('/app-tab2');
  }
  
}
