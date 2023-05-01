package com.pdp.shop.model.product;
public class Laptop extends Product {

    private Integer RAM;
    private String CPU;
    private String GPU;
    private Integer memory;

    public Laptop(String name, Double price, String manufacturer,
                  Integer RAM, String CPU, String GPU, Integer memory) {
        super(name, price, manufacturer);
        this.RAM = RAM;
        this.CPU = CPU;
        this.GPU = GPU;
        this.memory = memory;
    }

    public Laptop() {
    }

    public Integer getRAM() {
        return RAM;
    }

    public void setRAM(Integer RAM) {
        this.RAM = RAM;
    }

    public String getCPU() {
        return CPU;
    }

    public void setCPU(String CPU) {
        this.CPU = CPU;
    }

    public String getGPU() {
        return GPU;
    }

    public void setGPU(String GPU) {
        this.GPU = GPU;
    }

    public Integer getMemory() {
        return memory;
    }

    public void setMemory(Integer memory) {
        this.memory = memory;
    }

    @Override
    public String toString() {
        return "RAM = " + RAM + " || " +
                "CPU = " + CPU + " || " +
                "GPU = " + GPU + " || " +
                "memory = " + memory + " || " +
                "name = " + name + " || " +
                "price = " + price + " || " +
                "manufacturer = " + manufacturer;
    }
}
