package com.pdp.shop.model.product;

public class Monitor extends Product{
    private Double displaySize;
    
    private Integer HZ;

    public Monitor(String name, Double price, String manufacturer, Double displaySize, Integer HZ) {
        super(name, price, manufacturer);
        this.displaySize = displaySize;
        this.HZ = HZ;
    }

    public Monitor() {
    }

    public Double getDisplaySize() {
        return displaySize;
    }

    public void setDisplaySize(Double displaySize) {
        this.displaySize = displaySize;
    }

    public Integer getHZ() {
        return HZ;
    }

    public void setHZ(Integer HZ) {
        this.HZ = HZ;
    }
}
