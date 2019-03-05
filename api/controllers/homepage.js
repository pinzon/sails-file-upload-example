module.exports = {


  friendlyName: 'View homepage',


  description: 'Shows home page and with files already saved.',


  exits: {

    success: {
      statusCode: 200,
      description: 'Showing homepage',
      viewTemplatePath: 'pages/homepage'
    },
  },


  fn: async function () {
    var files = await File.find({});
    return {files: files};
  }


};
