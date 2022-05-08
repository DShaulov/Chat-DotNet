﻿// <auto-generated />
using AP2_Chat_DotNet_WebAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace AP2_Chat_DotNet_WebAPI.Migrations
{
    [DbContext(typeof(MyDbContext))]
    [Migration("20220508180834_init")]
    partial class init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("AP2_Chat_DotNet_WebAPI.Models.Contact", b =>
                {
                    b.Property<int>("primaryKey")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Userid")
                        .HasColumnType("varchar(255)");

                    b.Property<string>("id")
                        .HasColumnType("longtext");

                    b.Property<string>("last")
                        .HasColumnType("longtext");

                    b.Property<string>("lastdate")
                        .HasColumnType("longtext");

                    b.Property<string>("name")
                        .HasColumnType("longtext");

                    b.Property<string>("server")
                        .HasColumnType("longtext");

                    b.HasKey("primaryKey");

                    b.HasIndex("Userid");

                    b.ToTable("Contacts");
                });

            modelBuilder.Entity("AP2_Chat_DotNet_WebAPI.Models.Message", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("content")
                        .HasColumnType("longtext");

                    b.Property<string>("created")
                        .HasColumnType("longtext");

                    b.HasKey("id");

                    b.ToTable("Messages");
                });

            modelBuilder.Entity("AP2_Chat_DotNet_WebAPI.Models.User", b =>
                {
                    b.Property<string>("id")
                        .HasColumnType("varchar(255)");

                    b.Property<string>("name")
                        .HasColumnType("longtext");

                    b.Property<string>("password")
                        .HasColumnType("longtext");

                    b.Property<string>("server")
                        .HasColumnType("longtext");

                    b.HasKey("id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("AP2_Chat_DotNet_WebAPI.Models.Contact", b =>
                {
                    b.HasOne("AP2_Chat_DotNet_WebAPI.Models.User", null)
                        .WithMany("contacts")
                        .HasForeignKey("Userid");
                });

            modelBuilder.Entity("AP2_Chat_DotNet_WebAPI.Models.User", b =>
                {
                    b.Navigation("contacts");
                });
#pragma warning restore 612, 618
        }
    }
}