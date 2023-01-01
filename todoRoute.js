const todoControllers = require("./todoControllers")
const router = require("express").Router()

router.get("/" , todoControllers.getTodos)
router.post("/" , todoControllers.addTodo)
router.put("/:id" , todoControllers.updateTodo)
router.delete("/:id" , todoControllers.deleteTodo) 


// export default router
module.exports = router