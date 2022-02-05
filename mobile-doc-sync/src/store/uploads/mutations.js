export function addToUploadQueue(state, data) {
    state.imagesToUpload.push(data);
}

export function addToSavedFiles(state, data) {
    state.savedFiles.push(data);
}