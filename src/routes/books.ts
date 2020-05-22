import { Router } from "express";

import { bookController } from "../controllers/book.controller";

const router: Router = Router();

router.get("/", bookController.indexBook);
router.get("/add", bookController.renderForBook);
router.post("/add", bookController.saveBook);

export default router;
