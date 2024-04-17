const {
  User,
  Category,
  Allergen,
  OrderItem,
  Inventory,
} = require('../models/index');
module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },
  inventoryData: [
    {
      model: Category,
    },
    {
      model: Allergen,
    },
  ],
  orderData: [
    { model: User, attributes: { exclude: ['password'] } },
    {
      model: OrderItem,
      include: [{ model: Inventory }],
    },
  ],
  orderMap: (obj) => {
    const newobj = obj.get({ plain: true });
    let count = 0;
    for (const orderItem of newobj.orderItems) {
      count += orderItem.stock;
    }
    newobj.total_items = count;
    return newobj;
  },
};
