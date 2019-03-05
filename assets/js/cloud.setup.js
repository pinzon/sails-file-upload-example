/**
 * cloud.setup.js
 *
 * Configuration for this Sails app's generated browser SDK ("Cloud").
 *
 * Above all, the purpose of this file is to provide endpoint definitions,
 * each of which corresponds with one particular route+action on the server.
 *
 * > This file was automatically generated.
 * > (To regenerate, run `sails run rebuild-cloud-sdk`)
 */

Cloud.setup({

  /* eslint-disable */
  methods: {"homepage":{"verb":"GET","url":"/","args":[]},"downloadFile":{"verb":"GET","url":"/cdn/files/:id","args":["id"]},"uploadFiles":{"verb":"POST","url":"/api/files","args":["files"]},"deleteFile":{"verb":"DELETE","url":"/api/files","args":["id"]}}
  /* eslint-enable */

});
