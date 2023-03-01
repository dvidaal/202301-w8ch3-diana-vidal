# DATA LAYER

## Data

### Product

- id
- name
- price
- image
- isAvailable

### Order

- id
- list of products
- customer
- state
  - ready to be dispatch
  - dispatch

### Client

- id
- username
- address
- email
- isLogged

## DATA MODIFICATIONS

### Product

- loadProducts
- set isAvailable
- unset isAvailable

### Orders

- add selected products
- delete selected products
- set order state to ready
- set order state to dispatched

## Customer

- create new user
- modify user
- set isLogged
- unset isLogged
