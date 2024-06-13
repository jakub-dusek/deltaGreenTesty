import 'cypress-plugin-api'
describe('login', () => {
it
('api-1', () => {
             //const authUrl = Cypress.env('https://todos.dev.deltagreen.cz/auth/login');         
             //Cypress.config('baseUrl', authUrl);         
             cy.api({             
                method: 'GET',             
                url: 'https://todos.dev.deltagreen.cz/auth/login',             
                body: {                                 
                    username: 'test123',                 
                    password: 'test123'            
                }         
            }
        ).then(response => {             
            expect(response.status).to.eq(200);             
            expect(response.body).to.not.be.empty;             
            expect(response).to.have.property('headers')        
        })     
    }
);
});

describe('task', () => {
    it
    ('api-2', () => {
                 //const authUrl = Cypress.env('https://todos.dev.deltagreen.cz/auth/login');         
                 //Cypress.config('baseUrl', authUrl);         
                 cy.api({             
                    method: 'POST',             
                    url: 'https://todos.dev.deltagreen.cz/api/tasks',             
                    headers: {
                        authorization: 'Basic dGVzdDEyMzp0ZXN0MTIz'
                    },
                    body: {
                        name: 'test123',                 
                        description: 'test123'         
                    }         
                }
            ).then(response => {             
                expect(response.status).to.eq(201);             
                expect(response.body).to.not.be.empty;             
                expect(response).to.have.property('headers')        
            })     
        }
    );
    });

    
     