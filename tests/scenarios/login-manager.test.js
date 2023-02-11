import * as assert from "@helpers/asserts";
import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/consts/routes";
import * as loginPage from "@tests/page/login.page";
import * as addCustomer from "@tests/page/add-customer.page";

describe('Login Manager', () => {
    //hook
    beforeEach(() => {
       route.visit(ROUTES.login); 
    });

    it('Check manager is able to login succesfully', () => {
        element.click(loginPage.managerLogin);
        assert.shouldContainText(addCustomer.addCustomerButton,"Add Customer")
    });

});
