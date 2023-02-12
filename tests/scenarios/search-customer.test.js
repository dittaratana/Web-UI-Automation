import * as assert from "@helpers/asserts";
import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/consts/routes";
import * as loginPage from "@tests/page/login.page";
import * as customerList from "@tests/page/customer-list.page";
import * as customerListData from "@tests/data/customer-list.data";

describe('Search Customer', () => {
    //hook
    beforeEach(() => {
       route.visit(ROUTES.login); 
    });

    it('Check manager is able to search customer list succesfully', () => {
        element.click(loginPage.managerLogin);
        element.click(customerList.customerButton);
        element.fillField(customerList.searchCustomer, customerListData.VALID_SEARCH_CUSTOMER_DATA.customer1);
        assert.shouldContainText(customerList.firstNameList,"Harry")
    });

});
