import { Request, Response } from "express";
// import dataSource from "../../ormconfig";
import { Products } from "../entities/Products";
import { Categories } from "../entities/Categories";

export default {
  async all(req: Request, res: Response) {
    const datas = await Products.find({
      relations: {
        categories: true,
      },
    });
    res.json(datas);
  },
  select: async (req: Request, res: Response) => {
    const data = await Products.findOne({
      where: { id: parseInt(req.params.id) },
      relations: { categories: true },
    });
    res.json(data);
  },
  insert: async (req: Request, res: Response) => {
    const category = new Categories();
    category.id = 3;

    // let product = Products.create({
    //   name: "dummy " + new Date().toLocaleString(),
    //   price: 999,
    //   categories: category,
    // });
    // const data = await Products.insert(product);

    // alternative with returning data
    const data = await Products.createQueryBuilder()
      .insert()
      .into(Products)
      .values({
        name: "dummy " + new Date().toLocaleString(),
        price: 999,
        categories: category,
      })
      .returning("*")
      .execute();

    res.json(data);
  },
  update: async (req: Request, res: Response) => {
    // const data = await Products.update(
    //   {
    //     id: parseInt(req.params.id),
    //   },
    //   {
    //     name: "dummy " + new Date().toLocaleString(),
    //     price: 111,
    //   }
    // );

    //alternative with returning data
    const data = await Products.createQueryBuilder()
      .update(Products, {
        name: "dummy " + new Date().toLocaleString(),
        price: 111,
      })
      .where("id = :id", { id: parseInt(req.params.id) })
      .returning("*")
      .execute();

    res.json(data);
  },
  delete: async (req: Request, res: Response) => {
    const data = await Products.delete(parseInt(req.params.id));
    res.json(data);
  },
};

// alternative using : baseEntity, entity manager, entity repository
