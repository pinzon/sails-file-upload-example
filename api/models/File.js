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
  
  
      //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
      //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
      //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
  
      //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
      //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
      //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
  
    },
  
    
    uploadAndRegister: async function (files, uploadOpts) {
      if (!files.length) {
        return null;
      }
  
      var uploadOptions = Object.assign({ maxBytes: 10 * 1000 * 1000 /** 10 MiB **/ }, uploadOpts)
      var uploadedFiles = await sails.upload(files, uploadOptions);
  
      if (!uploadedFiles.length) {
        return null;
      }
  
    //   var fileRegisterd = await File.create({
    //     fd: uploaded.fd,
    //     type: uploaded.type,
    //     category: category
    //   }).fetch();
  
      console.log(uploadOptions)

      return fileRegisterd
    },

  
};