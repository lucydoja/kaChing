const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			isLogged: false,
			expenses: [],
			incomes: [],
			user: null,
			resume: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			logged: () => {
				let status = JSON.parse(sessionStorage.getItem("is_logged"));
				status != true ? setStore({ isLogged: false }) : setStore({ isLogged: status });
			},

			logOut: () => {
				sessionStorage.removeItem("access_token");
				sessionStorage.removeItem("is_logged");
				getActions().logged();
			},

			addExpense: datos => {
				const data = datos;
				let access_token = sessionStorage.getItem("access_token");

				fetch(process.env.BACKEND_URL + "/api/expense", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + access_token
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
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			addIncome: datos => {
				let data = datos;
				let access_token = sessionStorage.getItem("access_token");

				fetch(process.env.BACKEND_URL + "/api/income", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + access_token
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
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			deleteExpense: variable => {
				let access_token = sessionStorage.getItem("access_token");

				fetch(process.env.BACKEND_URL + "/api/expense", {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + access_token
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
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			deleteIncome: variable => {
				let access_token = sessionStorage.getItem("access_token");

				fetch(process.env.BACKEND_URL + "/api/income", {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + access_token
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
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},
			getIncome: () => {
				let access_token = sessionStorage.getItem("access_token");
				fetch(process.env.BACKEND_URL + "/api/income", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + access_token
					}
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						setStore({ incomes: data.data });
					})
					.catch(err => console.error(err));
			},
			getExpense: () => {
				let access_token = sessionStorage.getItem("access_token");
				fetch(process.env.BACKEND_URL + "/api/expense", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + access_token
					}
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						setStore({ expenses: data.data });
					})
					.catch(err => console.error(err));
			},

			getResume: () => {
				let access_token = sessionStorage.getItem("access_token");
				fetch(process.env.BACKEND_URL + "/api/finances", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + access_token
					}
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						setStore({ resume: data.data });
					})
					.catch(err => console.error(err));
			},

			getUser: () => {
				let access_token = sessionStorage.getItem("access_token");
				fetch(process.env.BACKEND_URL + "/api/user", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + access_token
					}
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						setStore({ user: data.data });
					})
					.catch(err => console.error(err));
			}
		}
	};
};

export default getState;
