const { Order, User, MenuItem } = require('../models');

const createSampleOrder = async () => {
    try {
        const [user, created] = await User.findOrCreate({
            where: {
                id: User,
            },
            defaults: {
                username: newUserData,
                password: newUserData.password,
            },
        });
        sampleOrder = await Order.create({
            orderTotal: 25.99,
            orderStatus: 'completed',
            deliveryAddress: '123 Main St',
            userId: user.id,
        });

        console.log('sample orders created successfully');
    } catch (error) {
        console.error('error creating sample orders:', error);
    }
};

createSampleOrder();