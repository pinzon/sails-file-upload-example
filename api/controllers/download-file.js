module.exports = {

    friendlyName: 'Download file',
  
    description: '',
  
    inputs: {
      id:{
        description: 'Id of the required',
        type : 'number',
        required: true,
      }
    },
  
    exits: {
      success: {
        outputDescription: 'The streaming bytes of the specified thing\'s photo.',
        outputType: 'ref'
      },
  
      notFound: { responseType: 'notFound' }
    },
  
    fn: async function (inputs, exits) {
      var file = await File.findOne({id: inputs.id});
      if (!file) {throw 'notFound';}
      
      this.res.attachment(file.name);
      this.res.type(file.type);
      
      var downloading = await sails.startDownload(file.fd);
      return exits.success(downloading);
    }
  };