const express = require("express");
const router = express.Router();
const sql = require("../../Configs/db");

// Get all notifications for a user (all types, sorted by time)
router.get("/notifications/all", async (req, res) => {
  const { userId } = req.query;
  try {
    const query = await sql`
      SELECT * FROM notifications WHERE user_id = ${userId} ORDER BY notification_time DESC
    `;
    return res.status(200).json({ notifications: query });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
});


// Mark a notification as read
router.put("/notifications/read", async (req, res) => {
  const { notificationId } = req.body;

  try {
  
    const query = await sql`
      UPDATE notifications SET is_read = TRUE WHERE notification_id = ${notificationId} RETURNING *
    `;
    return res.status(200).json({ notification: query[0] });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;