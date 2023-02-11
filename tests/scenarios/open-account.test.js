import * as assert from "@helpers/asserts";
import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/consts/routes";
import * as loginPage from "@tests/page/login.page";
import * as openAccount from "@tests/page/open-account.page";
import * as openAccountData from "@tests/data/open-account.data";

describe('Open Account', () => {
    //hook
    beforeEach(() => {
       route.visit(ROUTES.login); 
    });

    it('Check manager is able to open account succesfully', () => {
        element.click(loginPage.managerLogin);
        element.click(openAccount.openAccountButton);
        element.select(openAccount.customerName, openAccountData.VALID_CUSTOMER_DATA.customer_name);
        element.select(openAccount.costumerCurrency, openAccountData.VALID_CUSTOMER_DATA.currency);
        element.click(openAccount.processButton);
        assert.verifyAlertWindow("Account created successfully with account Number :1016");
    });

});
