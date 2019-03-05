# Sails User File-Uploads Example

A simple [Sails v1](https://sailsjs.com) application that demonstrates how to upload / download user files. Also showcases a [Custom Parasails (Vue) Component](https://github.com/mikermcneil/parasails) that lets you edit the list of selected files before uploading

## Importan Files
* [File Input Component ](https://github.com/pinzon/sails-file-upload-example/blob/master/assets/js/components/file-inputs.component.js)
* [Upload Action ](https://github.com/pinzon/sails-file-upload-example/blob/master/api/controllers/upload-files.js)
* [File Model ](https://github.com/pinzon/sails-file-upload-example/blob/master/api/models/File.js)
* [Download action ](https://github.com/pinzon/sails-file-upload-example/blob/master/api/controllers/download-file.js)

## Main View
![Main view](https://raw.githubusercontent.com/pinzon/sails-file-upload-example/master/screenshots/main.png  "Main view")
 
## Uploading Files
Process to upload a list of files

|  File Input Empty | Selected Files   | Deleting a selected file |
|---|---|---|
|![Empty](https://raw.githubusercontent.com/pinzon/sails-file-upload-example/master/screenshots/upload-empty.png  "Empty input")|![Selected file](https://raw.githubusercontent.com/pinzon/sails-file-upload-example/master/screenshots/upload-selecting.png  "Selected files")|![Deleting selection](https://raw.githubusercontent.com/pinzon/sails-file-upload-example/master/screenshots/upload-deleting.png "Deleting selection")|

## Deleting a file
Display of modal to delete a file
![Deleting file](https://raw.githubusercontent.com/pinzon/sails-file-upload-example/master/screenshots/deleting-file.png  "Deleting ile")