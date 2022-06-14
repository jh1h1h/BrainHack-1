const express = require("express");
const { authenticateStoreEntry, getAllStoreItems, 
    updateStoreItemQuantity,updateUserActivities,getAllUserActivities} = require("../controllers/InventoryController.js");
let router = express.Router();


// 1. authenticate store entry by user
router.post("/authenticate-store-entry", authenticateStoreEntry)

// 2. get all store items for a particular store in a camp
router.get("/get-all-store-items", getAllStoreItems);

//3. update quanitity of store item
router.post("/update-quantity-store-item",updateStoreItemQuantity)

//4. Get all activities by user
router.get("/get-all-user-activities",getAllUserActivities);

//5. update the recent activities for a user -> particular camp and store 
router.post("/update-user-activities",updateUserActivities);



module.exports = router;
