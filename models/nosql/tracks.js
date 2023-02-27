const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete")

const TracksScheme = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        age: {
            type: Number,
        },
        cover: {
            type: String,
            validate: {
                validator: (req) => {
                    return true;
                },
                message: " Error_URL",
            },
        },
        artist: {
            name: {
                type: String,
            },
            nickname: {
                type: String,
            },
            nationality: {
                type: String,
            },
        },
        duration: {
           start:{
            type: Number,
           },
           end : {
            type: Number,
           }
        },
        mediaId: {
            type: mongoose.Types.ObjectId,
        },
        
    },

    {
        timestamps: true,
        versionKey: false
    }
);

TracksScheme.statics.findAllData = function () {   // findAllData es el metodo personalizado
        const joinData = this.aggregate([
            {
                $lookup: {
                    from: "storages",
                    localField:"mediaId",
                    foreignField: "_id",
                    as: "audio",
                },
            },
            {
                $unwind:"$audio"
            }

        ])    
        return joinData
};


TracksScheme.statics.findOneData = function (id) {   // findAllData es el metodo personalizado
    const joinData = this.aggregate([
        {
            $match:{
                _id:mongoose.Types.ObjectId(id),
            },
        },
        {
            $lookup: {
                from: "storages",
                localField:"mediaId",
                foreignField: "_id",
                as: "audio",
            },
        },
        {
            $unwind:"$audio"
        },
 

    ]);    
    return joinData;
};



TracksScheme.plugin(mongooseDelete, { overrideMethods: "all"})
module.exports = mongoose.model("tracks", TracksScheme) // users es el nombre de la tabla