using System;
using System.Collections.Generic;

namespace fruitwebshop2._0.Models;

public partial class Fruit
{
    public int FruitId { get; set; }

    public string Name { get; set; } = null!;

    public string? Description { get; set; }

    public decimal Price { get; set; }

    public int StockQuantity { get; set; }

    public byte[]? ImageUrl { get; set; }

    public int CatId { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime UpdatedAt { get; set; }

    public virtual Category Cat { get; set; } = null!;

    public virtual ICollection<Orderitem> Orderitems { get; set; } = new List<Orderitem>();
}
