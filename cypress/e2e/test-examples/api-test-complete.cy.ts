import 'cypress-plugin-api'

describe('complete', () => {
    it
    ('api-2', () => {
                 //const authUrl = Cypress.env('https://todos.dev.deltagreen.cz/auth/login');         
                 //Cypress.config('baseUrl', authUrl);         
                 cy.api({           
                    method: 'POST',             
                    url: 'https://todos.dev.deltagreen.cz/api/tasks/2f9a1a9f-baf1-4fad-b69e-dacb04140dea/complete',             
                    headers: {
                        authorization: 'Basic dGVzdDEyMzp0ZXN0MTIz'
                    },        
                }
            ).then(response => {             
                expect(response.status).to.eq(200);             
                expect(response.body).to.not.be.empty;             
                expect(response).to.have.property('headers')        
            })     
        }
    );
    });

    // bohuzel jsem neprisel na to jak si tahat spravne id zpravy z BE, se zpravou kterou vraci FE na tetsovaci appce jsem se setkal poprve. Musel jsme vse nakonec hardcode coz z hlediska e2e neni idelani. 