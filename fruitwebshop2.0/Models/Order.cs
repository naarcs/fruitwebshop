﻿using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace fruitwebshop2._0.Models;

public partial class Order
{
    public int OrderId { get; set; }

    public int? UserId { get; set; }

    public decimal TotalAmount { get; set; }

    public DateTime OrderDate { get; set; }

    public virtual ICollection<Orderitem> Orderitems { get; set; } = new List<Orderitem>();
    
    [JsonIgnore]
    public virtual User? User { get; set; }
}
