export const files = (state, getters) => state.savedFiles;

export function queue(state, getters) {
    queue = state.imagesToUpload;
}