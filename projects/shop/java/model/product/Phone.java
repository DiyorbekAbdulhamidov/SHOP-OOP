package com.pdp.shop.model.product;

public class Phone extends Product {
    private Double batterySize;
    private Integer cameraPix;

    public Phone(String name, Double price, String manufacturer, Double batterySize, Integer cameraPix) {
        super(name, price, manufacturer);
        this.batterySize = batterySize;
        this.cameraPix = cameraPix;
    }

    public Phone() {
    }

    public Double getBatterySize() {
        return batterySize;
    }

    public void setBatterySize(Double batterySize) {
        this.batterySize = batterySize;
    }

    public Integer getCameraPix() {
        return cameraPix;
    }

    public void setCameraPix(Integer cameraPix) {
        this.cameraPix = cameraPix;
    }
}
