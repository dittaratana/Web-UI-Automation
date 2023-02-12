import * as assert from "@helpers/asserts";
import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/consts/routes";
import * as loginPage from "@tests/page/login.page";
import * as customerList from "@tests/page/customer-list.page";
import * as customerListData from "@tests/data/customer-list.data";

describe('List Customer', () => {
    //hook
    beforeEach(() => {
       route.visit(ROUTES.login);
       element.click(loginPage.managerLogin);
       element.click(customerList.customerButton);

    });

    it('Check manager is able to search customer in list succesfully', () => {
        element.fillField(customerList.searchCustomer, customerListData.VALID_SEARCH_CUSTOMER_DATA.customer1);
        assert.shouldContainText(customerList.firstNameList,"Harry");
    });

    it('Check manager is able to delete customer in list succesfully', () => {
        element.fillField(customerList.searchCustomer, customerListData.VALID_SEARCH_CUSTOMER_DATA.customer2);
        assert.shouldContainText(customerList.firstNameList,"Ron");
        element.click(customerList.deleteButton);element.fillField(customerList.searchCustomer, customerListData.VALID_SEARCH_CUSTOMER_DATA.customer2);
    });

});
