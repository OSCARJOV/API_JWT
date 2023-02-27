const { sequelize } = require("../mysql")
const { DataTypes } = require("sequelize")
const Storage = require("./storage")

const Tracks = sequelize.define(
    "tracks",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        album: {
            type: DataTypes.NUMBER,

        },
        cover:{
            type: DataTypes.STRING,
        },
        artist_name: {
            type: DataTypes.STRING,
        },
        artist_nickname: {
            type: DataTypes.STRING,
        },
        artist_nationality: {
            type: DataTypes.STRING,
        },
        duration_start: {
            type: DataTypes.STRING,
        },
        duration_end: {
            type: DataTypes.STRING,
        },
        mediaId: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: true,
    }
);

//Tracks.find = Tracks.findAll;
//Tracks.findByid = Tracks.findByPk;

Tracks.findAllData = function () {
    Tracks.belongsTo(Storage, {
        foreignKey: 'mediaId',
        as: 'audio'
    })

    return Tracks.findAll({include:'audio'})
};


Tracks.findOneData = function (id) {
    Tracks.belongsTo(Storage, {
        foreignKey: 'mediaId',
        as: 'audio',
    });

    return Tracks.findOne({where:{ id }, include:'audio'})
};

module.exports = Tracks