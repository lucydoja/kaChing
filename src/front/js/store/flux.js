const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			isLogged: "false",
			expenses: [],
			incomes: [],
			user: [],
			resume: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			/*exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}*/

			logged: () => {
				let status = sessionStorage.getItem("is_logged");
				status != "true" ? setStore({ isLogged: "false" }) : setStore({ isLogged: status });
			},

			logOut: () => {
				sessionStorage.removeItem("user_token");
				sessionStorage.removeItem("is_logged");
				getActions().logged();
			},

			addExpense: datos => {
				///ESTO SE TIENE QUE QUITAR AL FINAL Y DESCOMENTAR EL DE ABAJO
				let data = datos;
				let expense = getStore().expenses;
				expense = expense.concat(data);
				setStore({ expenses: [...expense] });

				let user_token = sessionStorage.getItem("user_token");

				fetch(process.env.BACKEND_URL + "/expense", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + user_token
					},
					body: JSON.stringify(data)
				})
					.then(response => {
						if (!response.ok) {
							response.text().then(text => alert(text));
							throw Error(response.statusText);
						} else {
							//let expense = getStore().expenses;
							//expense = expense.concat(data);
							//setStore({ expenses: [...expense] });
						}
						return response.json();
					})
					.then(data => {
						console.log("Succesfully added expense");
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			addIncome: datos => {
				let data = datos;
				let user_token = sessionStorage.getItem("user_token");
				///ESTO SE TIENE QUE QUITAR AL FINAL Y DESCOMENTAR EL DE ABAJO
				let income = getStore().incomes;
				income = income.concat(data);
				setStore({ incomes: [...income] });

				fetch(process.env.BACKEND_URL + "/income", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + user_token
					},
					body: JSON.stringify(data)
				})
					.then(response => {
						if (!response.ok) {
							response.text().then(text => alert(text));
							throw Error(response.statusText);
						} else {
							//let income = getStore().incomes;
							//income = income.concat(data);
							//setStore({ incomes: [...income] });
						}
						return response.json();
					})
					.then(data => {
						console.log("Succesfully added income");
					})
					.catch(error => {
						console.error("Error:", error);
					});
			}
		}
	};
};

export default getState;
