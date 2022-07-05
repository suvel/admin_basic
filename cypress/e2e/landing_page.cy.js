import appConfig from "../../application.conf";

const portNumber = appConfig.PORT;

describe("[🧪] Check if the application is loading at Go to Localhost", () => {
  it(`Go to Localhost:${portNumber}`, () => {
    cy.visit(`http://localhost:${portNumber}`);
  });

  it(`Contains the welcome message in the applications`, () => {
    cy.contains("Welcome to the ADMIN PAGE");
  });
});

describe("[🧪] Check if the data populated with data from api", () => {
  it(`Checking if the table is populated after the api is intiated`, () => {
    cy.intercept({
      method: "GET",
      url: "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json",
    }).as("recivedMemberData");
    cy.visit(`http://localhost:${portNumber}`);
    cy.wait("@recivedMemberData").then(async (response) => {
      const recMemLs = response.response.body.length;
      cy.get(".Pagination")
        .children()
        .then((paginationBtn) => {
          const currentPagination = paginationBtn.length - 4;
          const pageCount = Math.ceil(recMemLs / 10);
          expect(pageCount).to.equal(currentPagination);
        });
    });
  });
});

describe("[🧪] Checking if the correct form is displayed on selecting a row from table", () => {
  it(`Go to Localhost:${portNumber}`, () => {
    cy.visit(`http://localhost:${portNumber}`);
  });
  it(`selecting a row`, () => {
    cy.get("tbody > tr > td > input").first().click();
  });
  it(`check if the Total Rows is 1`, () => {
    cy.contains("Total Rows:1");
  });
  it(`Check if the form has 3 inputs`, () => {
    cy.get("div.LabeledInput").should("have.length", 3);
  });
  it(`Check if the form has Name, Role and Email inputs`, () => {
    const labels = cy.get("div.LabeledInput").children();
    labels.should("contain", "Name");
    labels.should("contain", "Role");
    labels.should("contain", "Email");
    cy.get(".Form_buttonsContainer").find("button").contains("Edit");
  });
});

describe("[🧪] Checking if the correct form is displayed on selecting multiple row from table", () => {
  it(`Go to Localhost:${portNumber}`, () => {
    cy.visit(`http://localhost:${portNumber}`);
  });
  it(`selecting a row`, () => {
    cy.get("tbody > tr > td > input").eq(0).click();
    cy.get("tbody > tr > td > input").eq(1).click();
  });
  it(`check if the Total Rows is 2`, () => {
    cy.contains("Total Rows:2");
  });
  it(`check if there is warning`, () => {
    cy.contains(
      "Review the rows that you have selected for removing, by clicking Delete you might not get the data back"
    );
  });
});

describe("[🧪] Checking the searching functionality", () => {
  let searchEmailId = "";
  it(`Go to Localhost:${portNumber}`, () => {
    cy.visit(`http://localhost:${portNumber}`);
  });
  it(`Search for name in table`, () => {
    cy.intercept({
      method: "GET",
      url: "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json",
    }).as("recivedMemberData");
    cy.visit(`http://localhost:${portNumber}`);
    cy.wait("@recivedMemberData")
      .then((response) => {
        return response;
      })
      .then((response) => {
        const firstRecordEmail = response.response.body[0].email;
        searchEmailId = firstRecordEmail;
        cy.get(".Searchbox > input").type(firstRecordEmail);
        cy.get(".Searchbox").contains("Search").click();
      });
  });
  it("check if the table has only one record with searched name", () => {
    cy.get("tbody tr").should("have.length", 1);
  });
});

describe("[🧪] Checking the deleting functionality, deleting one row", () => {
  it(`Go to Localhost:${portNumber}`, () => {
    cy.visit(`http://localhost:${portNumber}`);
  });
  it(`selecting a row`, () => {
    cy.get("tbody > tr > td > input").first().click();
  });
  it(`check if the Total Rows is 1`, () => {
    cy.contains("Total Rows:1");
  });
  let selectedEmail = "";
  it(`getting the email of the selected member`, () => {
    cy.get("div.LabeledInput")
      .find('[placeholder="Email"]')
      .invoke("val")
      .then((emailId) => (selectedEmail = emailId));
  });
  it("Delet the record", () => {
    cy.get(".Form_buttonsContainer")
      .find("button")
      .contains("Delete")
      .click({ delay: 10 });
  });
  it("Search for the searched name", () => {
    cy.get(".Searchbox > input").type(selectedEmail);
    cy.get(".Searchbox").contains("Search").click();
  });
  it("check if record exist", () => {
    cy.get("tbody > tr").should("contain", "There no record to show");
  });
});

describe("[🧪] Checking the editing functionality, editing one row", () => {
  it(`Go to Localhost:${portNumber}`, () => {
    cy.visit(`http://localhost:${portNumber}`);
  });
  it(`selecting a row`, () => {
    cy.get("tbody > tr > td > input").first().click();
  });
  it(`check if the Total Rows is 1`, () => {
    cy.contains("Total Rows:1");
  });
  let selectedEmail = "";
  it(`getting the email of the selected member`, () => {
    cy.get("div.LabeledInput")
      .find('[placeholder="Email"]')
      .invoke("val")
      .then((emailId) => (selectedEmail = emailId));
  });
  it(`update the role and name`, () => {
    const nameInput = cy.get("div.LabeledInput").find('[placeholder="Name"]');
    nameInput.clear();
    nameInput.type("New_name", { delay: 0 });
    const roleInput = cy.get("div.LabeledInput").find('[placeholder="Role"]');
    roleInput.clear();
    roleInput.type("New_role", { delay: 0 });
  });
  it(`update record`, () => {
    cy.get(".Form_buttonsContainer")
      .find("button")
      .contains("Edit")
      .click({ delay: 10 });
  });
  it("search for the searched name", () => {
    cy.get(".Searchbox > input").type(selectedEmail);
    cy.get(".Searchbox").contains("Search").click();
  });
  it("checking name and role are updated", () => {
    cy.get("tbody > tr").should("contain", "New_name");
    cy.get("tbody > tr").should("contain", "New_role");
  });
});

describe(`[🧪] Checking "go to last page" pagination button`, () => {
  let lastPageNumber = 0;
  it(`waiting for data to be fetched`, () => {
    cy.intercept({
      method: "GET",
      url: "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json",
    }).as("recivedMemberData");

    cy.visit(`http://localhost:${portNumber}`);

    cy.wait("@recivedMemberData").then(async (response) => {
      const recMemLs = response.response.body.length;
      cy.get(".Pagination")
        .children()
        .then((paginationBtn) => {
          const pageCount = Math.ceil(recMemLs / 10);
          lastPageNumber = pageCount;
        });
    });
  });
  it(`selecting "go to last page" button`, () => {
    cy.get(`button.RoundButton:last-child`).click();
  });
  it(`checking the last page is selected`, () => {
    cy.get(`button.RoundButton.selected`)
      .invoke("text")
      .then((value) => {
        expect(lastPageNumber.toString()).to.equal(value.trim());
      });
  });
});

describe(`[🧪] Checking "go to first page" pagination button`, () => {
  let firstPageNumber = 1;
  it(`waiting for data to be fetched`, () => {
    cy.visit(`http://localhost:${portNumber}`);
  });
  it(`selecting "go to first page" button`, () => {
    cy.get(`button.RoundButton:first-child`).click();
  });
  it(`checking the first page is selected`, () => {
    cy.get(`button.RoundButton.selected`)
      .invoke("text")
      .then((value) => {
        expect(firstPageNumber.toString()).to.equal(value.trim());
      });
  });
});
