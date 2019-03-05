parasails.registerPage('homepage', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    files: [{
      id: 0,
      name: 'jajaja.jpg',
      url: 'http://localhost:1337/cdn/1',
      fd: '/etc/path/to/file',
      type: 'image/png'
    }],

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

    getFileIcon: function (fileType) {
      return `<i title="${fileType}" class="fa ${this.filesIcons[fileType] || 'fa-file' }" aria-hidden="true"></i>`
    },

    parseNewFiles: function () {
      return {};
    },

    handleNewResult: function (result) {
      console.log(result)
    },

    closeModal: function () {
      this.formData = {};
      this.formErrors = {};
      this.modalFiles = false;
      this.modalDelete =  false;
    }
    

  }
});
