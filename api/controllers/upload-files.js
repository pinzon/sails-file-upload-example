module.exports = {

    friendlyName: 'New Category',

    description: 'Creates a new category',

    files: ['files'],

    inputs: {
        
        files: {
            type: 'ref'
        },

    },

    exits: {

        success: {
            statusCode: 200,
            description: 'The list of files was uploaded',
        },

        Error: {
            statusCode: 500,
            description: 'Files not upladed',
        },
    },


    fn: async function (inputs, exits) {
        var createdFiles = await File.uploadAndRegister(inputs.files)

        return exits.success({files: createdFiles});
    }
};