parasails.registerPage('homepage', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    files: [],

    modalFiles: false,
    modalDelete:false,

    formData: {},
    formErrors: {},
    syncing: false,
    ajaxFormError:false,

    filesIcons: {
      'image/png' : 'fa-picture-o',
    }

  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS);
  },

  mounted: async function(){
    
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    showNewFile: function () {
      this.$set(this.formData,'files', [])
      this.modalFiles = true
    },

    showDeleteModal: function (e) {
      this.formData.id = e.id
      this.formData.name = e.name
      this.modalDelete = true
    },

    getFileIcon: function (fileType) {
      return `<i title="${fileType}" class="fa ${this.filesIcons[fileType] || 'fa-file' }" aria-hidden="true"></i>`
    },

    parseNewFiles: function () {
      this.formErrors = {};

      if (!this.formData.files.length){
        this.formErrors.files = true;
      }

      if (Object.keys(this.formErrors).length > 0) {
        return;
      }

      // console.log('sending: ',this.formData)
      return this.formData;
    },

    parseDeleteForm: function () {
      this.formErrors = {};

      if (!this.formData.id){
        this.formErrors.id = true;
      }

      if (Object.keys(this.formErrors).length > 0) {
        return;
      }

      // console.log('sending: ',this.formData)
      return this.formData;
    },

    handleNewResult: function (result) {
      this.files = this.files.concat(result.files)
      this.closeModal()
    },

    handleDeleteResult: function (result) {
      this.files = this.files.filter(e => this.formData.id != e.id)
      this.closeModal()
    },

    closeModal: function () {
      this.formData = {};
      this.formErrors = {};
      this.modalFiles = false;
      this.modalDelete =  false;
    }
    

  }
});
