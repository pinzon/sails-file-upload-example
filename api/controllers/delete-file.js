module.exports = {

    friendlyName: 'Delete file',

    description: 'Deletes a file in DB',

    inputs: {
        id: {
            type: 'number',
            description: 'File Id',
            required: true,
        }
    },

    exits: {

        success: {
            statusCode: 200,
            description: 'Business deleted',
        },

    },

    fn: async function (inputs, exits) {

        var deletedRecord = await File.destroy({
            id: inputs.id,
        }).fetch();

        return exits.success();
    }
}