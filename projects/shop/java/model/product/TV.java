package com.pdp.shop.model.product;

public class TV extends Product {
    private Double displaySize;

    private Boolean isSmart;
    private String displayType;

    public TV(String name, Double price, String manufacturer,
              Double displaySize, Boolean isSmart, String displayType) {
        super(name, price, manufacturer);
        this.displaySize = displaySize;
        this.isSmart = isSmart;
        this.displayType = displayType;
    }

    public TV() {
    }

    public Double getDisplaySize() {
        return displaySize;
    }

    public void setDisplaySize(Double displaySize) {
        this.displaySize = displaySize;
    }

    public Boolean getSmart() {
        return isSmart;
    }

    public void setSmart(Boolean smart) {
        isSmart = smart;
    }

    public String getDisplayType() {
        return displayType;
    }

    public void setDisplayType(String displayType) {
        this.displayType = displayType;
    }

    @Override
    public String toString() {
        return "displaySize = " + displaySize + " || " +
                "isSmart = " + isSmart + " || " +
                "displayType = " + displayType + " || " +
                "name = " + name + " || " +
                "price = " + price + " || " +
                "manufacturer = " + manufacturer;
    }
}
