/**
 * File.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
  
      //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
      //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
      //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
      name: {
        type: 'string',
        required: true,
        example: 'file.type'
      },
  
      fd: {
        type: 'string',
        required: true,
        example: 'path/to/file'
      },
  
      type: {
        type: 'string',
        required: true,
      },

      size: {
        type: 'number'
      }

  
      //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
      //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
      //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
  
      //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
      //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
      //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
  
    },
  
    
    uploadAndRegister: async function (files, uploadOpts) {
      var uploadOptions = Object.assign({ maxBytes: 50 * 1000 * 1000 /** 10 MiB **/ }, uploadOpts)
      
      var uploadedFiles = await sails.upload(files, uploadOptions);
      
      if (!uploadedFiles.length) {
        console.log('No files to upload')
        return null;
      }

      var registerdFiles = await File.createEach(
        uploadedFiles.map(e => ({name: e.filename, type: e.type,size: e.size, fd: e.fd}) )
      ).fetch();
  
      return registerdFiles
    },

  
};