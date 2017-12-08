// Customer models
module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        name: {
            type: DataTypes.STRING,
            // allowNull: false,
            // validate: {
            //   len: [1]
            // }
        }
    });

    // Customer.associate = function(models) {
    //   Customer.belongsTo(models.Burger, {
    //   });
    // };
    return Customer;

};