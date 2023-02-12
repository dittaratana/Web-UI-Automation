import { ROUTES } from "@tests/consts/routes";
import * as loginData from "@tests/data/login.data";
import * as loginPage from "@tests/page/login.page";
import * as assert from "@helpers/asserts";
import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import * as transactionData from "@tests/data/transaction-customer.data";
import * as transactionPage from "@tests/page/transaction-customer.page";

describe('Transaction Customer', () => {
    //hook
    beforeEach(() => {
        route.visit(ROUTES.login);
        element.click(loginPage.customerLogin);
        element.select(loginPage.selectField, loginData.VALID_LOGIN_DATA.selectedCustomer2);
        element.click(loginPage.loginButton);
        assert.shouldContainText(loginPage.successLogin,"Hermoine Granger");
    });

    it('Check customer is able to deposit an amount of money successfully', () => {
        element.click(transactionPage.depositeButton);
        element.fillField(transactionPage.amount, transactionData.TRANSACTION_DATA.deposite_amount);
        element.click(transactionPage.submitButton);
        assert.shouldContainText(transactionPage.message,"Deposit Successful");
    });

    it('Check customer is able to withdrawl money when the value is sufficient from deposite account', () => {
        element.click(transactionPage.withdrawlButton);
        element.fillField(transactionPage.amount, transactionData.TRANSACTION_DATA.withdrawl_sufficient);
        element.click(transactionPage.submitButton);
        assert.shouldContainText(transactionPage.message,"Transaction successful");
    });

    it('Check customer is able to withdrawl money when the value is insufficient from deposite account', () => {
        element.click(transactionPage.withdrawlButton);
        element.fillField(transactionPage.amount, transactionData.TRANSACTION_DATA.withdrawl_insufficient);
        element.click(transactionPage.submitButton);
        assert.shouldContainText(transactionPage.message,"Transaction Failed. You can not withdraw amount more than the balance.");
    });

    it('Check customer is able acces the transactions list', () => {
        element.click(transactionPage.transactionsButton);
        element.click(transactionPage.rightButton);
        assert.shouldContainText(transactionPage.resetButton,"Reset");
    });

});