module.exports =(sequelize, DataTypes)=>{
    const PostComments= (sequelize.define('PostComments',
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            postId:{
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: false,
            },
            userId:{
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: false,
                    },
            comment: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: false,
            }

            
        }

    ))
    return PostComments;
}