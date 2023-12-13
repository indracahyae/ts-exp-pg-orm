import { Router } from "express";
import productsActions from "../controllers/ProductsActions";

const router = Router();
router.get("/", productsActions.all);
router.get("/:id", productsActions.select);
router.delete("/:id", productsActions.delete);
router.post("/", productsActions.insert);
router.put("/:id", productsActions.update);
export default router;
