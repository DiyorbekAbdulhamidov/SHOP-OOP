package com.pdp.shop.service;

import com.pdp.shop.model.User;

import java.util.ArrayList;

public class UserService {
    private ArrayList<User> users = new ArrayList<>();
    private Long idGenerator = 0L;

    public int add(User user) {
        if(checkUsername(user.getUsername())) {
            return -1;
        }
        user.setId(idGenerator++);
        users.add(user);
        return 1;
    }

    private boolean checkUsername(String username) {
        for (int i = 0; i < users.size(); i++) {
            if(users.get(i).getUsername().equals(username)) {
                return true;
            }
        }
        return false;
    }

    public User signIn(String username, String password) {
        for (User u: users) {
            if(u.getUsername().equals(username) && u.getPassword().equals(password)) {
                return u;
            }
        }
        return null;
    }

}
