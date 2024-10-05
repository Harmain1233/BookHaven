const router = require("express").Router();
const Order = require("../models/order");
const User = require("../models/user");
const { authenticateToken } = require("./userAuth");

// put book to cart
router.put("/add-to-cart", authenticateToken, async (req, res) => {
    try {
        const { bookid, id } = req.headers;
        const userData = await User.findById(id);
        const isBookInCart = userData.cart.includes(bookid);

        if (isBookInCart) {
            return res.json({
                status: "Success",
                message: "Book is already in cart",
            });
        }

        await User.findByIdAndUpdate(id, {
            $push: { cart: bookid }
        });

        return res.json({
            status: "Success",
            message: "Book successfully added to cart",
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "An error occurred" });
    }
});

// remove cart 
router.put("/remove-from-cart/:bookid", authenticateToken, async (req, res) => {
    try {
        const { bookid } = req.params;
        const { id } = req.headers;
        await User.findByIdAndUpdate(id, {
            $pull: { cart: bookid }
        });

        return res.json({
            status: "Success", 
            message: "Book Removed From Cart", 
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "An Error Occurred"});
    }




});

// get cart of a particular user 
router.get("/get-user-cart", authenticateToken, async (req, res) => {
    try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate("cart"); 
    const cart = userData.cart.reverse();

    return res.json({
        status: "Success", 
        data: cart,
    });
    } catch (error) {
     console.log(error);
     return res.status(500).json({message: "An Error Occurred"});
    }
});

// place order
router.post("/place-order", authenticateToken, async (req, res) => {
    try {
      const { id } = req.headers;
      const { order } = req.body;
  
      // Validate that order is an array
      if (!Array.isArray(order)) {
        return res.status(400).json({ status: "Error", message: "Invalid order data" });
      }
  
      for (const orderData of order) {
        const newOrder = new Order({ user: id, book: orderData._id }); // Corrected constructor
        const orderDataFromDb = await newOrder.save();
  
        // Saving Order in user model
        await User.findByIdAndUpdate(id, {
          $push: { orders: orderDataFromDb._id },
        });
  
        // Clearing cart
        await User.findByIdAndUpdate(id, {
          $pull: { cart: orderData._id },
        });
      }
  
      return res.json({
        status: "Success",
        message: "Order Placed Successfully",
      });
  
    } catch (error) {
      console.error(error); // Log the error
      return res.status(500).json({ status: "Error", message: "Internal Server Error" }); // Send error response
    }
  });
  

// get order history of particular user
router.get("/get-order-history", authenticateToken, async(req, res) => {
    try { 
        const { id } = req.headers;
        const userData = await User.findById(id).populate({
       path: "orders", 
       populate: { path: book }, 
        }); 

        const ordersData = userData.orders.reverse();
        return res.json({
        status: "Success",
        data: ordersData,
        });
    } catch(error) {
        console.log(error);
        return res.status(500).json({ message: "An Error Occurred"});
    }
});

// get-all-orders --admin 
router.get("/get-all-orders", authenticateToken, async(req, res) => {
   try {
    const userData = await order.find()
    .populate({
     path: "book",
    })
    .populate({
    path: "user",
    })
    .sort({ createdAt: -1 })
   return res.json({
    status: "Success", 
    data: userData,
   });
   }
   catch (error) {
    console.log(error);
    return res.status(500).json({ message: "an error occurred"});

   }
})



module.exports = router;
