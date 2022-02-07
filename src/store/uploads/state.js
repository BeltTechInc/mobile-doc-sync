export default function() {
    return {
        currentImage: {
            webPath: "",
            format: "",
        },
        imagesToUpload: [],
        savedFiles: [{
            id: "",
            name: "",
            webPath: "",
            format: "",
            permissions: "",
            createdDate: "",
            modifiedDate: "",
        }, ],
        currentFile: {
            id: "",
            name: "",
            webPath: "",
            format: "",
            permissions: "",
            createdDate: "",
            modifiedDate: "",
        },
    };
}