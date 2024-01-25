using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace fruitwebshop2._0.Models;

public partial class Fruitwebshop2Context : DbContext
{
    public Fruitwebshop2Context()
    {
    }

    public Fruitwebshop2Context(DbContextOptions<Fruitwebshop2Context> options)
        : base(options)
    {
    }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<Fruit> Fruits { get; set; }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<Orderitem> Orderitems { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySQL("server=localhost;database=fruitwebshop2;user=root;password=;sslmode=none;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.CategoryId).HasName("PRIMARY");

            entity.ToTable("category");

            entity.HasIndex(e => e.Categoryname, "Categoryname");

            entity.Property(e => e.CategoryId)
                .HasColumnType("int(3)")
                .HasColumnName("categoryID");
            entity.Property(e => e.Categoryname).HasMaxLength(200);
        });

        modelBuilder.Entity<Fruit>(entity =>
        {
            entity.HasKey(e => e.FruitId).HasName("PRIMARY");

            entity.ToTable("fruits");

            entity.HasIndex(e => e.CatId, "catId");

            entity.Property(e => e.FruitId).HasColumnType("int(11)");
            entity.Property(e => e.CatId)
                .HasColumnType("int(3)")
                .HasColumnName("catId");
            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("'current_timestamp()'")
                .HasColumnType("timestamp");
            entity.Property(e => e.Description)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("text");
            entity.Property(e => e.ImageUrl)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("mediumblob");
            entity.Property(e => e.Name).HasMaxLength(100);
            entity.Property(e => e.Price).HasPrecision(10);
            entity.Property(e => e.StockQuantity).HasColumnType("int(11)");
            entity.Property(e => e.UpdatedAt)
                .ValueGeneratedOnAddOrUpdate()
                .HasDefaultValueSql("'current_timestamp()'")
                .HasColumnType("timestamp");

            entity.HasOne(d => d.Cat).WithMany(p => p.Fruits)
                .HasForeignKey(d => d.CatId)
                .HasConstraintName("fruits_ibfk_1");
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.OrderId).HasName("PRIMARY");

            entity.ToTable("orders");

            entity.HasIndex(e => e.UserId, "UserId").IsUnique();

            entity.Property(e => e.OrderId).HasColumnType("int(11)");
            entity.Property(e => e.OrderDate)
                .HasDefaultValueSql("'current_timestamp()'")
                .HasColumnType("timestamp");
            entity.Property(e => e.TotalAmount).HasPrecision(10);
            entity.Property(e => e.UserId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)");

            entity.HasOne(d => d.User).WithOne(p => p.Order)
                .HasForeignKey<Order>(d => d.UserId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("orders_ibfk_1");
        });

        modelBuilder.Entity<Orderitem>(entity =>
        {
            entity.HasKey(e => e.OrderItemId).HasName("PRIMARY");

            entity.ToTable("orderitems");

            entity.HasIndex(e => e.FruitId, "FruitId");

            entity.HasIndex(e => e.OrderId, "OrderId");

            entity.Property(e => e.OrderItemId).HasColumnType("int(11)");
            entity.Property(e => e.FruitId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)");
            entity.Property(e => e.OrderId)
                .HasDefaultValueSql("'NULL'")
                .HasColumnType("int(11)");
            entity.Property(e => e.Price).HasPrecision(10);
            entity.Property(e => e.Quantity).HasColumnType("int(11)");

            entity.HasOne(d => d.Fruit).WithMany(p => p.Orderitems)
                .HasForeignKey(d => d.FruitId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("orderitems_ibfk_2");

            entity.HasOne(d => d.Order).WithMany(p => p.Orderitems)
                .HasForeignKey(d => d.OrderId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("orderitems_ibfk_3");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PRIMARY");

            entity.ToTable("users");

            entity.Property(e => e.UserId).HasColumnType("int(11)");
            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("'current_timestamp()'")
                .HasColumnType("timestamp");
            entity.Property(e => e.Email).HasMaxLength(100);
            entity.Property(e => e.PasswordHash).HasMaxLength(255);
            entity.Property(e => e.Username).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
