package com.pdp.shop.model;

public class Basket {
    private Long id;
    private Long productId;
    private Long userId;
    private Integer amount;

    public Basket(Long productId, Long userId, Integer amount) {
        this.productId = productId;
        this.userId = userId;
        this.amount = amount; 
    }

    public Basket() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }
}