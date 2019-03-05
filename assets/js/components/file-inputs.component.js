/**
 * <fileInput>
 * -----------------------------------------------------------------------------
 * imageInput
 *
 * @type {Component}
 *
 * @event click   [emitted when clicked]
 * -----------------------------------------------------------------------------
 */

parasails.registerComponent('filesInput', {
    //  ╔═╗╦═╗╔═╗╔═╗╔═╗
    //  ╠═╝╠╦╝║ ║╠═╝╚═╗
    //  ╩  ╩╚═╚═╝╩  ╚═╝
    props: [
        'files'
    ],

    //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
    //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
    //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
    data: function () {
        return {
        };
    },

    computed: {
    },

    //  ╦ ╦╔╦╗╔╦╗╦
    //  ╠═╣ ║ ║║║║
    //  ╩ ╩ ╩ ╩ ╩╩═╝
    template: `
        <div v-if="files.length" class="d-flex flex-column">
            <div v-form="(file, index) in files" class="d-flex flex-row">
                <!-- <span>{{index + 1}}</span>
                <span>{{file.name}}</span>
                <button @click=""> 
                <i class="fa fa-trash-o" aria-hidden="true"></i>    
                </button> -->
            </div>
        </div>

        <input v-else class="form-control" @change="fileSelection" type="file" multiple>
    `,

    //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
    //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
    //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝

    mounted: function () {
    },

    //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
    //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
    methods: {
        

        fileSelection: function (e) {
            component = this
            var files = e.target.files || e.dataTransfer.files;

            console.log(files)

            this.$emit('update:files', files);

            // var fr = new FileReader();
            // fr.onload = function () {
            //     component.url = fr.result;
            // }
            // fr.readAsDataURL(file);
        },

    

    }
});
