import firebase from 'firebase/app'
import 'firebase/storage'

import store from '../store'

export default {
  getGalleryImages() {
    var storage = firebase.storage()

    var storageRef = storage.ref()
    var imagesRef = storageRef.child('gallery')
    imagesRef
      .listAll()
      .then(function(res) {
        store.dispatch(
          'setGalleryImages',
          res.items.map(item => ({
            path: item.fullPath,
            url: item.getDownloadURL()
          }))
        )
      })
      .catch(function(error) {
        // Uh-oh, an error occurred!
      })
  },
  uploadAll(files) {
    files.forEach(file => this.uploadSingle(file))
  },
  uploadSingle(file) {
    var storageRef = firebase.storage().ref()

    // Create the file metadata
    var metadata = {
      contentType: file.type
    }

    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storageRef
      .child('gallery/' + file.name)
      .put(file, metadata)

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      function(snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        // console.log('Upload is ' + progress + '% done')
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            // console.log('Upload is paused')
            break
          case firebase.storage.TaskState.RUNNING: // or 'running'
            // console.log('Upload is running')
            break
        }
      },
      function(error) {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break

          case 'storage/canceled':
            // User canceled the upload
            break

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break
        }
      },
      function() {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          store.dispatch('addImageToGallery', {
            path: uploadTask.snapshot.ref.fullPath,
            url: uploadTask.snapshot.ref.getDownloadURL()
          })
        })
      }
    )
  },
  deleteItem: function(path, index) {
    var storage = firebase.storage()

    var storageRef = storage.ref()
    // Create a reference to the file to delete
    var imageRef = storageRef.child(path)

    // Delete the file
    imageRef
      .delete()
      .then(function() {
        // File deleted successfully
      })
      .then(function() {
        store.dispatch('deleteGalleryImage', index)
      })
      .catch(function(error) {
        // Uh-oh, an error occurred!
      })
  }
}
