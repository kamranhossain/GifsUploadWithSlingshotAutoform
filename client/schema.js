Gifs.attachSchema(new SimpleSchema({
    title: {
        type: String,
        max: 80
    },
    image: {
        type: String,
        autoform: {
            type: 'slingshotFileUpload',
            afFieldInput: {
                key: 'image',
                slingshotdirective: {
                    directive: 'imageUploadDirective',
                }
            }
        }
    }

}));