package com.pdp.shop;

import com.pdp.shop.model.User;
import com.pdp.shop.model.product.*;
import com.pdp.shop.service.ProductService;
import com.pdp.shop.service.UserService;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    static Scanner scanStr = new Scanner(System.in);
    static Scanner scanInt = new Scanner(System.in);

    static UserService userService = new UserService();
    static ProductService productService = new ProductService();

    public static void main(String[] args) {
        int cmd1 = 1;

        userService.add(new User("admin", "admin", "admin", 1));
        defaultData();


        while(true) {
            System.out.println("1. Sign up\t2. Sign in\t0 Exit");
            cmd1 = scanInt.nextInt();

            switch (cmd1) {
                case 1 -> {
                    signUp();
                }
                case 2 -> {
                    User currentUser = signIn();
                    if(checkAdmin(currentUser)) {
                        adminMenu();
                    } else {
                        userMenu();
                    }
                }
            }
        }
    }

    public static void adminMenu() {
        int act = 1;

        while(true) {
            System.out.println("1. Add\t2. Show\t3. Edit\t4. Delete\t0. EXit");
            act = scanInt.nextInt();

            switch (act) {
                case 1 -> {
                    addProduct();
                }
                case 2 -> {
                    showProducts();
                }
                case 3 -> {
                    editProduct();
                }
            }
        }



    }

    private static void editProduct() {
        while(true) {
            ArrayList<Product> products = showProducts();
            System.out.print("Choose number: ");
            int choice = scanInt.nextInt();

            if (choice <= 0 || choice > products.size()) {
                System.out.println("Wrong number");
            } else {
                Product product = products.get(choice - 1);
                editSingleProduct(product);
                return;
            }
        }
    }

    private static void editSingleProduct(Product product) {
        System.out.println(product.toString());
        System.out.println("Enter new input or the old value if you don't want to change");
        Product update = new Product();

        if (product instanceof Laptop) {
            update = createLaptop();
        } else if (product instanceof TV) {
            update = createTV();
        } else if (product instanceof Phone) {
            // your code;
        }else if (product instanceof Monitor) {
            // your code;
        }

        update.setId(product.getId());
        productService.edit(update);
        System.out.println("Update successfull");
    }

    private static ArrayList<Product> showProducts() {
        int act = 1;
        while(true) {
            System.out.println("Choose category");
            System.out.println("1. Laptop\t2. TV\t3. Phone\t4. Monitor\t0. Back");
            act = scanInt.nextInt();

            ArrayList<Product> products = new ArrayList<>();

            switch (act) {
                case 1 -> {
                    products = productService.getProductsByType("Laptop");
                }
                case 2 -> {
                    products = productService.getProductsByType("TV");
                }
                case 3 -> {
                    products = productService.getProductsByType("Phone");
                }
                case 4 -> {
                    products = productService.getProductsByType("Monitor");
                }
                case 0 -> {
                    return products;
                }
                default -> {
                    System.out.println("Wrong input");
                    continue;
                }
            }

            displayProducts(products);
            return products;
        }
    }

    private static void displayProducts(ArrayList<Product> products) {
        if(products.isEmpty()) {
            System.out.println("No products in this category yet!");
            return;
        }

        int i = 1;
        for (Product product:products) {
            System.out.println(i++ +". " + product.toString());
        }
    }

    private static void addProduct() {
        int act = 1;
        while(true) {
            System.out.println("Choose category");
            System.out.println("1. Laptop\t2. TV\t3. Phone\t4. Monitor\t0. Back");
            act = scanInt.nextInt();

            Product product = null;

            switch (act) {
                case 1 -> {
                    product = createLaptop();
                }
                case 2 -> {
                    product = createTV();
                }
                case 3 -> {
                    // you should write here
                }
                case 4 -> {
                    // you should write here
                    /*for monitor*/
                }
                case 0 -> {
                    return;
                }
                default -> {
                    System.out.println("Wrong input");
                    continue;
                }
            }

            productService.add(product);
            System.out.println("Product create successfully");
        }
    }

    public static Laptop createLaptop() {
        System.out.print("Enter name: ");
        String name = scanStr.nextLine();

        System.out.print("Enter price: ");
        Double price = scanInt.nextDouble();

        System.out.print("Enter manufacturer: ");
        String manufacturer = scanStr.nextLine();

        System.out.print("Enter RAM size: ");
        Integer ram = scanInt.nextInt();

        System.out.print("Enter memory size: ");
        Integer memory = scanInt.nextInt();

        System.out.print("Enter CPU: ");
        String cpu = scanStr.nextLine();

        System.out.print("Enter GPU: ");
        String gpu = scanStr.nextLine();

        return new Laptop(name, price, manufacturer, ram, cpu, gpu, memory);
    }

    public static TV createTV() {
        System.out.print("Enter name: ");
        String name = scanStr.nextLine();

        System.out.print("Enter price: ");
        Double price = scanInt.nextDouble();

        System.out.print("Enter manufacturer: ");
        String manufacturer = scanStr.nextLine();

        System.out.print("Enter display size: ");
        Double displaySize = scanInt.nextDouble();

        System.out.print("Enter display type: ");
        String displayType = scanStr.nextLine();
        boolean isSmart = false;

        System.out.print("Is smart (y/n): ");
        switch (scanStr.nextLine()) {
            case "y" -> {
                isSmart = true;
            }
            case "n" -> {
                isSmart = false;
            }
        }

        return new TV(name, price, manufacturer, displaySize, isSmart, displayType);
    }

    public static void userMenu() {

    }


    public static boolean checkAdmin(User user) {
        return user.getUsername().equals("admin");
    }
    public static void signUp() {
        System.out.print("Enter name");
        String name = scanStr.nextLine();

        System.out.print("Enter username");
        String username = scanStr.nextLine();

        System.out.print("Enter password");
        String password = scanStr.nextLine();

        User user = new User(name, username, password, 1_000_000);
        int add = userService.add(user);

        if(add == -1) {
            System.out.println("Username already taken\n");
            return;
        }
        System.out.println("Successfully signed up");
    }

    public static User signIn() {
        System.out.print("Enter username: ");
        String username = scanStr.nextLine();

        System.out.print("Enter password: ");
        String password = scanStr.nextLine();

        User user = userService.signIn(username, password);

        if(user != null) {
            return user;
        }

        System.out.println("User not found");
        return null;
    }

    public static void defaultData() {
        productService.add(new Laptop("HP G850", 2000D, "HP", 32, "Core i9 13 Gen", "RTX4090", 512));
        productService.add(new Laptop("HP G7", 550D, "HP", 8, "Core i5 10 Gen", "GTX", 1024));
        productService.add(new Laptop("MSI GF66", 1000D, "MSI", 12, "Core i7 11 Gen", "RTX4090", 256));
        productService.add(new Laptop("Dell AB4", 500D, "Dell", 16, "Core i3 8Gen", "S90", 128));
        productService.add(new Laptop("Lenovo", 650D, "Lenovo", 24, "Core i7 8 Gen", "RTX4090", 512));

    }
}
