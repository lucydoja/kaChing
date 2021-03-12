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
				const data = datos;
				let user_token = sessionStorage.getItem("user_token");

				fetch(process.env.BACKEND_URL + "/api/expense", {
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
							const expense = getStore().expenses;
							const updExpense = expense.concat(data);
							setStore({ expenses: [...updExpense] });
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

				fetch(process.env.BACKEND_URL + "/api/income", {
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
							const income = getStore().incomes;
							const updIncome = income.concat(data);
							setStore({ incomes: [...updIncome] });
						}
						return response.json();
					})
					.then(data => {
						console.log("Succesfully added income");
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			deleteExpense: variable => {
				let user_token = sessionStorage.getItem("user_token");

				fetch(process.env.BACKEND_URL + "/api/expense", {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + user_token
					},
					body: JSON.stringify({ id: variable })
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						} else {
							const expense = getStore().expenses;
							const updExpense = expense.filter(item => item.id !== variable);
							setStore({ expenses: [...updExpense] });
						}
						return response.json();
					})
					.then(data => {
						setStore({ favorites: data });
						console.log("Expense deleted");
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			deleteIncome: variable => {
				let user_token = sessionStorage.getItem("user_token");

				fetch(process.env.BACKEND_URL + "/api/income", {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + user_token
					},
					body: JSON.stringify({ id: variable })
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						} else {
							const income = getStore().incomes;
							const updIncome = income.filter(item => item.id !== variable);
							setStore({ incomes: [...updIncome] });
						}
						return response.json();
					})
					.then(data => {
						setStore({ favorites: data });
						console.log("Income deleted");
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},
			getIncome: () => {
				let user_token = sessionStorage.getItem("user_token");
				fetch(process.env.BACKEND_URL + "/api/income", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + user_token
					}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						const updIncome = data.data;
						setStore({ incomes: [...updIncome] });
					});
			},
			getExpense: () => {
				let user_token = sessionStorage.getItem("user_token");
				fetch(process.env.BACKEND_URL + "/api/expense", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + user_token
					}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						const updExpense = data.data;
						setStore({ expenses: [...updExpense] });
					});
			}
		}
	};
};

export default getState;
