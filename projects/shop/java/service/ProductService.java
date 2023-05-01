package com.pdp.shop.service;

import com.pdp.shop.model.product.*;

import java.util.ArrayList;

public class ProductService {
    ArrayList<Product> productList = new ArrayList<>();
    private Long idGenerator = 0L;

    public int add(Product product) {
        product.setId(idGenerator++);
        productList.add(product);
        return 1;
    }

    public Product getById(Long id) {
        for (Product product: productList) {
            if(product.getId().equals(id)) {
                return product;
            }
        }
        return null;
    }

    public ArrayList<Product> getProductsByType(String type) {
        ArrayList<Product> products = new ArrayList<>();

        switch (type) {
            case "TV" -> {
                for (Product product : productList) {
                    if(product instanceof TV) {
                        products.add(product);
                    }
                }
            }
            case "Laptop" -> {
                for (Product product : productList) {
                    if(product instanceof Laptop) {
                        products.add(product);
                    }
                }
            }
            case "Monitor" -> {
                for (Product product : productList) {
                    if(product instanceof Monitor) {
                        products.add(product);
                    }
                }
            }
            case "Phone" -> {
                for (Product product : productList) {
                    if(product instanceof Phone) {
                        products.add(product);
                    }
                }
            }
        }
        return products;
    }

    public int edit(Product updatedProduct) {
        for (int i = 0; i < productList.size(); i++) {
            if(productList.get(i).getId().equals(updatedProduct.getId())) {
                productList.set(i, updatedProduct);
                return 1;
            }
        }
        return -1;
    }



}
