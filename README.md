# Loan Website
This loan website was created using Angular and calls methods from an API created in .NET Core.

## How to Run
--Build the WebAPI solution in Visual Studio Community edition.
--Open the command prompt and direct to the location  of the Website folder. (...\YouLend\Website)
--Run npm install to download and install the dependencies for the Website
--Run ng serve --open to start the website in browser.

## Using the Website
### Dashboard
The dashboard will contain links to some of the loans that are currently stored by the API. Click on whichever link to go directly to the details page of that loan.

### Loans
The loans page will contain links to all the loans that are currently stored by the API. Loans can be added on this page through the input boxes where you would input the name of the person borrowing the loan, how much money they were funded and how much money they are required to repay. Next to the links to each of the loans is a delete button which will delete the loan from the API's storage.

### Details
This contains the information regarding a specific loan. You will be able to update the details of the loan from this page.

### Messages
On the sidebar there is a section which contains messages which show how the website is responding to the calls to the API. There is a button to clear all the messages shown. 