using System;
using System.Collections.Generic;

namespace fruitwebshop2._0.Models;

public partial class Category
{
    public int CategoryId { get; set; }

    public string Categoryname { get; set; } = null!;

    public virtual ICollection<Fruit> Fruits { get; set; } = new List<Fruit>();
}
