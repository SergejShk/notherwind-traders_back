import { AppDataSource } from "../db/dbSourse";
import { Orders } from "../models/ordersModel";
import {
  sum,
  sumTotalPrice,
  sumTotalDiscount,
} from "../helpers/prepareDataOrders";

const ordersRepository = AppDataSource.getRepository(Orders);

export const getAllOrders = async (skip: number, take: number) => {
  const [data, total] = await ordersRepository.findAndCount({
    skip,
    take,
  });

  return { total, data };
};

export const getOrderById = async (id: string) => {
  const data = await Orders.createQueryBuilder("orders")
    .leftJoinAndSelect("orders.orderDetails", "orderDetails")
    .leftJoinAndSelect("orders.shippers", "shippers")
    .where("orders.OrderID = :OrderID", { OrderID: id })
    .getOne();

  const order = {
    data: {
      OrderID: data?.OrderID,
      CustomerID: data?.CustomerID,
      EmployeeID: data?.EmployeeID,
      ShipName: data?.ShipName,
      TotalProducts: String(data?.orderDetails.length),
      TotalQuantity: data?.orderDetails
        ? sum("Quantity", data?.orderDetails)
        : "",
      TotalPrice: data?.orderDetails ? sumTotalPrice(data?.orderDetails) : "",
      TotalDiscount: data?.orderDetails
        ? sumTotalDiscount(data?.orderDetails)
        : "0.00",
      ShipVia: data?.shippers.CompanyName,
      Freight: data?.Freight,
      OrderDate: data?.OrderDate.split(" ")[0],
      RequiredDate: data?.RequiredDate.split(" ")[0],
      ShippedDate: data?.ShippedDate.split(" ")[0],
      ShipCity: data?.ShipCity,
      ShipRegion: "",
      ShipPostalCode: data?.ShipPostalCode,
      ShipCountry: data?.ShipCountry,
    },

    orderProducts: data?.orderDetails ? [...data.orderDetails] : [],
  };
  console.log(data?.shippers);
  return order;
};
