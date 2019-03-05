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
            filesArray: []          
        };
    },

    computed: {
    },

    //  ╦ ╦╔╦╗╔╦╗╦
    //  ╠═╣ ║ ║║║║
    //  ╩ ╩ ╩ ╩ ╩╩═╝
    template: `
        <div v-if="filesArray.length" class="d-flex flex-row flex-wrap align-items-start w-100">
            <div v-for="(file,index) in filesArray" class="file-clickable m-2" @click="deleteFromSelection(index)">
                <span v-text="file.name" class="text" ></span>
                <span class="delete" >&times;</span>
            </div>
        </div>

        <input v-else class="form-control-file" ref="input" @change="fileSelection" type="file" multiple>
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
            this.filesArray = Array.from(e.target.files || e.dataTransfer.files);
            this.$emit('update:files', e.target.files || e.dataTransfer.files);
        },

        deleteFromSelection: function (indexToDelete) {
            this.filesArray = this.filesArray.filter((e,index) => index != indexToDelete)
            var dTransfer =  new DataTransfer();

            this.filesArray.forEach(element => {
                dTransfer.items.add(element)
            });

            this.$emit('update:files', dTransfer.files );
        }
    }
});
