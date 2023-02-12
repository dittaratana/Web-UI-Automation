import { ROUTES } from "@tests/consts/routes";
import * as loginData from "@tests/data/login.data";
import * as loginPage from "@tests/page/login.page";
import * as assert from "@helpers/asserts";
import * as element from "@helpers/elements";
import * as route from "@helpers/route";

describe('Login Customer', () => {
    //hook
    beforeEach(() => {
        route.visit(ROUTES.login); 
    });

    it('Check customer is able to login with invalid user succesfully', () => {
        element.click(loginPage.customerLogin);
        element.select(loginPage.selectField, loginData.VALID_LOGIN_DATA.selectedCustomer1);
        element.click(loginPage.loginButton);
        assert.shouldContainText(loginPage.successLogin,"Harry Potter");
    });

    it('Check customer is able to logout with invalid user succesfully', () => {
        element.click(loginPage.customerLogin);
        element.select(loginPage.selectField, loginData.VALID_LOGIN_DATA.selectedCustomer1);
        element.click(loginPage.loginButton);
        assert.shouldContainText(loginPage.successLogin,"Harry Potter");
        element.click(loginPage.logoutButton);
        element.click(loginPage.homeButton);
        assert.shouldContainText(loginPage.customerLogin,"Customer Login");



    });

});