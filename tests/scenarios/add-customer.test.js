import * as assert from "@helpers/asserts";
import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/consts/routes";
import * as loginPage from "@tests/page/login.page";
import * as addCustomer from "@tests/page/add-customer.page";
import * as addCustomerData from "@tests/data/add-customer.data";

describe('Add Customer', () => {
    //hook
    beforeEach(() => {
       route.visit(ROUTES.login); 
    });

    it('Check manager is able to add customer succesfully', () => {
        element.click(loginPage.managerLogin);
        element.click(addCustomer.addCustomerButton);
        element.fillField(addCustomer.firstName, addCustomerData.VALID_CUSTOMER_DATA.first_name);
        element.fillField(addCustomer.lastName, addCustomerData.VALID_CUSTOMER_DATA.last_name);
        element.fillField(addCustomer.postCode, addCustomerData.VALID_CUSTOMER_DATA.post_code);
        element.click(addCustomer.submitButton);
        assert.verifyAlertWindow("Customer added successfully with customer id :6");
    });

});
