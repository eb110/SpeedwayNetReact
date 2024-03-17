﻿// <auto-generated />
using System;
using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace API.Data.Migrations
{
    [DbContext(typeof(SpeedwayContext))]
    [Migration("20240317154015_RiderTable")]
    partial class RiderTable
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("API.Entities.SpeedwayRider", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<DateTime>("BirthDate")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Name")
                        .HasColumnType("longtext");

                    b.Property<string>("Nationality")
                        .HasColumnType("longtext");

                    b.Property<string>("Surname")
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("SpeedwayRider");
                });

            modelBuilder.Entity("API.Entities.SpeedwayRiderTotalRecord", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("Bonus")
                        .HasColumnType("int");

                    b.Property<int>("Crash")
                        .HasColumnType("int");

                    b.Property<int>("Defect")
                        .HasColumnType("int");

                    b.Property<int>("Exclude")
                        .HasColumnType("int");

                    b.Property<int>("First")
                        .HasColumnType("int");

                    b.Property<int>("Fourth")
                        .HasColumnType("int");

                    b.Property<int>("FullPerfect")
                        .HasColumnType("int");

                    b.Property<int>("Match")
                        .HasColumnType("int");

                    b.Property<int>("PaidPerfect")
                        .HasColumnType("int");

                    b.Property<decimal>("Point")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int>("Race")
                        .HasColumnType("int");

                    b.Property<int>("Second")
                        .HasColumnType("int");

                    b.Property<int>("Tape")
                        .HasColumnType("int");

                    b.Property<int>("Third")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("SpeedwayRiderTotalRecords");
                });
#pragma warning restore 612, 618
        }
    }
}
