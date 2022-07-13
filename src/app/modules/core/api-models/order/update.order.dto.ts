export class UpdateOrderDTO {
  public id: number;
  public orderDate: Date;
  public expiration: Date;
  public customerId: number;
  public shipVia: number;
}
/*
public class UpdateOrderDTO
    {
        public int Id { get; set; }

        public DateTime OrderDate { get; set; }

        public DateTime Expiration { get; set; }

        public int CustomerId { get; set; }

        public int ShipVia { get; set; }

        public string ShipName { get; set; }

        public string ShipAddress { get; set; }

        public string ShipCity { get; set; }

        public decimal ShipPostalCode { get; set; }

        public string ShipCountry { get; set; }

        public string ShipRegion { get; set; }

        public OrderStatus OrderStatus { get; set; }
    }
*/
