import appConfig from '../../application.conf';

const portNumber = appConfig.PORT

// describe('Check if the application is loading at Go to Localhost', () => {
//   it(`Go to Localhost:${portNumber}`, () => {
//     cy.visit(`http://localhost:${portNumber}`)
//   })

//   it(`Contains the welcome message in the applications`, () => {
//     cy.contains('Welcome to the ADMIN PAGE')
//   })

// });
// describe('Check if the data populated with data from api', () => {
//   it(`Checking if the table is populated after the api is intiated`, () => {
//     cy.intercept({
//       method: 'GET',
//       url: 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json',
//     }).as('recivedMemberData');
//     cy.visit(`http://localhost:${portNumber}`)
//     cy.wait('@recivedMemberData').then(
//       async (response) => {
//         const recMemLs = response.response.body.length;
//         cy.get('.Pagination').children().then((paginationBtn) => {
//           const currentPagination = paginationBtn.length - 4;
//           const pageCount = Math.ceil(recMemLs / 10);
//           expect(pageCount).to.equal(currentPagination)
//         })
//       }
//     )
//   })
// });

// describe('Checking if the correct form is displayed on selecting a row from table', () => {
//   it(`Go to Localhost:${portNumber}`, () => {
//     cy.visit(`http://localhost:${portNumber}`)
//   })
//   it(`selecting a row`, () => {
//     cy.get('tbody > tr > td > input').first().click()
//   })
//   it(`check if the Total Rows is 1`, () => {
//     cy.contains("Total Rows:1")
//   })
//   it(`Check if the form has 3 inputs`, () => {
//     cy.get('div.LabeledInput').should('have.length', 3)
//   })
//   it(`Check if the form has Name, Role and Email inputs`, () => {
//     const labels = cy.get('div.LabeledInput').children();
//     labels.should('contain', 'Name');
//     labels.should('contain', 'Role');
//     labels.should('contain', 'Email');
//   })
// });

describe('Checking if the correct form is displayed on selecting multiple row from table', () => {
  it(`Go to Localhost:${portNumber}`, () => {
    cy.visit(`http://localhost:${portNumber}`)
  })
  it(`selecting a row`, () => {
    cy.get('tbody > tr > td > input').click()
  })
  it(`check if the Total Rows is 1`, () => {
    cy.contains("Total Rows:1")
  })
  it(`Check if the form has 3 inputs`, () => {
    cy.get('div.LabeledInput').should('have.length', 3)
  })
  it(`Check if the form has Name, Role and Email inputs`, () => {
    const labels = cy.get('div.LabeledInput').children();
    labels.should('contain', 'Name');
    labels.should('contain', 'Role');
    labels.should('contain', 'Email');
  })
});