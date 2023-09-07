import { DataTypes, Model } from "sequelize";
import url from 'url'
import util from 'util'
import connectToDB from "./db.js";

const db = await connectToDB('postgresql:///movie-list')

class Movie extends Model {}
Movie.init(
    {
        movieId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        movieName: {
            type: DataTypes.STRING
        },
        imgUrl: {
            type: DataTypes.STRING(2000)
        }
    },
    {
        modelName: 'movie',
        sequelize: db
    }
)

// association methods (relationships, foreign keys)

if(process.argv[1] === url.fileURLToPath(import.meta.url)) {
    console.log('Syncing database...');
    await db.sync();
    console.log('Finished syncing database!');
}

export {Movie}