# Autocomplete Component

## Technologies
- JavaScript
- React
- Python
- FastAPI
- Uvicorn
- Jest
- React Testing Library
- Pytest
- CSS



## How to Run the Project
### Clone the Repository:
First, in your terminal, clone the repository to your local machine:
```bash
git clone https://github.com/ConorG180/autocomplete-component.git
```
Install all frontend dependencies:
```bash
cd frontend/autocomplete-component-project
npm install
```
Run frontend server:
```bash
cd frontend/autocomplete-component-project
npm run dev
```
On another terminal window, activate python virtual environement and install all backend dependencies:
```bash
cd backend
. venv/bin/activate
pip3 install -r requirements.txt
```
Run backend server :
```bash
cd backend
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```
Access localhost:
-  Navigate to http://localhost:5173/

## Testing

### Frontend Tests
To run frontend tests:
1. Navigate to the frontend project directory:
    ```bash
    cd frontend/autocomplete-component
    ```
2. Run the tests using Jest:
    ```bash
    npx jest
    ```

### Backend Tests
To run backend tests:
1. Navigate to the backend directory:
    ```bash
    cd backend
    ```
2. Run the tests using Pytest:
    ```bash
    pytest
    ```
