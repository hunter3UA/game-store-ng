import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor() {}

  downloadFile(fileName: string, body: any) {
    let blob: Blob = body as Blob;
    let a = document.createElement('a');
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    a.click();
  }
}
