const authorController = require("../controllers/authorController");
const router = require("express").Router();


//add author
router.post("/", authorController.addAuthor);

//GET ALL AUTHOR
router.get("/", authorController.getAllAuthors);

//GET AN AUTHOR
router.get("/:id", authorController.getAnAuthors);

//UPDATE AUTHOR
router.put("/:id", authorController.updateAuthor);

//DELETE AUTHOR
router.delete("/:id", authorController.deleteAuthor);


module.exports = router;